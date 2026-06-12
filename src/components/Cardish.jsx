import React from "react";

const Cardish = ({ item, PopupHandler }) => {
  return (
    <div
      onClick={() => PopupHandler(item?.strMeal)}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        cursor-pointer
        bg-white/5
        backdrop-blur-sm
        border border-white/10
        shadow-xl
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]
        hover:-translate-y-3
        transition-all
        duration-500
      "
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={item?.strMealThumb}
          alt={item?.strMeal}
          className="
            w-full
            h-56
            sm:h-64
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Gradient Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/20
            to-transparent
          "
        />

        {/* Floating Badge */}
        <div
          className="
            absolute
            top-4
            left-4
            px-3
            py-1
            rounded-full
            bg-yellow-400
            text-black
            text-xs
            font-bold
            shadow-lg
          "
        >
          Chef's Choice
        </div>

        {/* Hover Shine Effect */}
        <div
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            group-hover:translate-x-full
            transition-all
            duration-1000
          "
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="
            text-white
            text-lg
            sm:text-xl
            font-bold
            line-clamp-2
            group-hover:text-yellow-300
            transition-colors
            duration-300
          "
        >
          {item?.strMeal}
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          Freshly prepared with premium ingredients.
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-yellow-400 font-semibold">
            View Recipe →
          </span>

          <div
            className="
              w-10
              h-10
              rounded-full
              bg-yellow-400/20
              flex
              items-center
              justify-center
              text-yellow-400
              group-hover:bg-yellow-400
              group-hover:text-black
              transition-all
              duration-300
            "
          >
            →
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardish;
