"use client";

import styles from "./page.module.css";
import NeonBorder from "./NeonBorder";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: Record<string, string>
    ) => void;
  }
}

type PlatformKey =
  | "trendyol"
  | "yemeksepeti"
  | "migros"
  | "whatsapp";

type PlatformConfig = {
  webUrl: string;
  analyticsName: string;
  androidPackage?: string;
  useDirectLink?: boolean;
};

const platforms: Record<PlatformKey, PlatformConfig> = {
  trendyol: {
    webUrl:
      "https://tgoyemek.com/restoranlar/463004#wraps-tavuk-wrap-ve-durumler",
    analyticsName: "trendyol_go",
    androidPackage: "com.trendyol.go",
  },

  yemeksepeti: {
    webUrl: "https://yemek.go.link/ajp2F",
    analyticsName: "yemeksepeti",
    useDirectLink: true,
  },

  migros: {
    webUrl:
      "https://www.migros.com.tr/yemek/wrapup-chicken-wraps-karsiyaka-nergiz-mah-st-361a5",
    analyticsName: "migros_yemek",
    androidPackage: "com.inomera.sm",
  },

  whatsapp: {
    webUrl:
      "https://wa.me/905325192920?text=Merhaba%20WrapUp%20Chicken%2C%20sipariş%20vermek%20istiyorum.",
    analyticsName: "whatsapp",
    useDirectLink: true,
  },
};

function createAndroidIntent(
  webUrl: string,
  androidPackage: string
): string {
  const parsedUrl = new URL(webUrl);

  const destination =
    `${parsedUrl.host}${parsedUrl.pathname}` +
    `${parsedUrl.search}${parsedUrl.hash}`;

  return (
    `intent://${destination}` +
    `#Intent;` +
    `scheme=https;` +
    `package=${androidPackage};` +
    `S.browser_fallback_url=${encodeURIComponent(webUrl)};` +
    `end`
  );
}

export default function SiparisPage() {
  const trackPlatformClick = (platform: PlatformConfig) => {
    window.gtag?.("event", "platform_click", {
      platform_name: platform.analyticsName,
    });
  };

  const openPlatform = (platformKey: PlatformKey) => {
    const platform = platforms[platformKey];

    trackPlatformClick(platform);

    /*
      Yemeksepeti go.link ve WhatsApp bağlantıları,
      uygulamaya yönlendirme işini kendi sistemleriyle yapar.
    */
    if (platform.useDirectLink) {
      window.location.href = platform.webUrl;
      return;
    }

    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.includes("android");

    /*
      Trendyol GO ve Migros:
      Android'de önce uygulamayı açmayı dener.
      Olmazsa web bağlantısına geçer.
    */
    if (isAndroid && platform.androidPackage) {
      window.location.href = createAndroidIntent(
        platform.webUrl,
        platform.androidPackage
      );
      return;
    }

    /*
      iPhone, iPad ve masaüstünde normal HTTPS bağlantısı kullanılır.
    */
    window.location.href = platform.webUrl;
  };

  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <img
          src="/wrapup-siparis.png"
          alt="WrapUp Chicken sipariş platformları"
          className={styles.image}
          draggable={false}
        />

        {/* Sağ üst Siparişim */}
        <a
          href="#platformlar"
          className={`${styles.clickArea} ${styles.myOrder}`}
          aria-label="Sipariş platformlarına git"
        />

        {/* Turuncu Sipariş Platformunu Seç */}
        <a
          href="#platformlar"
          className={`${styles.clickArea} ${styles.selectPlatform}`}
          aria-label="Sipariş platformlarını görüntüle"
        />

        <span
          id="platformlar"
          className={styles.platformMarker}
        />

        {/* Trendyol GO */}
        <button
          type="button"
          aria-label="Trendyol GO üzerinden sipariş ver"
          className={`${styles.clickArea} ${styles.platformButton} ${styles.trendyol}`}
          onClick={() => openPlatform("trendyol")}
        >
          <NeonBorder className={styles.neonBorder} />
        </button>

        {/* Yemeksepeti */}
        <button
          type="button"
          aria-label="Yemeksepeti uygulamasında sipariş ver"
          className={`${styles.clickArea} ${styles.platformButton} ${styles.yemeksepeti}`}
          onClick={() => openPlatform("yemeksepeti")}
        >
          <NeonBorder className={styles.neonBorder} />
        </button>

        {/* Migros Yemek */}
        <button
          type="button"
          aria-label="Migros Yemek üzerinden sipariş ver"
          className={`${styles.clickArea} ${styles.platformButton} ${styles.migros}`}
          onClick={() => openPlatform("migros")}
        >
          <NeonBorder className={styles.neonBorder} />
        </button>

        {/* WhatsApp */}
        <button
          type="button"
          aria-label="WhatsApp üzerinden sipariş ver"
          className={`${styles.clickArea} ${styles.platformButton} ${styles.whatsapp}`}
          onClick={() => openPlatform("whatsapp")}
        >
          <NeonBorder className={styles.neonBorder} />
        </button>
      </div>
    </main>
  );
}