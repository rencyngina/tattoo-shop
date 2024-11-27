import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from 'react-toastify';

const SoftwareRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: new Date(), // Initialize date field with current date
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date }); // Update date field in formData
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        toast.success("Sent successfully! We will get back to you soon.");
        // Reset form data after successful submission
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: new Date(),
        });
      } else {
        console.error("Error sending email:", response.statusText);
        toast.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
      toast.error("Error sending email");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="max-w-lg mx-auto mt-10 p-8 bg-gradient-to-br from-gray-500 to-gray-800 text-white  shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Schedule Your Appointment Today.</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-black text-gray-800"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">Your Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-black text-gray-900"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-black text-gray-900"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="date" className="block text-sm font-semibold mb-2">Date</label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-black text-gray-900"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-[#322c2b] hover:bg-indigo-600 transition-colors duration-200 text-white font-semibold  shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SoftwareRequestForm;
