"use client";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useSearchParams } from "next/navigation";

interface ContactclientProps {
  settingsData: any;
}

export default function Contactclient({ settingsData }: ContactclientProps) {
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState<string | null>(null);

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setSubject(subjectParam);
      setFormData((prevState) => ({
        ...prevState,
        subject: subjectParam,
      }));
    }
  }, [searchParams]);

  const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM;
  if (!contactFormUrl) {
    throw new Error("Contact form URL is not defined.");
  }

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    subject: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseType, setResponseType] = useState("success");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const validateForm = () => {
    const { name, email, phone, message, subject } = formData;
    if (!name || !email || !phone || !message || !subject) return "All fields are required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Please enter a valid email address.";
    if (!/^\d{10}$/.test(phone)) return "Please enter a valid 10-digit phone number.";
    if (!recaptchaValue) return "Please verify that you are not a robot.";
    return null;
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setResponseMessage(errorMessage);
      setResponseType("error");
      removeResponseMessageAfterDelay();
      return;
    }

    setIsSubmitting(true);
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));

    try {
      const response = await fetch(contactFormUrl, {
        method: "POST",
        body: form,
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      setResponseMessage("Data submitted successfully!");
      setResponseType("success");
      setFormData({ name: "", email: "", phone: "", company: "", message: "", subject: "" });
      setIsFormSubmitted(true);
    } catch (error) {
      setResponseMessage("An error occurred while submitting the form.");
      setResponseType("error");
    } finally {
      setIsSubmitting(false);
      removeResponseMessageAfterDelay();
    }
  };

  const removeResponseMessageAfterDelay = () => {
    setTimeout(() => setResponseMessage(""), 2000);
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  return (
    <section className="pt-20 sm:pt-28 max-w-6xl mx-auto">
      <div className="text-center py-5">
        <h1
          className="sm:text-3xl text-lg font-bold pb-3 inline-block"
          style={{
            backgroundImage: "url('/images/icons/three-dot.png')",
            backgroundSize: "43px 9px",
            backgroundPosition: "50% 46px",
            backgroundRepeat: "no-repeat",
            paddingBottom: "30px",
          }}
        >
          CONTACT
        </h1>
      </div>

        <div className="container bg-white py-16 shadow-md mx-auto px-4 sm:px-6 md:px-12">
          <form
            id="myForm"
            onSubmit={handleSubmit}
            className="contact-form"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Section */}
              {isFormSubmitted && responseType === "success" && (
                <div className="col-span-1 md:col-span-8">
                  <div className="mt-4 text-center h-96 flex flex-col justify-center items-center  text-black p-4 rounded">
                    {/* {responseMessage} */}
                    <Image
                      className="mx-auto mb-3"
                      src="/images/icons/success-check.svg"
                      width={90}
                      height={50}
                      alt="Success icon"
                    />
                    <p className="text-black text-lg">
                      Your message has been sent!
                    </p>
                  </div>
                </div>
              )}
              {!isFormSubmitted && (
                <div className="col-span-1 md:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <div className="form-group">
                        <label
                          htmlFor="name"
                          className="block text-gray-700 text-lg mb-3"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`form-control w-full px-4 py-2 border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none ${
                            responseType === "error" ? "border-red-500" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <div className="form-group">
                        <label
                          htmlFor="email"
                          className="block text-gray-700 text-lg mb-3"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`form-control w-full px-4 py-2 border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none ${
                            responseType === "error" ? "border-red-500" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <div className="form-group">
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 text-lg mb-3"
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className={`form-control w-full px-4 py-2 border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none ${
                            responseType === "error" ? "border-red-500" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {/* Company Field */}
                    <div>
                      <div className="form-group">
                        <label
                          htmlFor="company"
                          className="block text-gray-700 text-lg mb-3"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="form-control w-full px-4 py-2 border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    {/*Subjects */}
                    <div className="col-span-1 md:col-span-2">
                      <label
                        htmlFor="experience"
                        className="block text-base text-gray-700"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`mt-2 block w-full py-2 border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none ${
                          responseType === "error" ? "border-red-500" : ""
                        }`}
                      >
                        <option value="">Select Subject</option>
                        <option value="Request for Quote">
                          Request for Quote
                        </option>
                        <option value="Enquiry">Enquiry</option>
                      </select>
                    </div>
                    {/* Message Field */}
                    <div className="col-span-1 md:col-span-2">
                      <div className="form-group">
                        <label
                          htmlFor="message"
                          className="block text-gray-700 text-lg mb-3"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          required
                          className={`form-control w-full px-4 py-2 border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none ${
                            responseType === "error" ? "border-red-500" : ""
                          }`}
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn w-[160px] h-[60px] uppercase items-center bg-[#67bcdb] text-white px-6 py-3 shadow-md hover:bg-blue-600 ${
                          isSubmitting ? "cursor-not-allowed opacity-50" : ""
                        }`}
                      >
                        {isSubmitting ? "Submitting..." : "Send"}
                      </button>
                      {responseMessage && responseType === "error" && (
                        <div className="text-center flex justify-center items-center h-[60px] w-3/4 bg-red-100 text-red-600 p-3 rounded">
                          {responseMessage}
                        </div>
                      )}
                    </div>
                    <div className="flex sm:justify-end">
                      <ReCAPTCHA
                        sitekey={
                          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""
                        }
                        onChange={handleRecaptchaChange}
                      />
                    </div>
                  </div>
                </div>
              )}
              {/* Right Section */}
              <div className="col-span-1 md:col-span-4 mt-4 md:mt-0">
                <div
                  className="other-information bg-cover bg-center bg-no-repeat text-gray-800 p-6 md:p-9"
                  style={{
                    backgroundImage: "url(/images/banner/dotted-map.png)",
                    backgroundSize: "620px auto",
                    backgroundPosition: "50% 50%",
                    backgroundColor: "#eee",
                  }}
                >
                  <h3 className="text-md sm:text-lg font-semibold mb-4 text-center">
                    Find Us At
                  </h3>
                  <ul className="flex space-x-4 justify-center">
                    {/* <li>
                      <a
                        itemProp="sameAs"
                        target="_blank"
                        href="https://www.facebook.com/usis.in"
                        className="hover:text-blue-500"
                      >
                        <Image
                          src="/images/icons/Facebook-icon-32.png"
                          alt="Facebook"
                          width={32}
                          height={32}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        itemProp="sameAs"
                        target="_blank"
                        href="https://twitter.com/usistech"
                        className="hover:text-blue-500"
                      >
                        <Image
                          src="/images/icons/Twitter-icon-32.png"
                          alt="Twitter"
                          width={32}
                          height={32}
                        />
                      </a>
                    </li> */}
                    <li>
                      <a
                        itemProp="sameAs"
                        target="_blank"
                        href="https://www.linkedin.com/company/usis-technologies"
                        className="hover:text-blue-500"
                      >
                        <Image
                          src="/images/icons/linkedin-32.png"
                          alt="LinkedIn"
                          width={32}
                          height={32}
                        />
                      </a>
                    </li>
                  </ul>

                  <hr className="my-4" />

                  <h3 className="text-md sm:text-lg font-semibold mb-4 text-center">
                    Join Our Team
                  </h3>
                  <a
                    href="careers"
                    className="btn bg-[#67bcdb] text-white w-60 py-2 shadow-md hover:bg-white hover:text-gray-700 border-gray-500 flex justify-center mx-auto"
                  >
                    Send Your Resume
                  </a>

                  <hr className="my-4" />

                  {/* <h3 className="text-md sm:text-lg font-semibold mb-4 text-center">
                    Request for Quote
                  </h3>
                  <a
                    href="services/request-for-quote"
                    className="btn bg-[#67bcdb] text-white w-60 py-2 shadow-md hover:bg-white hover:text-gray-700 border-gray-500 flex justify-center mx-auto"
                  >
                    Send Your Requirement
                  </a> */}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="sm:p-12 p-8 sm:mb-14 sm:h-60 container contact-content bg-[#67bcdb] bg-[url('/images/banner/blue-pattern.jpg')] bg-right bg-no-repeat bg-cover mx-auto sm:px-16">
          {settingsData && (
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-white font-bold mb-4 flex items-center">
                  <span>INDIA(HQ)</span>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/dir//2nd+Floor,+Site,+uSiS+Technologies+Private+Limited,+30+%26+31,+Thiru+Senthil+Nagar,+NGGO+Colony,+K.+Vadamadurai,+Coimbatore,+Tamil+Nadu+641017/@11.0861298,76.8976694,13z/data=!3m1!5s0x3ba8f66998bd5b23:0x212b2a2ac2b40cdc!4m9!4m8!1m0!1m5!1m1!1s0x3ba8f68e0fa68937:0x20b27ff7358eed22!2m2!1d76.938869!2d11.0860484!3e0?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D"
                    className="inline-flex items-center ml-4 px-2 py-1 bg-[#3f9bbd] text-white text-[10px] uppercase rounded-2xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <Image
                      src="/images/icons/location.png"
                      alt="Location Icon"
                      className="mr-2 w-3 h-3"
                      width={12}
                      height={12}
                    />
                    Get Direction
                  </a>
                </h3>
                <p className="text-white text-sm font-normal mb-4">
                  {settingsData.acf.address_india}
                </p>
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/icons/phone.png"
                    alt="Phone Icon"
                    className="mr-2 w-4 h-4"
                    width={16}
                    height={16}
                  />
                  <a className="text-white text-sm" href="tel:+917837838747">
                    {settingsData.acf.contact_number_india}
                  </a>
                  <a
                    target="_blank"
                    href="http://wa.me/917837838747"
                    className="inline-flex items-center ml-4 px-2 py-1 bg-[#3f9bbd] text-white text-[10px] uppercase rounded-2xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Whatsapp
                  </a>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/icons/email.png"
                    alt="Email Icon"
                    className="mr-2 w-4 h-4"
                    width={16}
                    height={16}
                  />
                  <a
                    className="text-white text-sm"
                    href="mailto:info@usistech.com"
                  >
                    {settingsData.acf.email_india}
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2">
                <h3 className="text-white font-bold mb-4">UK (Sales)</h3>
                <p className="text-white text-sm font-normal mb-4">
                  {settingsData.acf.address_uk}
                </p>
                <div className="flex items-center">
                  <Image
                    src="/images/icons/email.png"
                    alt="Email Icon"
                    className="mr-2 w-4 h-4"
                    width={16}
                    height={16}
                  />
                  <a
                    className="text-white text-sm"
                    href="mailto:info@usistech.co.uk"
                  >
                    {settingsData.acf.email_uk}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
  );
}
