import React from "react";
import { Metadata } from "next";
import Careers from "./page";

export const metadata: Metadata = {
  title: "Careers at uSiS - Join Our Visionary IT Team",
  description:
    "Explore career opportunities with uSiS Technologies, where innovation meets collaboration. Be part of our mission to create transformative IT solutions",
  metadataBase: new URL("https://usistech.com/"),
  openGraph: {
    title: "Careers at uSiS - Join Our Visionary IT Team",
    description:
      "Explore career opportunities with uSiS Technologies, where innovation meets collaboration. Be part of our mission to create transformative IT solutions",
    url: "https://usistech.com/",
    images: "https://usistech.com/images/banner/poster.png",
    type: "website",
    siteName: "uSiS Technologies Private Limited",
  },
  twitter: {
    card: "summary_large_image",
    site: "@usistech",
    title: "Careers at uSiS - Join Our Visionary IT Team",
    description:
      "Explore career opportunities with uSiS Technologies, where innovation meets collaboration. Be part of our mission to create transformative IT solutions",
    images: "https://usistech.com/images/banner/poster.png",
  },
  alternates: {
    canonical:"https://usistech.com/careers"
  }
};
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        {children}
      </div>
    </>
  );
}
