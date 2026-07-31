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

const links = {
  trendyol:
    "https://tgoyemek.com/restoranlar/463004#wraps-tavuk-wrap-ve-durumler",

  yemeksepeti:
    "https://yemek.go.link/ajp2F",

  migros:
    "https://www.migros.com.tr/yemek/wrapup-chicken-wraps-karsiyaka-nergiz-mah-st-361a5",

  whatsapp:
    "https://wa.me/905325192920?text=Merhaba%20WrapUp%20Chicken%2C%20sipariş%20vermek%20istiyorum.",
};

function createMigrosAndroidIntent(webUrl: string): string {
  const parsedUrl = new URL(webUrl);

  const path =
    `${parsedUrl.host}${parsedUrl.pathname}` +
    `${parsedUrl.search}${parsedUrl.hash}`;

  return (
    `intent://${path}` +
    `#Intent;` +
    `scheme=https;` +
    `package=com.inomera.sm;` +
    `S.browser_fallback_url=${encodeURIComponent(webUrl)};` +
    `end`
  );
}

export default function SiparisPage() {
  const trackPlatformClick = (platformName: string) => {
    window.gtag?.("event", "platform_click", {
      platform_name: platformName,
    });
  };

  const openPlatform = (platform: PlatformKey) => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.includes("android");

    if (platform === "trendyol") {
      trackPlatformClick("trendyol_go");

      // Trendyol uygulama yönlendirmesi çalışmadığı için
      // normal restoran web sayfasını açıyoruz.
      window.location.href = links.trendyol;
      return;
    }

    if (platform === "yemeksepeti") {
      trackPlatformClick("yemeksepeti");

      // Yemeksepeti'nin resmî akıllı paylaşım bağlantısı.
      window.location.href = links.yemeksepeti;
      return;
    }

    if (platform === "migros") {
      trackPlatformClick("migros_yemek");

      // Android'de normal Migros restoran linkini
      // Migros uygulamasında açmayı dener.
      if (isAndroid) {
        window.location.href = createMigrosAndroidIntent(
          links.migros
        );
        return;
      }

      // iPhone, iPad ve masaüstünde normal bağlantı.
      window.location.href = links.migros;
      return;
    }

    if (platform === "whatsapp") {
      trackPlatformClick("whatsapp");
      window.location.href = links.whatsapp;
    }
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