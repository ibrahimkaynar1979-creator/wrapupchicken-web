"use client";

import styles from "./page.module.css";
import NeonBorder from "./NeonBorder";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: Record<string, string | boolean>
    ) => void;
  }
}

const platformLinks = {
  trendyol:
    "https://tgoyemek.com/restoranlar/463004#wraps-tavuk-wrap-ve-durumler",
  yemeksepeti:
    "https://www.yemeksepeti.com/restaurant/adwl/wrapup-chicken-wraps-adwl",
  migros:
    "https://www.migros.com.tr/yemek/wrapup-chicken-wraps-karsiyaka-nergiz-mah-st-361a5",
  whatsapp:
    "https://wa.me/905325192920?text=Merhaba%20WrapUp%20Chicken%2C%20sipariş%20vermek%20istiyorum.",
};

export default function SiparisPage() {
  const trackPlatformClick = (platform: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "platform_click", {
        platform_name: platform,
      });
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

        <a
          href="#platformlar"
          className={`${styles.clickArea} ${styles.myOrder}`}
          aria-label="Sipariş platformlarına git"
        />

        <a
          href="#platformlar"
          className={`${styles.clickArea} ${styles.selectPlatform}`}
          aria-label="Sipariş platformlarını görüntüle"
        />

        <span id="platformlar" className={styles.platformMarker} />

        <a
          href={platformLinks.trendyol}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trendyol GO üzerinden sipariş ver"
          className={`${styles.clickArea} ${styles.platformButton} ${styles.trendyol}`}
          onClick={() => trackPlatformClick("trendyol_go")}
        >
          <NeonBorder className={styles.neonBorder} />
        </a>

        <a
          href={platformLinks.yemeksepeti}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Yemeksepeti üzerinden sipariş ver"
          className={`${styles.clickArea} ${styles.platformButton} ${styles.yemeksepeti}`}
          onClick={() => trackPlatformClick("yemeksepeti")}
        >
          <NeonBorder className={styles.neonBorder} />
        </a>

        <a
          href={platformLinks.migros}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Migros Yemek üzerinden sipariş ver"
          className={`${styles.clickArea} ${styles.platformButton} ${styles.migros}`}
          onClick={() => trackPlatformClick("migros_yemek")}
        >
          <NeonBorder className={styles.neonBorder} />
        </a>

        <a
          href={platformLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp üzerinden sipariş ver"
          className={`${styles.clickArea} ${styles.platformButton} ${styles.whatsapp}`}
          onClick={() => trackPlatformClick("whatsapp")}
        >
          <NeonBorder className={styles.neonBorder} />
        </a>
      </div>
    </main>
  );
}