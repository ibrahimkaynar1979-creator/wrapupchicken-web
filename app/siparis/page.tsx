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

type PlatformMode =
  | "web"
  | "smart-link"
  | "android-intent";

type PlatformConfig = {
  url: string;
  analyticsName: string;
  mode: PlatformMode;
  androidPackage?: string;
};

const platforms: Record<PlatformKey, PlatformConfig> = {
  trendyol: {
    url:
      "https://tgoyemek.com/restoranlar/463004#wraps-tavuk-wrap-ve-durumler",
    analyticsName: "trendyol_go",
    mode: "web",
  },

  yemeksepeti: {
    url: "https://yemek.go.link/ajp2F",
    analyticsName: "yemeksepeti",
    mode: "smart-link",
  },

  migros: {
    url:
      "https://www.migros.com.tr/yemek/wrapup-chicken-wraps-karsiyaka-nergiz-mah-st-361a5",
    analyticsName: "migros_yemek",
    mode: "android-intent",
    androidPackage: "com.inomera.sm",
  },

  whatsapp: {
    url:
      "https://wa.me/905325192920?text=Merhaba%20WrapUp%20Chicken%2C%20sipariş%20vermek%20istiyorum.",
    analyticsName: "whatsapp",
    mode: "smart-link",
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

    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.includes("android");

    /*
      Yemeksepeti ve WhatsApp:
      Kendi akıllı bağlantı sistemleri doğrudan kullanılır.
    */
    if (platform.mode === "smart-link") {
      window.location.href = platform.url;
      return;
    }

    /*
      Migros:
      Android telefonda önce uygulamayı açmayı dener.
      Uygulama açılmazsa web sayfasına geçer.
    */
    if (
      platform.mode === "android-intent" &&
      isAndroid &&
      platform.androidPackage
    ) {
      window.location.href = createAndroidIntent(
        platform.url,
        platform.androidPackage
      );
      return;
    }

    /*
      Trendyol ve diğer durumlar:
      Normal web bağlantısı açılır.
    */
    window.location.href = platform.url;
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

        {/* Sipariş platformunu seç */}
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
          aria-label="Migros Yemek uygulamasında sipariş ver"
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