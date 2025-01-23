'use client'
import React, { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setFormMessage("Please fill out all fields.");
      return;
    }

    // Simulating form submission
    setFormMessage("Thank you for reaching out. We will get back to you shortly!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="w-full h-[316px] relative">
        <Image src="/ct.png" alt="Contact Us Banner" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white"></div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black">Get in Touch With Us</h2>
        <p className="text-center text-lg text-black mb-8">
          For more information about our products and services, feel free to drop us an email. Our team is always here to assist you.
        </p>

        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Side (Contact Info) */}
          <div className="flex flex-col items-start space-y-8 lg:w-1/4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-3xl text-black" />
              <div>
                <h3 className="font-semibold text-lg text-black">Address</h3>
                <p className="text-black">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-3xl text-black" />
              <div>
                <h3 className="font-semibold text-lg text-black">Phone</h3>
                <p className="text-black">+1 (123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <FaClock className="text-3xl text-black" />
              <div>
                <h3 className="font-semibold text-lg text-black">Working Hours</h3>
                <p className="text-black">Mon - Fri: 9 AM - 6 PM</p>
              </div>
            </div>
          </div>

          {/* Right Side (Contact Form) */}
          <div className="lg:w-3/4">
            <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-black font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-black font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-black font-medium">
                    Your Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter your subject"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-black font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  ></textarea>
                </div>

                {formMessage && (
                  <p className={`text-center text-sm ${formMessage.includes("Thank") ? "text-green-500" : "text-red-500"}`}>
                    {formMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
