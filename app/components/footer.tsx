import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-[url('/images/banner/footer-logo-watermark.png')] bg-[115%_30px] bg-no-repeat bg-[#2F2F2E] text-left p-0 relative">
        <div className="box-fot pt-2 max-w-6xl mx-auto sm:block hidden">
          <div className="container mx-auto px-4 md:px-0 py-8">
            {/* First Row: Information, Services & Solutions, Subscribe */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Information Section */}
              <div className="footer-box pr-2">
                <h3 className="text-md font-semibold mb-4 text-gray-500 uppercase">
                  Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-1">
                  <ul>
                    <li className="mb-2">
                      <Link href="/" className="text-white  text-sm ">
                        Home
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/about" className="text-white  text-sm ">
                        About
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/careers" className="text-white  text-sm ">
                        Careers
                      </Link>
                    </li>
                    <li className="mb-2">
                      {/* <Link
                href="case-studys"
                className="text-white  text-sm "
              >
                Case Study
              </Link> */}
                    </li>
                    <li className="mb-2">
                      <Link
                        href={{
                          pathname: "/contact",
                          query: { subject: "Enquiry" },
                        }}
                        className="text-white  text-sm "
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={{
                          pathname: "/contact",
                          query: { subject: "Request for Quote" },
                        }}
                        className="text-white  text-sm "
                      >
                        Request for Quote
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href="/about/privacy-policy"
                        className="text-white  text-sm "
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* service Section */}
              <div className="footer-box pr-2">
                <h3 className="text-md font-semibold mb-4 text-gray-500 uppercase">
                  Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-1">
                  <ul>
                    <li className="mb-2">
                      <Link href="/service/custom-software-development" className="text-white  text-sm ">
                        Custom Software Development
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/service/it-team-augmentation" className="text-white  text-sm ">
                        IT Team Augmentation
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/service/ai-data-intelligence" className="text-white  text-sm ">
                        AI and Data Intelligence
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/service/enterprise-solutions" className="text-white  text-sm ">
                        Enterprise Solutions
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="mb-2">
                      <Link href="/service/e-commerce-solutions" className="text-white  text-sm ">
                        E-Commerce Solutions
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/service/startup-product-development" className="text-white  text-sm ">
                        Startup and Product Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/*  Solutions Section */}
              <div className="footer-box pr-2">
                <h3 className="text-md font-semibold mb-4 text-gray-500 uppercase">
                  Solutions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <ul>
                    <li className="mb-2 leading-tight">
                      <Link href="/solution/employee-self-service" className="text-white  text-sm ">
                        Employee Self-Service
                      </Link>
                    </li>
                    <li className="mb-2 leading-tight">
                      <Link href="/solution/event-management-system" className="text-white  text-sm ">
                        Event Management System
                      </Link>
                    </li>
                    <li className="mb-2 leading-tight">
                      <Link href="/solution/intranet-portal" className="text-white  text-sm ">
                        Intranet Portal
                      </Link>
                    </li>
                    <li className="mb-2 leading-tight">
                      <Link href="/solution/waste-management-system" className="text-white  text-sm ">
                        Waste Management System
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="mb-2 leading-tight">
                      <Link href="/solution/cms-solution" className="text-white  text-sm ">
                        CMS Solution
                      </Link>
                    </li>
                    <li className="mb-2 leading-tight">
                      <Link href="/solution/supplier-portal-supply-chain" className="text-white  text-sm ">
                        Supplier Portal (Supply Chain)
                      </Link>
                    </li>
                    <li className="mb-2 leading-tight">
                      <Link href="/solution/restaurant-erp" className="text-white  text-sm ">
                        Restaurant ERP
                      </Link>
                    </li>
                    <li className="mb-2 leading-tight">
                      <Link href="/solution/property-management-app" className="text-white  text-sm ">
                        Property Management App
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/*  Industries we serve Section */}
              <div className="footer-box pr-2">
                <h3 className="text-md font-semibold mb-4 text-gray-500 uppercase">
                  Industries we serve
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
                  <ul>
                    <li className="mb-2 ">
                      <span className="text-white  text-sm ">
                        E-Commerce and Retail
                      </span>
                    </li>
                    <li className="mb-2 ">
                      <span className="text-white  text-sm">
                        Manufacturing and Supply Chain
                      </span>
                    </li>
                    <li className="mb-2 ">
                      <span className="text-white  text-sm ">
                        Hospitality and Restaurants
                      </span>
                    </li>
                    <li className="mb-2 ">
                      <span className="text-white  text-sm ">
                        Events and Community Management
                      </span>
                    </li>
                  </ul>

                </div>
              </div>

              <div className="footer-box pr-2">

                <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 sm:mt-8">
                  <ul>
                    <li className="mb-2 ">
                      <span className="text-white  text-sm ">
                        Banking and Financial Services
                      </span>
                    </li>
                    <li className="mb-2 ">
                      <span className="text-white  text-sm ">
                        Healthcare and Pharmaceuticals
                      </span>
                    </li>
                    <li className="mb-2 ">
                      <span className="text-white  text-sm ">
                        Human Resources and Workforce Management
                      </span>
                    </li>
                    <li className="mb-2 ">
                      <span className="text-white  text-sm ">
                        Real Estate and Property Management
                      </span>
                    </li>
                    <li className="mb-2 ">
                      <span className="text-white  text-sm ">
                        Waste Management and Sustainability
                      </span>
                    </li>
                    <li className="mb-2 ">
                      <span className="text-white  text-sm ">
                        IT and Software
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-box">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

                  <div>
                    <h3 className="text-md font-semibold mb-4 text-gray-500 uppercase">
                      Contact
                    </h3>

                    <div className="flex items-center mb-4">
                      <Image
                        src="/images/icons/phone.png"
                        alt="Phone Icon"
                        className="mr-2 w-4 h-4"
                        width={16}
                        height={16}
                      />
                      <Link className="text-white text-sm whitespace-nowrap" href="tel:+917837838747">
                        +91 783 783 USIS (8747)
                      </Link>
                    </div>

                    <div className="flex items-center">
                      <Image
                        src="/images/icons/email.png"
                        alt="Email Icon"
                        className="mr-2 w-4 h-4"
                        width={16}
                        height={16}
                      />
                      <Link className="text-white text-sm" href="mailto:info@usistech.com">
                        info@usistech.com
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold mb-4 text-gray-500 uppercase">
                      Social
                    </h4>

                    <ul className="flex space-x-4">
                      <li>
                        <Link
                          target="_blank"
                          href="https://www.linkedin.com/company/usis-technologies"
                          rel="external"
                        >
                          <Image
                            src="/images/icons/linkedin-w.png"
                            alt="LinkedIn"
                            className="w-6 h-6"
                            width={26}
                            height={26}
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          href="http://wa.me/917837838747"
                          rel="external"
                        >
                          <Image
                            src="/images/icons/Whatsapp.png"
                            alt="Whatsapp"
                            className="w-6 h-6"
                            width={24}
                            height={24}
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className="footer-bottom mt-4">
              <p className="text-gray-400 text-xs text-center">
                © Copyright uSiS Technologies Private Limited. 2025
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden block bg-[#1f1f1f] text-white px-4 py-8">
          <div className="max-w-md mx-auto space-y-4">
            {/* Information  */}
            <details className="group py-2">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-semibold uppercase text-gray-500">
                Information
                <Image
                  src="/images/icons/footer_arrow.png"
                  alt="LinkedIn"
                  width={12}
                  height={12}
                  className="w-4 h-auto transform transition-transform duration-300 group-open:rotate-180"
                />   
              </summary>
              <ul className="mt-4 text-sm space-y-2">
                <li className="!mb-4">
                  <Link href="/" className="text-gray-300">Home</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/about" className="text-gray-300">About</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/careers" className="text-gray-300">Careers</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/contact?subject=Request%20for%20Quote" className="text-gray-300">Request for Quote</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/contact?subject=Enquiry" className="text-gray-300">Contact</Link>
                </li>
                <li>
                  <Link href="/about/privacy-policy" className="text-gray-300">Privacy Policy</Link>
                </li>
              </ul>
            </details>

            {/* Industry We Serve  */}
            <details className="group py-2">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-semibold uppercase text-gray-500">
                Industry We Serve
                <Image
                  src="/images/icons/footer_arrow.png"
                  alt="LinkedIn"
                  width={12}
                  height={12}
                    className="w-4 h-auto transform transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <ul className="mt-4 text-sm space-y-2">
                <li className="mb-4">
                  <span className="text-gray-300">E-Commerce and Retail</span>
                </li>
                <li className="!mb-4">
                  <span className="text-gray-300">Manufacturing and Supply Chain</span>
                </li>
                <li className="!mb-4">
                  <span className="text-gray-300">Hospitality and Restaurants</span>
                </li>
                <li className="!mb-4">
                  <span className="text-gray-300">Events and Community Management</span>
                </li>
                <li className="!mb-4">
                  <span className="text-gray-300">Banking and Financial Services</span>
                </li>
                <li className="!mb-4">
                  <span className="text-gray-300">Healthcare and Pharmaceuticals</span>
                </li>
                <li className="!mb-4">
                  <span className="text-gray-300">Human Resources and Workforce Management</span>
                </li>
                <li className="!mb-4">
                  <span  className="text-gray-300">Real Estate and Property Management</span>
                </li>
                <li className="!mb-4">
                  <span className="text-gray-300">Waste Management and Sustainability</span>
                </li>
                <li>
                  <span className="text-gray-300">IT and Software</span>
                </li>
              </ul>
            </details>

            {/* Services  */}
            <details className="group py-2">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-semibold uppercase text-gray-500">
                Services
                <Image
                  src="/images/icons/footer_arrow.png"
                  alt="LinkedIn"
                  width={12}
                  height={12}
                    className="w-4 h-auto transform transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <ul className="mt-4 text-sm space-y-2">
                <li className="!mb-4">
                  <Link href="/service/custom-software-development" className="text-gray-300">Custom Software Development</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/service/it-team-augmentation" className="text-gray-300">IT Team Augmentation</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/service/ai-data-intelligence" className="text-gray-300">AI and Data Intelligence</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/service/e-commerce-solutions" className="text-gray-300">Enterprise Solutions</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/service/enterprise-solutions" className="text-gray-300">E-Commerce Solutions</Link>
                </li>
                <li>
                  <Link href="/service/startup-product-development" className="text-gray-300">Startup and Product Development</Link>
                </li>
              </ul>
            </details>

            {/* Solutions  */}
            <details className="group py-2">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-semibold uppercase text-gray-500">
                Solutions
                <Image
                  src="/images/icons/footer_arrow.png"
                  alt="LinkedIn"
                  width={12}
                  height={12}
                    className="w-4 h-auto transform transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <ul className="mt-4 text-sm space-y-2">
                <li className="!mb-4">
                  <Link href="/solution/employee-self-service" className="text-gray-300">Employee Self-Service</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/solution/event-management-system" className="text-gray-300">Event Management</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/solution/intranet-portal" className="text-gray-300">Intranet Portal</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/solution/cms-solution" className="text-gray-300">CMS Solution</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/solution/waste-management-system" className="text-gray-300">Waste Management System</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/solution/supplier-portal-supply-chain" className="text-gray-300">Supplier Portal</Link>
                </li>
                <li className="!mb-4">
                  <Link href="/solution/restaurant-erp" className="text-gray-300">Restaurant ERP</Link>
                </li>
                <li>
                  <Link href="/solution/property-management-app" className="text-gray-300">Property Management App</Link>
                </li>
              </ul>
            </details>

            {/* Contact */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2">Contact Us</h3>
              <div className="flex items-center mb-2 mt-4">
                <Image src="/images/icons/phone.png" alt="Phone" className="mr-2 w-4 h-4" width={16} height={16} />
                <Link href="tel:+917837838747" className="text-gray-300 text-sm whitespace-nowrap">+91 783 783 USIS (8747)</Link>
              </div>
              <div className="flex items-center">
                <Image src="/images/icons/email.png" alt="Email" className="mr-2 w-4 h-4" width={16} height={16} />
                <Link href="mailto:info@usistech.com" className="text-gray-300 text-sm">info@usistech.com</Link>
              </div>
            </div>


            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2">Social</h3>
              <ul className="flex space-x-4 mt-4">
                <li>
                  <Link href="https://www.linkedin.com/company/usis-technologies" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/icons/linkedin-w.png" alt="LinkedIn" className="w-6 h-6" width={24} height={24} />
                  </Link>
                </li>
                <li>
                  <Link href="http://wa.me/917837838747" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/icons/Whatsapp.png" alt="WhatsApp" className="w-6 h-6" width={24} height={24} />
                  </Link>
                </li>
              </ul>
            </div>


            <div className="pt-6 text-center text-xs text-gray-400">
              © Copyright uSiS Technologies Private Limited. 2025
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}
