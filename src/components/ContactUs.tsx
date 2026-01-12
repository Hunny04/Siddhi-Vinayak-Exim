// src/components/ContactAndFooter.tsx
import styles from "@/styles/ContactUs.module.css";

export default function ContactUs() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactOverlay} />

      <div className={styles.contactContent}>
        <h2>CONTACT US</h2>
        <span />

        <form className={styles.form}>
          <input type="text" placeholder="Your Name (required)" required />
          <input type="email" placeholder="Your Email (required)" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
