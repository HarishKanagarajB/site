import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About uSiS Technologies",
  description:
    "Learn about uSiS Technologies, a leading provider of IT solutions & web development services in Coimbatore. Discover our mission and expertise.",
  metadataBase: new URL("https://usistech.com/"),
  openGraph: {
    title: "About uSiS Technologies",
    description:
      "Learn about uSiS Technologies, a leading provider of IT solutions & web development services in Coimbatore. Discover our mission and expertise.",
    url: "https://usistech.com/",
    images: "https://usistech.com/images/banner/poster.png",
    type: "website",
    siteName: "uSiS Technologies Private Limited",
  },
  twitter: {
    card: "summary_large_image",
    site: "@usistech",
    title: "About uSiS Technologies",
    description:
      "Learn about uSiS Technologies, a leading provider of IT solutions & web development services in Coimbatore. Discover our mission and expertise.",
    images: "https://usistech.com/images/banner/poster.png",
  },
  alternates: {
    canonical:"https://usistech.com/about"
  }
};

export default function About() {
  return (
    <>
      <section className="title-block pt-24 sm:pt-28">
        <div className="text-center sm:pt-8 pt-0 py-5">
          <h1
            className="sm:text-3xl text-lg m-0 font-bold relative pb-3 inline-block "
            style={{
              backgroundImage: "url('/images/icons/three-dot.png')",
              backgroundSize: "43px 9px",
              backgroundPosition: "50% 46px",
              backgroundRepeat: "no-repeat",
              padding: "0 0 30px 0",
            }}
          >
            COMPANY PROFILE
          </h1>
        </div>
      </section>
      {/* mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 */}
      <div className="max-w-6xl sm:mx-auto mx-0  bg-white sm:py-4 py-1 px-4 mb-14 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:text-base text-xs font-helveticaNeue leading-[30px] my-6">
          <div className="col-span-1 md:col-span-6 sm:ml-5 sm:mb-6">
            <p className="sm:text-base text-xs  sm:leading-[30px] leading-[20px]">
              uSiS Technologies is a global IT consultancy & solutions provider
              based out of Coimbatore in the state of Tamil Nadu, India. Aligned
              to the clients’ requirements, our smart solutions are engineered
              to implement and expedite their digital communications and
              transactions with precision. Being customer-centric, we equip
              businesses with easy to use, flexible, and reliable technology to
              leverage their sustained growth and profitability. Flagging off as
              a small website designing & development startup in 2007, today our
              services are extended to also include eCommerce portals, web &
              mobile app development, and CMS.
            </p>
            <p className="sm:text-base text-xs mt-4 sm:leading-[30px] leading-[20px]">
              Our team of exceptional engineers & consultants harnesses the
              emerging trends for a smooth and durable digital transition of the
              organizations.
            </p>
          </div>
          <div className="col-span-1 md:col-span-6">
            <div className="text-left bg-[rgba(242,242,242,0.58)] px-4 py-6 sm:m-[0_20px_30px_0] bg-[length:400px_auto]">
              <h3 className="font-montserrat text-md  font-bold uppercase">
                Mission
              </h3>
              <p className="leading-[23px] mb-5 text-sm ">
                To be an industry leader, pacing up the growth of our clients
                through innovative, dependable, and cost-effective IT solutions.
                We strive to deliver enhanced value to all our stakeholders –
                customers, investors, service collaborators, and employees,
                facilitating our progress together.
              </p>
              <h3 className="font-montserrat mt-5 text-md  font-bold uppercase">
                Vision
              </h3>
              <p className="leading-[23px] mb-5 text-sm ">
                To propel businesses towards their growth targets by enabling
                cutting-edge technology services &amp; solutions and instilling
                a work culture that inspires people to excel.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-0 bg-[rgba(247,247,247,0.46)] py-[20px] border-b border-t border-[#f1f1f1]">
          <h3 className="text-center pt-4 sm:py-8 mx-auto text-lg font-extrabold uppercase text-[#292929]">
            WHY USIS?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:px-12">
            {/* Sharp Technology */}
            <div className="flex items-start space-x-4 py-5">
              <Image
                className="sm:w-16 sm:h-16 w-12 h-12"
                src="/images/icons/sharp-tech.png"
                width={62}
                height={50}
                alt="Sharp Technology"
              />
              <div>
                <h4 className="font-Montserrat text-[#333333] text-[15px] uppercase mb-2 sm:text-lg font-bold">
                  Sharp Technology
                </h4>
                <p className="font-Montserrat sm:text-base text-[13px] leading-[23px]">
                  Get full spectrum agile, futuristic, flexible, scalable,
                  accurate, and reliable solutions driving your growth &amp;
                  profitability
                </p>
              </div>
            </div>

            {/* Customized Solutions */}
            <div className="flex items-start space-x-4 py-5">
              <Image
                className="sm:w-16 sm:h-16 w-10 h-10"
                src="/images/icons/customized.png"
                width={62}
                height={50}
                alt="Customized Solutions"
              />
              <div>
                <h4 className="font-Montserrat text-[15px] text-[#333333] uppercase mb-2 sm:text-lg font-bold">
                  Customized Solutions
                </h4>
                <p className="font-Montserrat sm:text-base text-[13px] leading-[23px]">
                  Customized soft solutions to work on your inputs and business
                  needs, leveraging productivity
                </p>
              </div>
            </div>

            {/* User Friendly Interface */}
            <div className="flex items-start space-x-4 py-5">
              <Image
                className="sm:w-16 sm:h-16 w-10 h-10"
                src="/images/icons/user-friendly.png"
                width={62}
                height={50}
                alt="User Friendly Interface"
              />
              <div>
                <h4 className="font-Montserrat text-[15px] text-[#333333] uppercase mb-2 sm:text-lg font-bold">
                  User Friendly Interface
                </h4>
                <p className="font-Montserrat sm:text-base text-[13px] leading-[23px]">
                  Easy to use processes for fast adaptability by your people and
                  systems
                </p>
              </div>
            </div>

            {/* Cost Benefit */}
            <div className="flex items-start space-x-4 py-5">
              <Image
                className="sm:w-16 sm:h-16 w-10 h-10"
                src="/images/icons/cost-effective.png"
                width={62}
                height={50}
                alt="Cost Benefit"
              />
              <div>
                <h4 className="font-Montserrat text-[15px] text-[#333333] uppercase mb-2 sm:text-lg font-bold">
                  Cost Benefit
                </h4>
                <p className="font-Montserrat sm:text-base text-[13px] leading-[23px]">
                  Budget friendly, effective IT solutions for a seamless process
                  flow
                </p>
              </div>
            </div>

            {/* Quality Management */}
            <div className="flex items-start space-x-4 py-5">
              <Image
                className="sm:w-16 sm:h-16 w-10 h-10"
                src="/images/icons/quality.png"
                width={62}
                height={50}
                alt="Quality Management"
              />
              <div>
                <h4 className="font-Montserrat text-[15px] text-[#333333] uppercase mb-2 sm:text-lg font-bold">
                  Quality Management
                </h4>
                <p className="font-Montserrat sm:text-base text-[13px] leading-[23px]">
                  A stringent Quality Management System (QMS) helps ensure
                  adherence to the expected performance compliance
                </p>
              </div>
            </div>

            {/* Seamless Processes */}
            <div className="flex items-start space-x-4 py-5">
              <Image
                className="sm:w-16 sm:h-16 w-10 h-10"
                src="/images/icons/seamless-process.png"
                width={62}
                height={50}
                alt="Seamless Processes"
              />
              <div>
                <h4 className="font-Montserrat text-[15px] text-[#333333] uppercase mb-2 sm:text-lg font-bold">
                  Seamless Processes
                </h4>
                <p className="font-Montserrat sm:text-base text-[13px] leading-[23px]">
                  Smart modular approach for optimized customer centric results
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-big-block grid grid-cols-1 md:grid-cols-2 gap-8 py-2">
          <Link
            className="cta-big-l flex items-center sm:p-8 px-4 py-10 shadow-lg hover:bg-gray-200 bg-cover bg-center border-10 border-solid border-white border-r-5"
            style={{
              backgroundImage: 'url("/images/banner/blue-pattern.jpg")',
              backgroundPosition: "0 50%",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#67bcdb",
            }}
            href="/careers"
          >
            <div className="left-drop-block sm:mr-8 mr-4">
              <Image
                className="sm:w-auto sm:h-16 w-auto h-11"
                src="/images/icons/jointeam-icon.png"
                width={62}
                height={50}
                alt="Join Our Team"
              />
            </div>
            <div className="right-drop-block">
              <h3 className="text-md font-semibold uppercase mb-2 text-white">
                Join our team
              </h3>
              <span className="inline-block  text-white border border-white mt-1 text-center py-1 px-5 uppercase font-light transition-all duration-400">
                SEND YOUR RESUME
              </span>
            </div>
          </Link>

          <Link
            className="cta-big-l flex items-center px-4 py-10 sm:p-6 shadow-lg hover:bg-gray-200 bg-cover bg-center border-10 border-solid border-white border-r-5"
            style={{
              backgroundImage: 'url("/images/banner/blue-pattern.jpg")',
              backgroundPosition: "0 50%",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#67bcdb",
            }}
            href={{
              pathname: "/contact",
              query: { subject: "Request for Quote" },
            }}
          >
            <div className="left-drop-block sm:mr-8 mr-4">
              <Image
                className="sm:w-auto sm:h-16 w-auto h-11"
                src="/images/icons/proposal-icon.png"
                width={62}
                height={50}
                alt="Request for proposal"
                
              />
            </div>
            <div className="right-drop-block">
              <h3 className="text-md font-semibold uppercase mb-2 text-white">
                Request for proposal
              </h3>
              <span className="inline-block text-white border border-white mt-1 text-center py-1 px-5 uppercase font-light transition-all duration-400">
                CLICK HERE
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
