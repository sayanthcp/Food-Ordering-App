import React from "react";

const Hero = () => {
  return (
    <div className=" w-full md:h-[650px] mx-auto py-20 md:py-0">
      {/* main hero image */}
      <div className="w-full md:h-[650px]">
        <img
          className="object-cover w-full md:h-[650px]"
          src="https://images.pexels.com/photos/1860196/pexels-photo-1860196.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>
      {/* sub image and description */}
      <div className="absolute inset-0 w-full bg-gray-900/30">
  <div className="absolute inset-0 flex items-center justify-center px-4 py-20">
    <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

      {/* Content Section */}
      <div className="max-w-2xl backdrop-blur-md bg-black/25 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">

        <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold uppercase tracking-wider">
          Chef's Special
        </span>

        <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
          The Real
          <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h1>

        <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
          "Food, in the end, in our own tradition, is something holy.
          It's not about nutrients and calories. It's about sharing,
          honesty, culture, and identity."
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full shadow-lg hover:scale-105 transition duration-300">
            Explore Menu
          </button>

          <button className="px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full scale-110"></div>

        <img
          className="
            relative
            w-[260px]
            sm:w-[320px]
            md:w-[420px]
            lg:w-[500px]
            aspect-square
            object-cover
            rounded-full
            border-4
            border-white/20
            shadow-[0_0_50px_rgba(255,255,255,0.15)]
            hover:scale-105
            transition-all
            duration-500
          "
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800"
          alt="Chef Special Food"
        />

        {/* Floating Badge */}
        <div className="absolute bottom-6 right-0 md:-right-4 bg-white text-black px-5 py-3 rounded-2xl shadow-xl">
          <p className="text-xs text-gray-500 uppercase">Featured</p>
          <p className="font-bold">⭐ Chef's Choice</p>
        </div>
      </div>

    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Hero;
