import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

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
    <div
      className="relative flex flex-col items-center min-h-screen bg-cover bg-fixed bg-center text-gray-800 px-6"
      style={{
        backgroundImage: "url('/images/photo24.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        minHeight: "100vh",
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
            href="/video-gallery"
            className="px-6 py-2 rounded-lg bg-blue-300 text-black font-semibold hover:bg-blue-500 transition"
          >
            Video Gallery
          </a>
          <a
            href="/contact"
            className="px-6 py-2 rounded-lg bg-blue-300 text-black font-semibold hover:bg-blue-500 transition"
          >
            Contact Me
          </a>
        </div>
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
