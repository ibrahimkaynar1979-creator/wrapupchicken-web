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
  androidPackage?: string;
  analyticsName: string;
};

const platforms: Record<PlatformKey, PlatformConfig> = {
  trendyol: {
    webUrl:
      "https://tgoyemek.com/restoranlar/463004#wraps-tavuk-wrap-ve-durumler",
    androidPackage: "com.trendyol.go",
    analyticsName: "trendyol_go",
  },

  yemeksepeti: {
    webUrl:
      "https://www.yemeksepeti.com/restaurant/adwl/wrapup-chicken-wraps-adwl",
    androidPackage: "com.inovel.app.yemeksepeti",
    analyticsName: "yemeksepeti",
  },

  migros: {
    webUrl:
      "https://www.migros.com.tr/yemek/wrapup-chicken-wraps-karsiyaka-nergiz-mah-st-361a5",
    androidPackage: "com.inomera.sm",
    analyticsName: "migros_yemek",
  },

  whatsapp: {
    webUrl:
      "https://wa.me/905325192920?text=Merhaba%20WrapUp%20Chicken%2C%20sipariş%20vermek%20istiyorum.",
    analyticsName: "whatsapp",
  },
};

function createAndroidIntent(
  webUrl: string,
  androidPackage: string
): string {
  const parsedUrl = new URL(webUrl);

  const path =
    `${parsedUrl.host}${parsedUrl.pathname}` +
    `${parsedUrl.search}${parsedUrl.hash}`;

  return (
    `intent://${path}` +
    `#Intent;` +
    `scheme=https;` +
    `package=${androidPackage};` +
    `S.browser_fallback_url=${encodeURIComponent(webUrl)};` +
    `end`
  );
}

export default function SiparisPage() {
  const trackPlatformClick = (platform: PlatformConfig) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "platform_click", {
        platform_name: platform.analyticsName,
      });
    }
  };

  const openPlatform = (platformKey: PlatformKey) => {
    const platform = platforms[platformKey];

    trackPlatformClick(platform);

    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.includes("android");

    /*
      Android:
      Önce uygulamayı açmayı dener.
      Uygulama veya bağlantı desteği yoksa web sayfasına geçer.
    */
    if (isAndroid && platform.androidPackage) {
      const intentUrl = createAndroidIntent(
        platform.webUrl,
        platform.androidPackage
      );

      window.location.href = intentUrl;
      return;
    }

    /*
      iPhone / iPad / masaüstü:
      Normal HTTPS bağlantısı kullanılır.

      İlgili uygulama Universal Link destekliyorsa uygulama açılabilir.
      Instagram bunu engellerse web sayfası açılır.
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
          aria-label="Trendyol GO uygulamasında sipariş ver"
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
          aria-label="Migros uygulamasında sipariş ver"
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