import React from "react";
import { Metadata } from "next";
import Privacy from "./page";

export const metadata: Metadata = {
  title: "Privacy Policy - uSiS Technologies",
  description:
    "At uSiS Technologies, we prioritize your data privacy and adhere to strict compliance standards to ensure secure information handling",
  metadataBase: new URL("https://usistech.com/"),
  openGraph: {
    title: "Privacy Policy - uSiS Technologies",
    description:
      "At uSiS Technologies, we prioritize your data privacy and adhere to strict compliance standards to ensure secure information handling",
    url: "https://usistech.com/",
    images: "https://usistech.com/images/banner/poster.png",
    type: "website",
    siteName: "uSiS Technologies Private Limited",
  },
  twitter: {
    card: "summary_large_image",
    site: "@usistech",
    title: "Privacy Policy - uSiS Technologies",
    description:
      "At uSiS Technologies, we prioritize your data privacy and adhere to strict compliance standards to ensure secure information handling",
    images: "https://usistech.com/images/banner/poster.png",
  },
  alternates: {
    canonical:"https://usistech.com/about/privacy-policy"
  }
};
export default function layout() {
  return (
    <>
      <div>
        <Privacy />
      </div>
    </>
  );
}
