import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  // 🆕 Auto-clear success message after 5 seconds
  useEffect(() => {
    if (status && status.includes("success")) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
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
      style={{ backgroundImage: "url('/images/photo24.jpg')" }}
    >

      {/* 🧭 Unified Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white bg-opacity-90 px-4 py-3 shadow z-50">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Menu</div>
          <button
            onClick={() => {
              if (menuOpen) {
                setIsVisible(false);
                setTimeout(() => setMenuOpen(false), 300);
              } else {
                setMenuOpen(true);
                setIsVisible(true);
              }
            }}
            className="text-2xl font-bold px-2"
          >
            ☰
          </button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className={`mt-3 flex flex-col items-center gap-2 ${isVisible ? 'animate-fadeIn' : ''}`}>
            {router.pathname !== "/" && (
              <button
                onClick={() => { router.push("/"); setMenuOpen(false); }}
                className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-500 transition w-full max-w-xs"
              >
                Home
              </button>
            )}
            {router.pathname !== "/gallery" && (
              <button
                onClick={() => { router.push("/gallery"); setMenuOpen(false); }}
                className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-500 transition w-full max-w-xs"
              >
                Photography Gallery
              </button>
            )}
            {router.pathname !== "/video-gallery" && (
              <button
                onClick={() => { router.push("/video-gallery"); setMenuOpen(false); }}
                className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-500 transition w-full max-w-xs"
              >
                Video Gallery
              </button>
            )}
            {router.pathname !== "/contact" && (
              <button
                onClick={() => { router.push("/contact"); setMenuOpen(false); }}
                className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-500 transition w-full max-w-xs"
              >
                Contact Me
              </button>
            )}
          </div>
        )}
      </div>

      {/* Page Title */}
      <h1 className="text-5xl font-bold text-gray-900 mt-28 tracking-wide bg-white bg-opacity-70 px-8 py-3 rounded-lg shadow-lg">
        Contact Me
      </h1>

      {/* Contact Form */}
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

          {/* Status Message / Thank You Animation */}
          {status && (
            <div className={`mt-4 text-center ${status.includes("success") ? "animate-fadeIn" : ""}`}>
              {status.includes("success") ? (
                <div className="flex flex-col items-center">
                  <div className="text-green-500 text-5xl mb-2 animate-bounce">✔️</div>
                  <p className="text-green-600 font-semibold text-lg">{status}</p>
                </div>
              ) : (
                <p className="text-red-500 font-semibold">{status}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-6 bg-blue-400 text-white font-semibold py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
