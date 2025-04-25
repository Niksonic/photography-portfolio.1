import { useState } from "react";
import { useRouter } from "next/router";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg",
    "/images/photo7.jpg",
    "/images/photo8.jpg",
    "/images/photo9.jpg",
  ];

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-cover bg-fixed bg-center text-gray-800 px-6">

    {/* 🔲 Desktop Navbar */}
    <div className="hidden md:flex gap-4 my-6 fixed top-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-b-lg shadow-lg z-50">
      <button onClick={() => router.push("/")} className="px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-500 transition">Home</button>
      <button onClick={() => router.push("/gallery")} className="px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-500 transition">Photography Gallery</button>
      <button onClick={() => router.push("/video-gallery")} className="px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-500 transition">Video Gallery</button>
      <button onClick={() => router.push("/contact")} className="px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-500 transition">Contact Me</button>
    </div>

    {/* 📱 Mobile Dropdown Menu */}
    <div className="md:hidden fixed top-0 left-0 w-full bg-white bg-opacity-90 px-4 py-3 shadow z-50">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Menu</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-xl font-bold px-2"
        >
          ☰
        </button>
      </div>

      {/* Dropdown Buttons */}
      {menuOpen && (
        <div className="mt-3 flex flex-col gap-2">
          <button onClick={() => { router.push("/"); setMenuOpen(false); }} className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-500 transition">Home</button>
          <button onClick={() => { router.push("/gallery"); setMenuOpen(false); }} className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-500 transition">Photography Gallery</button>
          <button onClick={() => { router.push("/video-gallery"); setMenuOpen(false); }} className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-500 transition">Video Gallery</button>
          <button onClick={() => { router.push("/contact"); setMenuOpen(false); }} className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-500 transition">Contact Me</button>
        </div>
      )}
    </div>
      

      {/* Page Title with Improved Font Styling */}
      <h1 className="text-5xl font-bold text-gray-900 mt-8 tracking-wide bg-white bg-opacity-70 px-8 py-3 rounded-lg shadow-lg">
        Photography Gallery
      </h1>

      {/* Grid Photo Gallery with Border */}
      <div className="border-4 border-gray-300 bg-white bg-opacity-80 shadow-lg rounded-lg p-6 mt-6 w-full max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-48">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg cursor-pointer transition transform hover:scale-105"
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox (Popup Image) */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-red-600 text-white text-2xl font-bold rounded-full hover:bg-red-700 transition-all focus:outline-none"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Enlarged Image with Aspect Ratio Fix */}
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
