"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [productOpen, setProductOpen] = useState(false);
  const productRef = useRef<HTMLLIElement | null>(null);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    function handleClickOutside(event: { target: any; }) {
      if (
        productRef.current &&
        !productRef.current.contains(event.target)
      ) {
        setProductOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll effect logic only for homepage
  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]); // only run when the pathname changes

  const isHomePage = pathname === "/"; // This checks if we are on the home page.

  return (
    <>
      <header
        className={`header-container fixed w-full sm:h-[100px] h-[75px] top-0 z-30 transition-all duration-300 flex items-center justify-between ${isHomePage
          ? scrolled
            ? "bg-white text-[#444444] shadow-lg" // On scroll, white background and dark text for home
            : "bg-black bg-opacity-20 text-white" // If not scrolled, black background with opacity 20 and white text for home
          : "bg-white text-black" // For other pages, white background and black text (no scroll effect)
          }`}
      >
        <div className="max-w-6xl container mx-auto">
          <nav className="flex flex-wrap items-center justify-between w-full sm:py-4 md:py-2 md:px-0 px-4 text-lg text-gray-700">
            <div className="flex items-center gap-2">
              <a href="/">
                {isHomePage ? (
                  scrolled ? (
                    <Image
                      className="w-[210px] h-auto sm:w-[300px]"
                      src="/images/logo/logo.png"
                      alt="uSiS Technologies Logo"
                      width={300}
                      height={50}
                      priority
                    />
                  ) : (
                    <Image
                      className="w-[210px] h-auto sm:w-[300px]"
                      src="/images/logo/logo-white.png"
                      alt="uSiS Technologies Logo"
                      width={355}
                      height={50}
                      priority
                    />
                  )
                ) : (
                  <Image
                    className="w-[210px] h-auto sm:w-[300px]"
                    src="/images/logo/logo.png"
                    alt="uSiS Technologies Logo"
                    width={355}
                    height={50}
                    priority
                  />
                )}
              </a>

              <a href="/official-frappe-erpnext-partner">
                <Image
                  src="/images/logo/frappe_partner.png"
                  alt="Frappe Partner"
                  width={302}
                  height={82}
                  className="w-[80px] sm:w-[80px] h-auto flex-shrink-0"
                  priority
                />
              </a>
            </div>

            <button
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={
                    isHomePage
                      ? scrolled
                        ? "currentColor"
                        : "#FFFFFF"
                      : "#444444"
                  } // Dark color for other pages by default
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={
                    isHomePage
                      ? scrolled
                        ? "currentColor"
                        : "#FFFFFF"
                      : "#444444"
                  } // Dark color for other pages by default
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            <div
              className={`${menuOpen ? "block" : "hidden"
                } w-full md:flex md:items-center md:w-auto`}
            >
              <ul className="header-menu pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                <li>
                  <Link
                    onClick={closeMenu}
                    href="/"
                    className={`font-bold text-sm py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${isHomePage
                      ? scrolled
                        ? "text-[#444444] border-b-4 border-sky-400"
                        : "md:text-white  border-b-4 border-sky-400"
                      : pathname.startsWith("/official-frappe-erpnext-partner")
                        ? "text-[#67bcdb] border-b-4 border-sky-400"
                        : "text-[#4c4a4a]"
                      } transition-colors hover:text-sky-400 hover:py-1 hover:px-0 hover:pt-10 hover:pb-9 hover:border-b-4 hover:border-sky-400`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    href="/about"
                    className={`font-bold text-sm py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${isHomePage
                      ? scrolled
                        ? "text-[#444444]"
                        : "md:text-white"
                      : pathname.startsWith("/about")
                        ? "text-[#67bcdb] border-b-4 border-sky-400"
                        : "text-[#4c4a4a]"
                      } transition-colors hover:text-sky-400 hover:py-1 hover:px-0 hover:pt-10 hover:pb-9 hover:border-b-4 hover:border-sky-400`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    href="/services"
                    className={`font-bold text-sm py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${isHomePage
                      ? scrolled
                        ? "text-[#444444]"
                        : "md:text-white"
                      : pathname.startsWith("/service")
                        ? "text-[#67bcdb] border-b-4 border-sky-400"
                        : "text-[#4c4a4a]"
                      } transition-colors hover:text-sky-400 hover:py-1 hover:px-0 hover:pt-10 hover:pb-9 hover:border-b-4 hover:border-sky-400`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    href="/solutions"
                    className={`font-bold text-sm py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${isHomePage
                      ? scrolled
                        ? "text-[#444444]"
                        : "md:text-white"
                      : pathname.startsWith("/solution")
                        ? "text-[#67bcdb] border-b-4 border-sky-400"
                        : pathname.startsWith("/industry")
                          ? "text-[#4c4a4a] border-b-4 border-transparent"
                          : "text-[#4c4a4a]"
                      } transition-colors hover:text-sky-400 hover:py-1 hover:px-0 hover:pt-10 hover:pb-9 hover:border-b-4 hover:border-sky-400`}
                  >
                    Solutions
                  </Link>
                </li>
                <li
                  ref={productRef}
                  className="relative flex items-center"
                  onMouseEnter={() => setProductOpen(true)}
                  onMouseLeave={() => setProductOpen(false)}
                >
                  <Link
                    href="/products"
                    onClick={closeMenu}
                    className={`font-bold text-sm py-1 px-0 sm:pt-10 sm:pb-9 mx-2 uppercase ${isHomePage
                      ? scrolled
                        ? "text-[#444444]"
                        : "md:text-white"
                      : pathname.startsWith("/products") ||
                        pathname.startsWith("/product") ||
                        pathname.startsWith("/product")
                        ? "text-[#67bcdb] border-b-4 border-sky-400"
                        : "text-[#4c4a4a]"
                      }`}
                  >
                    Products
                  </Link>

                  {productOpen && (
                    <ul className="absolute left-0 top-full w-48 bg-white shadow-lg z-50">
                      <li>
                        <Link
                          href="/product/erpnext"
                          onClick={() => {
                            closeMenu();
                            setProductOpen(false);
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-100"
                        >
                          ERPNext
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/product/frappe-hr"
                          onClick={() => {
                            closeMenu();
                            setProductOpen(false);
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-100"
                        >
                          Frappe HR
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>



                {/* <li>
                  <Link
                    onClick={closeMenu}
                    href="/casestudy"
                    className={`font-bold text-sm py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${
                      isHomePage
                        ? scrolled
                          ? "text-[#444444]"
                          : "md:text-white"
                        : pathname.startsWith("/casestudy")
                        ? "text-[#67bcdb] border-b-4 border-sky-400"
                        : "text-[#4c4a4a]"
                    } transition-colors hover:text-sky-400 hover:py-1 hover:px-0 hover:pt-10 hover:pb-9 hover:border-b-4 hover:border-sky-400`}
                  >
                    Casestudy
                  </Link>
                </li> */}
                <li>
                  <Link
                    onClick={closeMenu}
                    href="/careers"
                    className={`font-bold text-sm py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${isHomePage
                      ? scrolled
                        ? "text-[#444444]"
                        : "md:text-white"
                      : pathname.startsWith("/career")
                        ? "text-[#67bcdb] border-b-4 border-sky-400"
                        : "text-[#4c4a4a]"
                      } transition-colors hover:text-sky-400 hover:py-1 hover:px-0 hover:pt-10 hover:pb-9 hover:border-b-4 hover:border-sky-400`}
                  >
                    Careers
                  </Link>

                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    href="/contact"
                    className={`font-bold text-sm py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${isHomePage
                      ? scrolled
                        ? "text-[#444444]"
                        : "md:text-white"
                      : pathname === "/contact"
                        ? "text-[#67bcdb] border-b-4 border-sky-400"
                        : "text-[#4c4a4a]"
                      } transition-colors hover:text-sky-400 hover:py-1 hover:px-0 hover:pt-10 hover:pb-9 hover:border-b-4 hover:border-sky-400`}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Style */}
      <style jsx>{`
        @media (max-width: 768px) {
          .header-container {
            transition: background-color 0.3s ease;
          }
          .header-menu {
            display: ${menuOpen ? "block" : "none"};
            position: absolute;
            left: 0;
            right: 0;
            background: #ffffff;
            padding: 20px;
            flex-direction: column;
            align-items: center;
            height: 100vh;
          }
          .header-menu li {
            margin: 15px 0;
          }
          .header-menu li a {
            text-transform: uppercase;
            color: white;
            font-weight: bold;
            padding: 10px;
            display: block;
            transition: color 0.3s ease;
          }
          .header-menu li a:hover {
            color: #1d4ed8; /* Sky color */
          }
        }
      `}</style>
    </>
  );
}
