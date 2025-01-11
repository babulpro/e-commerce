"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Carousel = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const images = [data.image1, data.image2, data.image3, data.image4];

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      setAnimating(false);
    }, 600);
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      setAnimating(false);
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  if (!data || images.every((img) => !img)) return <p>No data available</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-3/4  carousel h-80 relative overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

        {/* Image */}
        <div
          className={`w-full h-full relative carousel-item opacity-0 transition-opacity duration-500 ${
            animating ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            width={500}
            height={300}
            layout="responsive"
            src={images[index] || ""}
            alt={`Slide ${index + 1}`}
          />
        </div>

        {/* Text on top of image */}
        {/* <div className="absolute inset-0 h-10 b-0 flex  z-20 px-8">
          <p
            className={`text-md text-black  duration-700 ease-in-out transform ${
              animating ? "translate-x-10 opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {data.description.split(" ").slice(0, 20).join(" ")}...
          </p>
        </div> */}

        {/* Navigation Buttons */}
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between z-20">
          <button
            className="btn btn-circle hover:animate-ping bg-gray-800 text-white"
            onClick={handlePrev}
          >
            {"<"}
          </button>
          <button
            className="btn btn-circle hover:animate-ping bg-gray-800 text-white"
            onClick={handleNext}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
