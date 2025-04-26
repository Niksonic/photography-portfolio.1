import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedVideo(null);
      }
    }
    if (selectedVideo) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedVideo]);

  const videos = [
    {
      id: 1,
      thumbnail: "/images/thumbnail1_2.1.1.jpg",
      url: "https://res.cloudinary.com/dlvfv9vuh/video/upload/v1739971345/video1_am7x3f.mp4",
    },
    {
      id: 2,
      thumbnail: "/images/thumbnail2_1.1.1.jpg",
      url: "https://res.cloudinary.com/dlvfv9vuh/video/upload/v1739971339/video2_hifbaa.mov",
    },
    {
      id: 3,
      thumbnail: "/images/thumbnail3_1.1.2.jpg",
      url: "https://res.cloudinary.com/dlvfv9vuh/video/upload/v1739971350/video3_dgdki7.mp4",
    },
    {
      id: 4,
      thumbnail: "/images/thumbnail_uetliberg_1.8.1.jpg",
      url: "https://res.cloudinary.com/dlvfv9vuh/video/upload/v1745586660/Uetliberg_elrvsq.mp4",
    },
    {
      id: 5,
      thumbnail: "/images/thumbnail_icon_1.19.1.jpg",
      url: "https://res.cloudinary.com/dlvfv9vuh/video/upload/v1745586652/Icon_oj04qd.mp4",
    },
  ];

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/photo24.jpg')" }}>

      {/* 🧭 Unified Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white bg-opacity-90 px-4 py-3 shadow z-50">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Menu</div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl font-bold px-2"
          >
            ☰
          </button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="mt-3 flex flex-col items-center gap-2 animate-fadeIn">
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
      <div className="pt-24 pb-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 bg-white/80 px-6 py-3 rounded-lg inline-block shadow-md">
          Video Gallery
        </h1>
      </div>

      {/* Video Gallery Grid */}
      <div className="max-w-4xl mx-auto p-6 bg-white/80 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative cursor-pointer"
              onClick={() => setSelectedVideo(video.url)}
            >
              <Image
                src={video.thumbnail}
                alt="Video Thumbnail"
                width={400}
                height={250}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div ref={modalRef} className="relative bg-gray-900 p-4 rounded-lg shadow-lg max-w-3xl w-full">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-400 transition"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
            {/* Video Player */}
            <video controls className="w-full max-h-[80vh] rounded-lg">
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
