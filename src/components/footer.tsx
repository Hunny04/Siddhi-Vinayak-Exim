import { products } from "@/data/products";
import styles from "@/styles/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.footerGrid}>
        <div>
          <h4>MENU</h4>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
            {/* <li>
              <Link href="products">PRODUCTS</Link>
            </li> */}
            <li>
              <Link href="/careers">CAREER</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT US</Link>
            </li>
            <li>
              <Link href="/certificates">CERTIFICATES</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>PRODUCTS</h4>
          <ul>
            {products.map((product, idx) => (
              <li key={idx}>
                <Link href={`/products/${product.slug}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-1 col-span-2">
          <h4>CONTACT</h4>
          <p>Surat, Gujarat - India.</p>
          <p className={styles.email}>siddhivinayakeximtbp55@gmail.com</p>
          <p className={styles.number}>8320708852 | 8733928558</p>
          <p className="mt-2 underline">
            <Link href="/inquire">Send Inquiry</Link>
          </p>
        </div>
      </div>

      <div className={styles.copyright}>
        © All right reserved 2025 <br />
        Proudly powered by Siddhi Vinayak Exim
      </div>
    </footer>
  );
}
