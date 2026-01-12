// src/components/OfficeAndCertificates.tsx
import Image from "next/image";
import styles from "@/styles/OfficeAndCertificates.module.css";

export default function OfficeAndCertificates() {
  return (
    <section className={styles.wrapper}>
      {/* OUR OFFICE */}
      <div className={styles.sectionTitle}>
        <h2>OUR OFFICE</h2>
        <span />
      </div>

      <div className={styles.officeRow}>
        {officeImages.map((src, i) => (
          <div key={i} className={styles.officeImage}>
            <Image src={src} alt="Office" fill />
          </div>
        ))}
      </div>

      {/* CERTIFICATES */}
      <div className={styles.sectionTitle}>
        <h2>CERTIFICATES</h2>
        <span />
      </div>

      <div className={styles.certGrid}>
        {certificates.map((src, i) => (
          <div key={i} className={styles.certItem}>
            <Image src={src} alt="Certificate" fill />
          </div>
        ))}
      </div>
    </section>
  );
}

const officeImages = ["/images/office/1.jpg", "/images/office/2.jpg", "/images/office/3.jpg"];

const certificates = ["/images/certificates/fssai.jpg", "/images/certificates/iso.webp"];
