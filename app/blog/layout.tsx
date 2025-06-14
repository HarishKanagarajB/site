import React from "react";
import { Metadata } from "next";
import Blogs from "./page";

export const metadata: Metadata = {
  title: "Blog | uSiS Technologies",
  description:
    "Discover expert insights on AI, automation, and tech trends from USIS Tech to power your digital transformation.",
  metadataBase: new URL("https://usistech.com/"),
  openGraph: {
    title: "Blog | uSiS Technologies",
    description:
      "Discover expert insights on AI, automation, and tech trends from USIS Tech to power your digital transformation.",
    url: "https://usistech.com/",
    images: "https://usistech.com/images/banner/poster.png",
    type: "website",
    siteName: "uSiS Technologies Private Limited",
  },
  twitter: {
    card: "summary_large_image",
    site: "@usistech",
    title: "Blog | uSiS Technologies",
    description:
      "Discover expert insights on AI, automation, and tech trends from USIS Tech to power your digital transformation.",
    images: "https://usistech.com/images/banner/poster.png",
  },
  alternates: {
    canonical:"https://usistech.com/blog"
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
