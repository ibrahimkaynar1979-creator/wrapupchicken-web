import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.glow} aria-hidden="true" />

        <header className={styles.header}>
          <Link href="/" className={styles.brand}>
            <span>WRAP</span>
            <strong>UP</strong>
          </Link>

          <Link href="/siparis" className={styles.headerButton}>
            Sipariş Ver
          </Link>
        </header>

        <div className={styles.heroGrid}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>WRAPUP CHICKEN WRAPS</p>

            <h1 className={styles.title}>
              Lezzeti sar,
              <span>açlığına son ver.</span>
            </h1>

            <p className={styles.description}>
              Taze sote tavuk, özel soslar ve günlük taze malzemelerle
              hazırlanan doyurucu tavuk wrap deneyimi.
            </p>

            <div className={styles.actions}>
              <Link href="/siparis" className={styles.primaryButton}>
                Sipariş Ver
                <span aria-hidden="true">→</span>
              </Link>

              <a href="#neden-wrapup" className={styles.secondaryButton}>
                Neden WrapUp?
              </a>
            </div>

            <div className={styles.features}>
              <span>Wok tavada sote tavuk</span>
              <span>Günlük taze malzeme</span>
              <span>Karşıyaka&apos;ya hızlı teslimat</span>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.imageGlow} aria-hidden="true" />

            <img
              src="/wrapup-hero.png"
              alt="Cheddar soslu WrapUp tavuk wrap"
              className={styles.heroImage}
            />

            <div className={styles.badge}>
              <strong>140 g</strong>
              <span>Sote tavuk</span>
            </div>
          </div>
        </div>
      </section>

      <section id="neden-wrapup" className={styles.whySection}>
        <p className={styles.sectionEyebrow}>NEDEN WRAPUP?</p>

        <h2>Her lokmada bol malzeme, güçlü lezzet.</h2>

        <p>
          Taze sote tavuk, özel soslar ve günlük hazırlanan malzemelerle
          doyurucu bir wrap deneyimi.
        </p>
      </section>
    </main>
  );
}