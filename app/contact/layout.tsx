import React, { Suspense } from "react";
import { Metadata } from "next";
import Contact from "./page";

export const metadata: Metadata = {
  title: "Contact uSiS Technologies",
  description:
    "Contact uSiS Technologies for expert IT solutions & web development services in Coimbatore. Let’s discuss how we can help your business grow!",
  metadataBase: new URL("https://usistech.com/"),
  openGraph: {
    title: "Contact uSiS Technologies",
    description:
      "Contact uSiS Technologies for expert IT solutions & web development services in Coimbatore. Let’s discuss how we can help your business grow!",
    url: "https://usistech.com/",
    images: "https://usistech.com/images/banner/poster.png",
    type: "website",
    siteName: "uSiS Technologies Private Limited",
  },
  twitter: {
    card: "summary_large_image",
    site: "@usistech",
    title: "Contact uSiS Technologies",
    description:
      "Contact uSiS Technologies for expert IT solutions & web development services in Coimbatore. Let’s discuss how we can help your business grow!",
    images: "https://usistech.com/images/banner/poster.png",
  },
  alternates: {
    canonical:"https://usistech.com/contact"
  }
};
export default function layout() {
  return (
    <>
      <div>
        {/* <Contact/> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </div>
    </>
  );
}
