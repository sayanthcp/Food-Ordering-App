import React from "react";

const About = () => {
  return (
    <div className="max-w-[1280px] mx-auto py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          ABOUT US
        </h1>

        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Content Section */}
      <div className="grid lg:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative">
            <div className="absolute -left-4 top-0 h-full w-1 bg-yellow-400 rounded-full hidden md:block"></div>

            <p className="text-lg md:text-xl lg:text-2xl text-yellow-300 leading-relaxed text-center lg:text-left font-light italic px-4">
              " We believe in the commitment to our community and in fostering
              long term relationships with local farmers and fishermen. Our
              menus reflect these connections, featuring local, seasonal produce
              and sustainably sourced seafood and meats "
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="overflow-hidden rounded-2xl group relative">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-10"></div>

            <img
              className="rounded-2xl object-cover lg:max-w-[600px] lg:max-h-[700px] shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
              src="https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
