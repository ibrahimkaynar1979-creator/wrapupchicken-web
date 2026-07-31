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
  url: string;
  analyticsName: string;
};

const platforms: Record<PlatformKey, PlatformConfig> = {
  trendyol: {
    url:
      "https://tgoyemek.com/restoranlar/463004#wraps-tavuk-wrap-ve-durumler",
    analyticsName: "trendyol_go",
  },

  yemeksepeti: {
    url: "https://yemek.go.link/ajp2F",
    analyticsName: "yemeksepeti",
  },

  /*
    Migros uygulamasında çalışan resmî paylaşım bağlantısını
    aşağıdaki URL'nin yerine yazmalısın.

    Şimdilik mevcut restoran web bağlantısı bırakıldı.
  */
  migros: {
    url:
      "https://www.migros.com.tr/yemek/wrapup-chicken-wraps-karsiyaka-nergiz-mah-st-361a5",
    analyticsName: "migros_yemek",
  },

  whatsapp: {
    url:
      "https://wa.me/905325192920?text=Merhaba%20WrapUp%20Chicken%2C%20sipariş%20vermek%20istiyorum.",
    analyticsName: "whatsapp",
  },
};

export default function SiparisPage() {
  const openPlatform = (platformKey: PlatformKey) => {
    const platform = platforms[platformKey];

    window.gtag?.("event", "platform_click", {
      platform_name: platform.analyticsName,
    });

    /*
      Tüm bağlantılar doğrudan açılır.

      Yemeksepeti'nin go.link adresi uygulamayı kendi açar.
      Trendyol normal web sayfasını güvenilir biçimde açar.
      Migros'un resmî akıllı paylaşım linki bulunduğunda aynı yere yazılır.
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

        {/* Sağ üst: Siparişim */}
        <a
          href="#platformlar"
          className={`${styles.clickArea} ${styles.myOrder}`}
          aria-label="Sipariş platformlarına git"
        />

        {/* Turuncu: Sipariş platformunu seç */}
        <a
          href="#platformlar"
          className={`${styles.clickArea} ${styles.selectPlatform}`}
          aria-label="Sipariş platformlarını görüntüle"
        />

        <span id="platformlar" className={styles.platformMarker} />

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