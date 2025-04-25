import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width on mount & resize
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {/* Desktop Navbar - Fixed on Right Side */}
      {!isMobile && (
        <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-90 shadow-lg rounded-lg p-4 space-y-4 z-50">
          <Link href="/" className="block px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition">
            Home
          </Link>
          <Link href="/gallery" className="block px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition">
            Photography
          </Link>
          <Link href="/video-gallery" className="block px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition">
            Videos
          </Link>
          <Link href="/contact" className="block px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition">
            Contact
          </Link>
        </nav>
      )}

      {/* Mobile Navbar - Fixed at Bottom */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 w-full bg-white bg-opacity-90 shadow-lg flex justify-around py-3 z-50">
          <Link href="/" className="text-blue-500 text-lg font-semibold hover:text-blue-600">Home</Link>
          <Link href="/gallery" className="text-blue-500 text-lg font-semibold hover:text-blue-600">Photos</Link>
          <Link href="/video-gallery" className="text-blue-500 text-lg font-semibold hover:text-blue-600">Videos</Link>
          <Link href="/contact" className="text-blue-500 text-lg font-semibold hover:text-blue-600">Contact</Link>
        </nav>
      )}
    </>
  );
}
