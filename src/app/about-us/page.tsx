import styles from "@/styles/about.module.css";

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <h1>ABOUT US</h1>
      </div>

      {/* CONTENT */}
      <section className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.aboutCard}>
          <p>
            OM EXIM Corporation is the name, which is reckoned by the clients with conviction in Exporting a wide range
            of Spices, Oil Seeds, Herbs and other Agro Products etc. that are commonly required in your daily life. Our
            strength lies in sourcing and processing quality agro products and shipping them in time to the worldwide
            customers.
          </p>

          <p>
            We are Unjha, Gujarat, India based Govt of India Recognized Two STAR EXPORT House Status Holder Exporter and
            also registered with ISO 22000:2005, HACCP, HALAL, USFDA, Spices Board of India, IOPEPC and APEDA.
          </p>

          <p>
            <strong>Whole Spices:</strong> Cumin, Fennel, Coriander, Mustard, Fenugreek, Dill, Ajwain, Kalonji, Chilli,
            Turmeric, Green & Black Cardamom, Clove, Basil, Cinnamon, Asafoetida, Bay leaves, Mace, Celery, Curry
            Leaves, Garlic, Ginger, Kokam, Nutmeg, Tamarind, Pepper.
          </p>

          <p>
            <strong>Spices Powder:</strong> Garam Masala, Achar Masala, Chhas Masala, Amchur, Curry Powder, Tea Masala.
          </p>

          <p>
            <strong>Oil Seeds:</strong> Sesame (White, Black & Hulled), Mustard, Groundnuts, Flax, Safflower, Sunflower,
            Castor.
          </p>

          <p>
            <strong>Herbs:</strong> Psyllium Seeds & Husk, Moringa, Amla, Chia, Bilwa, Brahmi, Jojoba, Neem, Triphala,
            Stevia, Tulsi, Saffron and other Indian herbs.
          </p>

          <p>
            <strong>Dehydrated Products:</strong> Onion, Garlic Flakes, Chilly Flakes, Coriander Leaves and vegetable
            powders.
          </p>

          <p>
            <strong>Grains & Beans:</strong> Soybean, Wheat, Bajra, Chana, Maize, Sorghum, Millet, Chickpeas, Rice.
          </p>

          <p>
            <strong>Others:</strong> Soya Chunk, Coconut, Pickles, Watermelon Seeds etc.
          </p>

          <p>We do machine cleaning, Optical Color Sorting, ETO/STEAM Sterilization as per customer requirements.</p>

          <ul>
            <li>We are committed to meeting customer needs.</li>
            <li>We provide clear and regular communication.</li>
            <li>We value ethics and integrity.</li>
            <li>We ensure timely and accurate service.</li>
            <li>We look forward to long-term associations.</li>
          </ul>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className={styles.sidebar}>
          <div className={styles.box}>
            <h3>OUR PRODUCTS</h3>
            <ul>
              <li>SPICES</li>
              <li>OIL SEEDS</li>
              <li>HERBS</li>
            </ul>
          </div>

          <div className={styles.box}>
            <h3>INQUIRY</h3>
            <form className={styles.form}>
              <input placeholder="Your Name (required)" />
              <input placeholder="Your Email (required)" />
              <input placeholder="Subject" />
              <textarea placeholder="Your Message" />
              <button type="submit">Send</button>
            </form>
          </div>
        </aside>
      </section>
    </>
  );
}
