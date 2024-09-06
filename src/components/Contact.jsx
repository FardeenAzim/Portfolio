import React, { useState, useEffect } from "react";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxClRXxmwOzh5HKOqrvGw2WKtoNgFCdUXYf9CXacCwXsW29fAOEgxbeymXszEcwd3qb6Q/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      setStatus("Message sent successfully!"); 
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 1500); 

    }
  }, 
);

  return (
      <div id="Contact" className="mx-auto px-4 mt-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-textColor">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-8 rounded-lg shadow-lg z-10"
        >
          <div className="mb-4">
            <label
              className="block text-textColor text-xl font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="bg-gray-100 hover:shadow-lg rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline !border-primaryColor border-2 hover:!shadow-[0_0_10px_1px_#64FFDA]"
              id="name"
              type="text"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-textColor text-xl font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-gray-100 hover:shadow-lg transition-shadow duration-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline !border-primaryColor border-2 hover:!shadow-[0_0_10px_1px_#64FFDA]"
              id="email"
              type="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-textColor font-mono text-xl font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="bg-gray-100 hover:shadow-lg font-mono rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline !border-primaryColor border-2 hover:!shadow-[0_0_10px_1px_#64FFDA]"
              id="message"
              rows="4"
              placeholder=""
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-green-500 hover:bg-green-700 font-mono text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline !border-primaryColor border-2 hover:!shadow-[0_0_10px_1px_#4CAF50]"
              type="submit"
            >
              Send Message
            </button>
          </div>
          {status && <p className="text-center text-purple-600 mt-4">{status}</p>}
        </form>
      </div>
  );
}

export default Contact;
