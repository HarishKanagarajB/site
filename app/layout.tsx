import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Suspense } from "react";
import Script from "next/script";
import Head from "next/head";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Innovative IT Solutions & Web Development | uSiS Technologies",
  description:
    "Explore top IT solutions and web development services with uSiS Technologies in Coimbatore. Enhance your business with expert tech support - contact us now!",
  openGraph: {
    title: "Innovative IT Solutions & Web Development | uSiS Technologies",
    description:
      "Explore top IT solutions and web development services with uSiS Technologies in Coimbatore. Enhance your business with expert tech support - contact us now!",
    url: "https://usistech.com/",
    images: "https://usistech.com/images/banner/poster.png",
    type: "website",
    siteName: "uSiS Technologies Private Limited",
  },
  twitter: {
    card: "summary_large_image",
    site: "@usistech",
    title: "Innovative IT Solutions & Web Development | uSiS Technologies",
    description:
      "Explore top IT solutions and web development services with uSiS Technologies in Coimbatore. Enhance your business with expert tech support - contact us now!",
    images: "https://usistech.com/images/banner/poster.png",
  },
  alternates: {
    canonical:"https://usistech.com/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "uSiS Technologies Private Limited",
    description:
      "uSiS Technologies is a global IT consultancy & solutions provider based out of Coimbatore, India. Aligned to the clients' requirements, our smart solutions are engineered to implement and expedite their digital communications and transactions with precision.",
    url: "https://usistech.com/",
    logo: "https://usistech.com/images/logo/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 7837838747",
      email: "info@usistech.com",
      contactType: "Customer Service",
      availableLanguage: ["English", "Tamil"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "2nd Floor, Site, 30 & 31, Thiru Senthil Nagar, NGGO Colony, K. Vadamadurai",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641017",
      addressCountry: {
      "@type": "Country",
      "name": "India"
    }
    },
    sameAs: ["https://www.linkedin.com/company/usis-technologies"],
  };
  // console.log(JSON.stringify(jsonLd));
  return (
    <html lang="en">
      {/* <Head> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-21K4SVJC6M"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-21K4SVJC6M');
          `}
        </Script>
      {/* </Head> */}
      <body
        className={montserrat.className}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="navbar">
          <Navbar />
        </div>
        <main className="flex-1 overflow-y-auto main-wrapper min-h-screen flex flex-col">
          <div className="homepage-wrapper">{children}</div>
        </main>
        <div className="footer">
          <Footer />
        </div>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
