"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
            <div>
              <a href="/">
                {isHomePage ? (
                  // For the homepage
                  scrolled ? (
                    <Image
                      className="object-contain object-left w-[230px] h-[41px] sm:w-[320px] sm:h-[80px]"
                      src="/images/logo/logo.png" // Image after scrolling
                      alt="uSiS Technologies Logo"
                      width={300}
                      height={80}
                      priority
                    />
                  ) : (
                    <Image
                      className="object-contain object-left w-[230px] h-[41px] sm:w-[320px] sm:h-[80px]"
                      src="/images/logo/logo-white.png" // Image before scrolling
                      alt="uSiS Technologies Logo"
                      width={300}
                      height={80}
                      priority
                    />
                  )
                ) : (
                  // For other pages
                  <Image
                    className="object-contain object-left w-[230px] h-[41px] sm:w-[320px] sm:h-[80px]"
                    src="/images/logo/logo.png" // Default logo on other pages
                    alt="uSiS Technologies Logo"
                    width={300}
                    height={80}
                    priority
                  />
                )}
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
                    className={`font-bold text-md py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${isHomePage
                        ? scrolled
                          ? "text-[#444444] border-b-4 border-sky-400"
                          : "md:text-white  border-b-4 border-sky-400"
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
                    className={`font-bold text-md py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${isHomePage
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
                    className={`font-bold text-md py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${isHomePage
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
    className={`font-bold text-md py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${
      isHomePage
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

                {/* <li>
                  <Link
                    onClick={closeMenu}
                    href="/casestudy"
                    className={`font-bold text-md py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${
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
                    className={`font-bold text-md py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${isHomePage
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
                    className={`font-bold text-md py-1 px-0 sm:pt-10 sm:pb-9 mx-4 block uppercase ${isHomePage
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
