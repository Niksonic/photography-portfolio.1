import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }
  
    try {
      const response = await fetch("https://formspree.io/f/xkgokzyo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Please check your internet connection.");
    }
  };

  return (
    <div
      className="relative flex flex-col items-center min-h-screen bg-cover bg-fixed bg-center text-gray-800 px-6"
      style={{
        backgroundImage: "url('/images/photo24.jpg')",
      }}
    >


      {/* Top Navigation Bar */}
      <div className="relative z-10 flex justify-between items-center w-full max-w-5xl mt-6">
        
        {/* Logo on the Left with Styling */}
        <div className="text-gray-900 font-bold text-2xl tracking-wide bg-white bg-opacity-80 px-4 py-2 rounded-lg shadow-md">
          Nikson Nhalale
        </div>

        {/* Centered Navigation Buttons */}
        <div className="flex gap-4">
          <a
            href="/"
            className="px-6 py-2 rounded-lg bg-blue-300 text-black font-semibold hover:bg-blue-500 transition"
          >
            Home
          </a>
          <a
            href="/gallery"
            className="px-6 py-2 rounded-lg bg-blue-300 text-black font-semibold hover:bg-blue-500 transition"
          >
            Photography Gallery
          </a>
          <a
            href="/video-gallery"
            className="px-6 py-2 rounded-lg bg-blue-300 text-black font-semibold hover:bg-blue-500 transition"
          >
            Video Gallery
          </a>
        </div>
      </div>

      {/* Page Title with Improved Font Styling */}
      <h1 className="text-5xl font-bold text-gray-900 mt-8 tracking-wide bg-white bg-opacity-70 px-8 py-3 rounded-lg shadow-lg">
        Contact Me
      </h1>

      {/* Contact Form with Border */}
      <div className="border-4 border-gray-300 bg-white bg-opacity-80 shadow-lg rounded-lg p-6 mt-6 w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-900 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 rounded bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Status Message */}
          {status && <p className="text-blue-500 mb-4">{status}</p>}

          <button
            type="submit"
            className="w-full bg-blue-400 text-white font-semibold py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
