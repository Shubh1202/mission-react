import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full bg-gray-900 bg-cover bg-center text-white h-screen flex items-center relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-40 rounded-lg"></div>

      {/* Content */}
      <div className="w-full text-center px-6 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 typewriter">
          Build Your Future with <span className="text-blue-500">Code</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Join our community of developers and turn your ideas into reality.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg md:text-xl rounded shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;