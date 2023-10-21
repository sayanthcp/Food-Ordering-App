import React from "react";

const Hero = () => {
  return (
    <div className=" w-full h-screen md:h-screen mx-auto py-20 md:py-0 fixed">
      <div className="w-full">
        <img
          className="object-cover h-screen md:h-screen w-full"
          src="https://images.pexels.com/photos/1860196/pexels-photo-1860196.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>
      <div className="absolute w-full h-full top-0 bg-gray-900/30">
        <div className="absolute top-0 left-0 w-full h-full justify-center items-center flex flex-col md:flex-row my-20 px-4">
          <div className="max-w-[600px]">
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
          <div className="max-w-[600px] py-8">
            <img
              className="rounded-full"
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
