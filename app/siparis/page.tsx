"use client";

import styles from "./page.module.css";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: Record<string, string>
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

function NeonBorder() {
  return (
    <svg
      className={styles.neonBorder}
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        className={styles.neonBase}
        x="2"
        y="2"
        width="196"
        height="96"
        rx="16"
        ry="16"
        pathLength="100"
      />

      <rect
        className={styles.neonRunner}
        x="2"
        y="2"
        width="196"
        height="96"
        rx="16"
        ry="16"
        pathLength="100"
        strokeDasharray="18 82"
        strokeDashoffset="0"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-100"
          dur="2.6s"
          repeatCount="indefinite"
        />
      </rect>

      <rect
        className={styles.neonSpark}
        x="2"
        y="2"
        width="196"
        height="96"
        rx="16"
        ry="16"
        pathLength="100"
        strokeDasharray="3 97"
        strokeDashoffset="-7"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="-7"
          to="-107"
          dur="2.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}

export default function SiparisPage() {
  const trackPlatformClick = (platform: string) => {
    window.gtag?.("event", "platform_click", {
      platform_name: platform,
    });
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
          <NeonBorder />
        </a>

        <a
          href={platformLinks.yemeksepeti}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Yemeksepeti üzerinden sipariş ver"
          className={`${styles.clickArea} ${styles.platformButton} ${styles.yemeksepeti}`}
          onClick={() => trackPlatformClick("yemeksepeti")}
        >
          <NeonBorder />
        </a>

        <a
          href={platformLinks.migros}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Migros Yemek üzerinden sipariş ver"
          className={`${styles.clickArea} ${styles.platformButton} ${styles.migros}`}
          onClick={() => trackPlatformClick("migros_yemek")}
        >
          <NeonBorder />
        </a>

        <a
          href={platformLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp üzerinden sipariş ver"
          className={`${styles.clickArea} ${styles.platformButton} ${styles.whatsapp}`}
          onClick={() => trackPlatformClick("whatsapp")}
        >
          <NeonBorder />
        </a>
      </div>
    </main>