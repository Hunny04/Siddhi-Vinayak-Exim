"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Header.module.css";

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
            <img src="/logo.png" alt="OM EXIM Corporation" />
            {/* <div className="logo-text">
            <h1>OM EXIM Corporation</h1>
            <span>An ISO 22000:2005 Certified Company</span>
            </div> */}
          </div>

          <nav className={styles.nav}>
            <a href="#" onMouseEnter={() => setOpen(false)}>
              HOME
            </a>
            <a href="about-us" onMouseEnter={() => setOpen(false)}>
              ABOUT US
            </a>
            {/* PRODUCTS BUTTON */}
            <div className={styles.productsContainer}>
              <button className={styles.productsBtn} onClick={() => setOpen(!open)} onMouseEnter={() => setOpen(true)}>
                PRODUCTS
              </button>
              {open && (
                <div className={`${styles.drawer} ${open ? styles.open : ""}`} onMouseLeave={() => setOpen(false)}>
                  <ul>
                    <li>
                      <a href="/categories/spices">Spices</a>
                    </li>
                    <li>
                      <a href="/categories/oil-seeds">Oil Seeds</a>
                    </li>
                    <li>
                      <a href="/categories/herbs">Herbs</a>
                    </li>
                    <li>
                      <a href="/categories/grains">Grains</a>
                    </li>
                    <li>
                      <a href="/categories/dehydrated">Dehydrated</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <a href="#" onMouseEnter={() => setOpen(false)}>
              PROCESS
            </a>
            <a href="#" onMouseEnter={() => setOpen(false)}>
              CERTIFICATES
            </a>
            <a href="#" onMouseEnter={() => setOpen(false)}>
              CONTACT
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
