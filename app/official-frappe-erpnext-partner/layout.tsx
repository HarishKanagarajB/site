import { Metadata } from "next";
import Services from "./page";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "IT Services - uSiS Technologies",
  description:
    "Get expert IT consulting services in Coimbatore from uSiS Technologies. We help businesses optimize their tech strategies. Contact us for a consultation!",
  metadataBase: new URL("https://usistech.com/"),
  openGraph: {
    title: "IT Services - uSiS Technologies",
    description:
      "Get expert IT consulting services in Coimbatore from uSiS Technologies. We help businesses optimize their tech strategies. Contact us for a consultation!",
    url: "https://usistech.com/",
    images: "https://usistech.com/images/banner/poster.png",
    type: "website",
    siteName: "uSiS Technologies Private Limited",
  },
  twitter: {
    card: "summary_large_image",
    site: "@usistech",
    title: "IT Services - uSiS Technologies",
    description:
      "Get expert IT consulting services in Coimbatore from uSiS Technologies. We help businesses optimize their tech strategies. Contact us for a consultation!",
    images: "https://usistech.com/images/banner/poster.png",
  },
  alternates: {
    canonical:"https://usistech.com/services"
  }
};

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
      </Suspense>
    </>
  );
}
