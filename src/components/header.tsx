"use client";

import { useEffect, useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import Image from "next/image";
import { products } from "@/data/products";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Example() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (pathname === "/") {
      timer = setTimeout(() => setShow(false), 2500);
    } else {
      setShow(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <header
      id="site-header"
      className="bg-white sticky top-0 z-50 shadow-md"
      style={{
        display: show ? "none" : "block",
      }}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 py-3 lg:px-8">
        <div className="flex lg:flex-1 items-center gap-2">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Siddhi Vinayak Exim</span>
            <Image alt="Logo" src="/logo.png" height={32} width={50} className="md:h-10 h-6 w-auto object-contain" />
          </Link>
          <h1 className="text-[#214d3b] text-lg font-[poppins] mt-1.5">Siddhi Vinayak Exim</h1>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#214d3b]">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Popover open={open} onOpenChange={setOpen}>
            <div onMouseEnter={() => setOpen(true)}>
              <PopoverTrigger asChild>
                <Link href="/products">
                  <button className="flex items-center gap-x-1 text-sm/6 font-semibold text-[#214d3b] cursor-pointer">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-500" />
                  </button>
                </Link>
              </PopoverTrigger>
              <PopoverContent className="p-2">
                <div className="p-0">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg px-4 py-2 text-sm/6 hover:bg-white/5">
                      <div className="flex-auto">
                        <a href={"/products/" + item.slug} className="block font-semibold text-[#214d3b]">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </div>
          </Popover>
          <Link href="/about" className="text-sm/6 font-semibold text-[#214d3b]">
            About
          </Link>
          <Link href="/careers" className="text-sm/6 font-semibold text-[#214d3b]">
            Career
          </Link>
          <Link href="/certificates" className="text-sm/6 font-semibold text-[#214d3b]">
            Certificates
          </Link>
          <Link href="/contact" className="text-sm/6 font-semibold text-[#214d3b]">
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/inquire" className="text-sm/6 font-semibold text-[#214d3b]">
            Inquiry <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} direction="right">
        <DrawerContent className="sm:max-w-sm w-full! overflow-y-auto p-4 after:w-0! z-99999">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              onClick={() => {
                setMobileMenuOpen(false);
              }}>
              <span className="sr-only">Your Company</span>
              <img alt="Logo" src="/logo.png" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-[#214d3b]">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#214d3b] hover:bg-white/5">
                    <Link
                      href="/products"
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}>
                      Products
                    </Link>
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={"/products/" + item.slug}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#214d3b] hover:bg-white/5"
                        onClick={() => {
                          setMobileMenuOpen(false);
                        }}>
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Link
                  href="/about"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#214d3b] hover:bg-white/5">
                  About
                </Link>
                <Link
                  href="/careers"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#214d3b] hover:bg-white/5">
                  Careers
                </Link>
                <Link
                  href="/certificates"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#214d3b] hover:bg-white/5">
                  Certificates
                </Link>
                <Link
                  href="/contact"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#214d3b] hover:bg-white/5">
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/inquire"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-[#214d3b] hover:bg-white/5">
                  Inquiry
                </Link>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      {/* <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10"></DialogPanel>
      </Dialog> */}
    </header>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import styles from "@/styles/Header.module.css";
// import Link from "next/link";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [openSecond, setOpenSecond] = useState(false);

//   const productMap: Record<string, string[]> = {
//     SPICES: [
//       "CUMIN SEEDS",
//       "CORIANDER SEEDS",
//       "FENNEL SEEDS",
//       "FENUGREEK SEEDS",
//       "TURMERIC",
//       "CHILLIES",
//       "DILL SEEDS",
//       "KALONJI SEEDS",
//       "AJWAIN SEEDS",
//     ],
//     "OIL SEEDS": ["SESAME SEEDS", "GROUNDNUTS", "CASTOR", "MUSTARD"],
//     HERBS: ["PSYLLIUM", "MORINGA", "TULSI", "AMLA"],
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.getElementById("site-header");
//       if (window.scrollY > 50) {
//         header?.classList.add("scrolled");
//       } else {
//         header?.classList.remove("scrolled");
//       }
//     };
//     handleScroll(); // Initial check

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <header id="site-header" className={styles.header}>
//         <div className={styles.container}>
//           <div className={styles.logo}>
//             {/* <Link href="/">
//               <img src="/logo.png" alt="Siddhi Vinayak Exim" />
//             </Link> */}

//             <Link href="/" className="logo-text flex gap-3">
//               <div className="h-8 w-8 bg-white rounded-full"></div>
//               <h1 className="text-white">Siddhi Vinayak Exim</h1>
//               {/* <span>An ISO 22000:2005 Certified Company</span> */}
//             </Link>
//           </div>

//           <nav className={styles.nav}>
//             <Link href="/" onMouseEnter={() => setOpen(false)}>
//               HOME
//             </Link>
//             <Link href="about" onMouseEnter={() => setOpen(false)}>
//               ABOUT US
//             </Link>
//             {/* PRODUCTS BUTTON */}
//             <div className={styles.productsContainer}>
//               <button className={styles.productsBtn} onClick={() => setOpen(!open)} onMouseEnter={() => setOpen(true)}>
//                 PRODUCTS
//               </button>
//               {open && (
//                 <div className={`${styles.drawer} ${open ? styles.open : ""}`} onMouseLeave={() => setOpen(false)}>
//                   <ul>
//                     <li>
//                       <Link href="/products/ashwagandha">Ashwagandha Root</Link>
//                     </li>
//                     <li>
//                       <Link href="/products/ashwagandha-powder">Ashwagandha Powder</Link>
//                     </li>
//                     <li>
//                       <Link href="/products/safed-musli">Safed Musli Root</Link>
//                     </li>
//                     <li>
//                       <Link href="/products/safed-musli-powder">Safed Musli Powder</Link>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//             <Link href="process" onMouseEnter={() => setOpen(false)}>
//               PROCESS
//             </Link>
//             <Link href="certificates" onMouseEnter={() => setOpen(false)}>
//               CERTIFICATES
//             </Link>
//             <Link href="contact" onMouseEnter={() => setOpen(false)}>
//               CONTACT
//             </Link>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
