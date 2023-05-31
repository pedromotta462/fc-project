import React from "react";

const loading = () => {
  return (
    <div class="wrapper w-200 h-60 relative z-10">
      <div class="circle w-20 h-20 absolute rounded-full bg-white left-15 transform-origin-50 animate-circle7124"></div>
      <div class="circle w-20 h-20 absolute rounded-full bg-white left-45 animate-circle7124 animate-delay-200"></div>
      <div class="circle w-20 h-20 absolute rounded-full bg-white right-15 animate-circle7124 animate-delay-300"></div>
      <div class="shadow w-20 h-4 absolute rounded-full bg-black opacity-90 top-62 transform-origin-50 z-negative-1 left-15 animate-shadow046"></div>
      <div class="shadow w-20 h-4 absolute rounded-full bg-black opacity-70 left-45 animate-shadow046 animate-delay-200"></div>
      <div class="shadow w-20 h-4 absolute rounded-full bg-black opacity-40 right-15 animate-shadow046 animate-delay-300"></div>
    </div>
  );
};

export default loading;
