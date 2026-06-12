import React from "react";

const About = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          About Us
        </h1>

        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Passionate about bringing people together through exceptional food,
          fresh ingredients, and unforgettable dining experiences.
        </p>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-2xl border border-white/10">
        
        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            className="w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover hover:scale-110 transition-transform duration-700"
            src="https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Restaurant"
          />
        </div>

        {/* Text */}
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full text-sm">
            Our Story
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Serving Fresh Food With Passion & Tradition
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            We believe in our commitment to the community and in fostering
            meaningful relationships with local farmers and fishermen. Every
            dish we serve reflects these connections through fresh seasonal
            ingredients and responsibly sourced seafood and meats.
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Our mission is simple — create memorable dining experiences while
            supporting local producers and promoting sustainable practices that
            benefit future generations.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
