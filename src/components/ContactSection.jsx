"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required.";
    if (!formData.company.trim()) newErrors.company = "Company is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Message sent successfully (Demo)");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="bg-[#006ABC] min-h-screen text-white py-20 px-4 md:px-12"
    >
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <div className="hidden lg:block lg:col-span-1"></div>

        <div className="col-span-12 lg:col-span-3 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-normal border-b-2 border-white/50 pb-2 mb-8 inline-block">
            Get in touch
          </h2>
          <p className="text-xl font-light mb-8">For general enquiries</p>

          <div className="space-y-6 text-white/90 text-lg">
            <div>
              <p className="font-semibold mb-1">Address :</p>
              <p className="font-light">
                110, 16th Road, Chembur, Mumbai - 400071
              </p>
            </div>

            <div>
              <p className="font-semibold mb-1">Phone :</p>
              <p className="font-light">+91 22 25208822</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Email :</p>
              <p className="font-light">info@supremegroup.co.in</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-2"></div>

        <div className="col-span-12 lg:col-span-5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full bg-transparent border-b text-white placeholder-white/80 focus:outline-none py-2 text-lg ${
                  errors.fullName ? "border-red-500" : "border-white/80"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-transparent border-b text-white placeholder-white/80 focus:outline-none py-2 text-lg ${
                  errors.email ? "border-red-500" : "border-white/80"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="sr-only">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className={`w-full bg-transparent border-b text-white placeholder-white/80 focus:outline-none py-2 text-lg ${
                  errors.company ? "border-red-500" : "border-white/80"
                }`}
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1">{errors.company}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/80 text-white placeholder-white/80 focus:outline-none py-2 text-lg resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="inline-block px-8 py-3 text-lg border-2 border-white/80 text-white rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="hidden lg:block lg:col-span-1"></div>
      </div>
    </section>
  );
}
