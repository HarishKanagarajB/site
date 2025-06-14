import { Suspense } from "react";
import Footer from "./footer";
export default function layout() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
