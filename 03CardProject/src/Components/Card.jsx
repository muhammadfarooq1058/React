import React from "react";

function Card(Props){
  return (
    <div className="relative w-[350px] h-[450px] bg-[#2a2a2a] rounded-2xl overflow-hidden shadow-lg">
      {/* Animated Border */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[120px] bg-gradient-to-r from-transparent via-[#45f3ff] to-transparent animate-spin-slow"
          style={{
            animation: "spin 4s linear infinite",
            transformOrigin: "0 0",
          }}
        ></div>
        <div className="absolute inset-[3px] bg-[#292929] rounded-[17px]"></div>
      </div>

      {/* Profile Image */}
      <div className="relative z-10 w-full h-[150px] p-5">
        <img
          src={Props.img}
          alt="profile"
          className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[120px] h-[120px] rounded-full border-4 border-[#272727] object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-5 text-center">
        <h2 className="text-2xl font-semibold text-[#45f3ff]">
          {Props.userName}<br />
          <span className="text-sm font-medium text-white opacity-75">
            {Props.Dis}
          </span>
        </h2>

        {/* Stats */}
        <div className="flex justify-between my-5 px-8 text-center">
          <div>
            <h3 className="text-lg font-semibold text-[#45f3ff]">{Props.Posts}</h3>
            <span className="text-xs text-white opacity-75">Posts</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#45f3ff]">{Props.Followers}</h3>
            <span className="text-xs text-white opacity-75">Followers</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#45f3ff]">{Props.Following}</h3>
            <span className="text-xs text-white opacity-75">Following</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-5">
          <button className="px-6 py-2 rounded-md bg-[#45f3ff] text-[#222] font-medium hover:opacity-100 hover:scale-105 transition-transform duration-300">
            Follow
          </button>
          <button className="px-6 py-2 rounded-md bg-[#45f3ff] text-[#222] font-medium hover:opacity-100 hover:scale-105 transition-transform duration-300">
            Message
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-5 text-white opacity-75">
          <a
            href="#"
            className="hover:scale-125 hover:text-[#45f3ff] transition-transform"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="hover:scale-125 hover:text-[#45f3ff] transition-transform"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="hover:scale-125 hover:text-[#45f3ff] transition-transform"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="hover:scale-125 hover:text-[#45f3ff] transition-transform"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Inline CSS for Animation */}
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Card;
