"use client";
import React, { useEffect, useState } from "react";
import AxiosInstance from "@/app/utils/axiosInstance";
import GlobalLoader from "@/app/utils/GlobalLoader";
import Link from "next/link";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { useSearchParams } from "next/navigation";

export default function Careers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    expertise: "",
    experience: "",
    year: "",
    gender: "",
    working: "",
    role: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseType, setResponseType] = useState("success");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  useEffect(() => {
    const queryRole = searchParams.get("role");
    if (queryRole) {
      setFormData((prev) => ({ 
        ...prev, role: queryRole
       }));
    }
  }, [searchParams]);
  

  useEffect(() => {
    AxiosInstance.get("career/")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, phone, location, message, expertise, experience,year, gender, working, role } = formData;

    if (!name || !email || !phone || !location || !message || !expertise || !experience || !gender || !working || !role) {
      return "All fields are required.";
    }
  if (experience === "Fresher" && !year) {
    return "Please select your year of graduation.";
  }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return "Please enter a valid email address.";
    }

    if (!recaptchaValue) {
      return "Please verify that you are not a robot.";
    }

    return null;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const errorMessage = validateForm();
    if (errorMessage) {
      setResponseMessage(errorMessage);
      setResponseType("error");
      removeResponseMessageAfterDelay();
      return;
    }

    if (!file) {
      setResponseType("error");
      setResponseMessage("Please upload a file.");
      removeResponseMessageAfterDelay();
      return;
    }

    setIsSubmitting(true);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const fileContent = reader.result as string;

      const payload = {
        ...formData,
        fileName: file.name,
        fileContent: fileContent.split(",")[1],
      };

      try {
        const response = await fetch("/api/proxy-upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        setResponseMessage("Form submitted successfully!");
        setResponseType("success");
        setIsFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          message: "",
          expertise: "",
          experience: "",
          year: "",
          gender: "",
          working: "",
          role: "",
        });
        setFile(null);
      } catch (error) {
        console.error("Error:", error);
        setResponseMessage("An error occurred while submitting the form.");
        setResponseType("error");
      } finally {
        setIsSubmitting(false);
        removeResponseMessageAfterDelay();
      }
    };

    reader.readAsDataURL(file);
  };

  const removeResponseMessageAfterDelay = () => {
    setTimeout(() => setResponseMessage(""), 3000);
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <section className="title-block pt-20 sm:pt-28 text-center  py-5">
        <h1
          className="sm:text-3xl text-lg m-0 font-bold relative pb-3 inline-block"
          style={{
            backgroundImage: "url('/images/icons/three-dot.png')",
            backgroundSize: "43px 9px",
            backgroundPosition: "50% 46px",
            backgroundRepeat: "no-repeat",
            paddingBottom: "30px",
          }}
        >
          APPLY FOR JOB
        </h1>
      </section>

      <div className="max-w-7xl sm:mb-14 mx-auto sm:p-24 p-4 bg-white shadow-md">
        <form onSubmit={handleSubmit}>
          {loading ? (
            <>
              <GlobalLoader />
              <div style={{ minHeight: "100vh" }}></div>
            </>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <div className="grid grid-cols-1">
              {isFormSubmitted && responseType === "success" ? (
                <div className="text-center min-h-[400px] flex flex-col justify-center items-center p-4 text-black rounded">
                  <Image src="/images/icons/success-check.svg" width={90} height={50} alt="Success" className="mb-3" />
                  <p className="text-lg">Your message has been sent!</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-base text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 block w-full py-2 border-b-2 border-gray-300 focus:border-[#67bcdb] focus:outline-none"
                    />
                  </div>

                 
                  <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-base text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 block w-full py-2 border-b-2 border-gray-300 focus:border-[#67bcdb] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-base text-gray-700">Mobile</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 block w-full py-2 border-b-2 border-gray-300 focus:border-[#67bcdb] focus:outline-none"
                      />
                    </div>
                  </div>

                 
                  <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expertise" className="block text-base text-gray-700">Expertise</label>
                      <input
                        type="text"
                        id="expertise"
                        name="expertise"
                        placeholder="Frontend Developer"
                        value={formData.expertise}
                        onChange={handleChange}
                        className="mt-2 block w-full py-2 border-b-2 border-gray-300 focus:border-[#67bcdb] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-base text-gray-700">Experience</label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="mt-2 block w-full py-2 border-b-2 border-gray-300 focus:border-[#67bcdb] focus:outline-none"
                      >
                        <option value="">Select Experience</option>
                        <option value="Fresher">Fresher</option>
                        <option value="6-12 Months">6 - 12 Months</option>
                        <option value="1 Year">1 Year</option>
                        <option value="2 Years">2 Years</option>
                        <option value="3 Years">3 Years</option>
                        <option value="4 Years">4 Years</option>
                        <option value="5+ Years">5+ Years</option>
                      </select>
                    </div>
                  </div>
                  { formData.experience === "Fresher" && (
                    <div className="mb-6">
                    <label htmlFor="role" className="block text-base text-gray-700">Passed Out Year</label>
                      <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="mt-2 block w-full py-2 border-b-2 border-gray-300 focus:border-[#67bcdb] focus:outline-none"
                      >
                        <option value="">Select Year</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="Waiting for Result">Waiting for Result</option>
                        <option value="Currently Studying Final Year">Currently Studying Final Year</option>
                      </select>
                  </div>
                  )}
                  <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="gender" className="block text-base text-gray-700">Gender</label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="mt-2 block w-full py-2 border-b-2 border-gray-300 focus:border-[#67bcdb] focus:outline-none"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-base text-gray-700">Location</label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="mt-2 block w-full py-2 border-b-2 border-gray-300 focus:border-[#67bcdb] focus:outline-none"
                      />
                    </div>
                  </div>

                 
                  <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded">
                    <div>
                      <label htmlFor="resume" className="block text-base text-gray-700">Upload Resume</label>
                      <input
                        type="file"
                        accept=".pdf"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        className="mt-2 block w-full py-2 border-b-2 border-gray-300 focus:border-[#67bcdb] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-base text-gray-700">Are you working now?</label>
                      <div className="mt-2 flex gap-6">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="working"
                            value="Yes"
                            checked={formData.working === "Yes"}
                            onChange={handleChange}
                          />
                          Yes
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="working"
                            value="No"
                            checked={formData.working === "No"}
                            onChange={handleChange}
                          />
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  
                  <div className="mb-6">
                    <label htmlFor="role" className="block text-base text-gray-700">Applying for</label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="mt-2 block w-full py-2 border-b-2 border-gray-300 focus:border-[#67bcdb] focus:outline-none"
                    >
                      <option value="">Select a Role</option>
                      {data.map((role: any) => (
                        <option key={role.id} value={role.title.rendered} dangerouslySetInnerHTML={{ __html: role.title.rendered }}>
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                 
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-base text-gray-700">Cover Letter</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="mt-2 block w-full py-2 border-b-2 border-gray-300 focus:border-[#67bcdb] focus:outline-none"
                    ></textarea>
                  </div>

                
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                      <div className="mt-4">
                        <ReCAPTCHA
                          sitekey={
                            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""
                          }
                          onChange={handleRecaptchaChange}
                        />
                      </div>
                      <div className="flex items-center sm:justify-end mt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`sm:w-60 w-full py-6 px-2 bg-[#67bcdb] text-white font-bold uppercase  hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50  ${isSubmitting
                            ? "cursor-not-allowed opacity-50"
                            : ""
                            } `}
                        >
                          {isSubmitting ? "Submitting..." : "Apply Now"}
                        </button>
                      </div>
                    </div>
                  

                
                  {responseMessage && (
                    <p className={`mt-4 text-sm ${responseType === "error" ? "text-red-600" : "text-green-600"}`}>
                      {responseMessage}
                    </p>
                  )}
                </>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
