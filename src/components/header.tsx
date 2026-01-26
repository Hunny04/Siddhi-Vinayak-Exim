"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  const productMap: Record<string, string[]> = {
    SPICES: [
      "CUMIN SEEDS",
      "CORIANDER SEEDS",
      "FENNEL SEEDS",
      "FENUGREEK SEEDS",
      "TURMERIC",
      "CHILLIES",
      "DILL SEEDS",
      "KALONJI SEEDS",
      "AJWAIN SEEDS",
    ],
    "OIL SEEDS": ["SESAME SEEDS", "GROUNDNUTS", "CASTOR", "MUSTARD"],
    HERBS: ["PSYLLIUM", "MORINGA", "TULSI", "AMLA"],
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("site-header");
      if (window.scrollY > 50) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };
    handleScroll(); // Initial check

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header id="site-header" className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            {/* <Link href="/">
              <img src="/logo.png" alt="Siddhi Vinayak Exim" />
            </Link> */}

            <Link href="/" className="logo-text flex gap-3">
              <div className="h-8 w-8 bg-white rounded-full"></div>
              <h1 className="text-white">Siddhi Vinayak Exim</h1>
              {/* <span>An ISO 22000:2005 Certified Company</span> */}
            </Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/" onMouseEnter={() => setOpen(false)}>
              HOME
            </Link>
            <Link href="about" onMouseEnter={() => setOpen(false)}>
              ABOUT US
            </Link>
            {/* PRODUCTS BUTTON */}
            <div className={styles.productsContainer}>
              <button className={styles.productsBtn} onClick={() => setOpen(!open)} onMouseEnter={() => setOpen(true)}>
                PRODUCTS
              </button>
              {open && (
                <div className={`${styles.drawer} ${open ? styles.open : ""}`} onMouseLeave={() => setOpen(false)}>
                  <ul>
                    <li>
                      <Link href="/product/ashwagandha">Ashwagandha Root</Link>
                    </li>
                    <li>
                      <Link href="/product/ashwagandha-powder">Ashwagandha Powder</Link>
                    </li>
                    <li>
                      <Link href="/product/safedmusli">Safed Musli Root</Link>
                    </li>
                    <li>
                      <Link href="/product/safedmusli-powder">Safed Musli Powder</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link href="process" onMouseEnter={() => setOpen(false)}>
              PROCESS
            </Link>
            <Link href="certificates" onMouseEnter={() => setOpen(false)}>
              CERTIFICATES
            </Link>
            <Link href="contact" onMouseEnter={() => setOpen(false)}>
              CONTACT
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
