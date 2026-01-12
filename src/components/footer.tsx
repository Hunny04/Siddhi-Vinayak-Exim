// src/components/ContactAndFooter.tsx
import styles from "@/styles/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <h4>MENU</h4>
          <ul>
            <li>HOME</li>
            <li>
              <Link href="about-us">ABOUT US</Link>
            </li>
            <li>PRODUCTS</li>
            <li>PROCESS</li>
            <li>HARVEST CHART</li>
          </ul>
        </div>

        <div>
          <h4>PRODUCTS</h4>
          <ul>
            <li>SPICES</li>
            <li>OIL SEEDS</li>
            <li>HERBS</li>
          </ul>
        </div>

        <div>
          <h4>CONTACT</h4>
          <p>
            R.s No. 4942, Near Labh Sortex, Opp. Trishul Industries, Unjha - Aithor Road, Unjha - 384170, Gujarat -
            India.
          </p>
          <p className={styles.email}>omeximcorporation@gmail.com</p>
        </div>
      </div>

      <div className={styles.copyright}>
        © All right reserved 2025 <br />
        Proudly powered by Hunny | Theme: Corporate Plus by Acme Themes
      </div>
    </footer>
  );
}
