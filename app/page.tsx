import styles from "./page.module.css";

export default function SiparisPage() {
  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <img
          src="/wrapup-siparis.png"
          alt="WrapUp Chicken sipariş sayfası"
          className={styles.image}
        />

        <a
          href="https://tgoyemek.com/restoranlar/463004#wraps-tavuk-wrap-ve-durumler"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trendyol GO üzerinden sipariş ver"
          className={`${styles.button} ${styles.trendyol}`}
        />

        <a
          href="https://www.yemeksepeti.com/restaurant/adwl/wrapup-chicken-wraps-adwl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Yemeksepeti üzerinden sipariş ver"
          className={`${styles.button} ${styles.yemeksepeti}`}
        />

        <a
          href="https://www.migros.com.tr/yemek/wrapup-chicken-wraps-karsiyaka-nergiz-mah-st-361a5"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Migros Yemek üzerinden sipariş ver"
          className={`${styles.button} ${styles.migros}`}
        />

        <a
          href="https://wa.me/905325192920?text=Merhaba%20WrapUp%20Chicken%2C%20sipariş%20vermek%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp üzerinden sipariş ver"
          className={`${styles.button} ${styles.whatsapp}`}
        />
      </div>
    </main>
  );
}