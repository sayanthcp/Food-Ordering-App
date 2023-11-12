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
      <div className="absolute w-full top-0 md:mt-20 lg:mt-0 bg-gray-900/30">
        <div className="absolute top-0 left-0 w-full justify-center items-center flex flex-col gap-5 md:flex-row my-20 px-4">
          <div className="max-w-[600px] bg-black/30 p-2 rounded-lg">
            <p className="text-green-500 uppercase font-bold text-md">
              chef's special
            </p>
            <h1 className="text-5xl md:7xl text-white font-bold">
              The Real Experience
            </h1>
            <p className="text-white/90 font-medium py-4 text-lg">
              "Food, in the end, in our own tradition, is something holy. It's
              not about nutrients and calories. It's about sharing. It's about
              honesty. It's about identity."
            </p>
          </div>
          <div className="max-w-[600px]">
            <img
              className="rounded-full w-[250px] md:w-[500px]"
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
