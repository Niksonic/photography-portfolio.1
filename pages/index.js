export default function AboutMe() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-gray-800 px-6"
      style={{
        backgroundImage: "url('/images/photo24.jpg')",
        backgroundColor: "#f5f7fa",
      }}
    >

      {/* Main Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-5xl mx-auto p-8 space-y-6 md:space-y-0 md:space-x-10">
        
        {/* Profile Picture */}
        <div className="flex-shrink-0 w-48 h-72">
          <img
            src="/images/profile.jpg"
            alt="Nikson Profile"
            className="w-full h-full object-cover rounded-lg border-2 border-gray-300 shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-full max-w-2xl text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800 drop-shadow-md">
            Hi, I'm Nikson
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed drop-shadow-sm">
          Hi, I'm Nikson – a passionate web developer and the creator of this website. I built this platform from the ground up to showcase my journey in both coding and visual storytelling. As a developer, I love crafting intuitive and interactive experiences, and this website reflects that blend of technology and creativity.

Beyond development, my true passion lies in photography and videography. Inspired by visionary filmmakers like Christopher Nolan, Quentin Tarantino, and Denis Villeneuve, I strive to bring a cinematic touch to my work. Whether it's capturing raw emotions in a portrait, telling a compelling story through video, or immortalizing special moments, I aim to create visuals that resonate and inspire.

Feel free to explore my work, and if you're looking to bring your vision to life, let's connect!
          </p>

          {/* Navigation Buttons */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/gallery"
              className="px-6 py-2 rounded-lg bg-blue-300 text-black font-semibold hover:bg-blue-600 transition"
            >
              Photography Gallery
            </a>
            <a
              href="/video-gallery"
              className="px-6 py-2 rounded-lg bg-blue-300 text-black font-semibold hover:bg-blue-600 transition"
            >
              Video Gallery
            </a>
            <a
              href="/contact"
              className="px-6 py-2 rounded-lg bg-blue-300 text- font-semibold hover:bg-blue-600 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
