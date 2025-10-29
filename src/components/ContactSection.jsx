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
      className="bg-[#006ABC] min-h-screen text-white py-20 px-4 md:px-12 lg:px-20 relative" 
      style={{ backgroundColor: '#006ABC' }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-20 gap-y-12 max-w-screen-xl"> 
        
        <div className="col-span-full md:col-span-1 lg:col-span-5 pt-0 lg:pt-16">
          
          <p className="text-2xl md:text-3xl lg:text-4xl font-normal relative pb-2 mb-10 inline-block">
            Get in touch
            <span className="absolute left-0 bottom-0 w-1/4 border-b border-white/95"></span>
          </p>
          
          <p className="text-xl md:text-2xl font-light mb-12 opacity-90">For general enquiries</p>

          <div className="space-y-12 text-white text-lg md:text-xl font-light"> 
            
            <div>
              <p className="font-normal opacity-90 mb-1">Address</p>
              <p className="font-normal leading-relaxed opacity-95">
                110, 16th Road, Chembur, Mumbai - 400071
              </p>
            </div>

            <div>
              <p className="font-normal opacity-90 mb-1">Phone</p>
              <p className="font-normal opacity-95">+91 22 25208822</p>
            </div>

            <div>
              <p className="font-normal opacity-90 mb-1">Email</p>
              <p className="font-normal opacity-95">info@supremegroup.co.in</p>
            </div>
          </div>
        </div>

        <div className="col-span-full md:col-span-1 lg:col-span-6 pt-0 lg:pt-16">
          <form onSubmit={handleSubmit} className="space-y-10 md:space-y-12">
            
            {[
              { id: 'fullName', type: 'text', placeholder: 'Full name' },
              { id: 'email', type: 'email', placeholder: 'Email' },
              { id: 'company', type: 'text', placeholder: 'Company' },
            ].map(({ id, type, placeholder }) => (
              <div key={id}>
                <input
                  id={id}
                  name={id}
                  type={type}
                  placeholder={placeholder}
                  value={formData[id]}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b border-white/60 focus:border-white text-white placeholder-white/80 focus:outline-none pt-1 pb-1 text-lg md:text-xl`}
                />
                
                {errors[id] && (
                  <p id={`${id}-error`} className="text-red-500 text-sm mt-1">{errors[id]}</p>
                )}
              </div>
            ))}

            <div className="pt-2"> 
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="2" 
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/60 focus:border-white text-white placeholder-white/80 focus:outline-none pt-1 pb-1 text-lg md:text-xl resize-none"
              ></textarea>
            </div>

            <div className="pt-8 flex justify-start">
              <button
                type="submit"
                className="inline-block px-12 py-3 text-lg md:text-xl border border-white text-white rounded-full hover:bg-white hover:text-[#006ABC] transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
       
      </div>
    </section>
  );
}