import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "https://daxx.lohatheme.com/wp-content/uploads/2024/02/slide1.jpg",
  "https://daxx.lohatheme.com/wp-content/uploads/2024/02/slide1.jpg",
  "https://daxx.lohatheme.com/wp-content/uploads/2024/02/slide1.jpg",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000); // 4 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section className="bg-[#fff7ee] py-10 relative w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Image Slider Container */}
        <div className="relative w-full overflow-hidden rounded-md shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
            }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full flex-shrink-0 object-cover"
                style={{ width: `${100 / images.length}%` }}
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-200"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-200"
            >
              <FaArrowRight />
            </button>
          </div>
          <div className="text-gray-700 font-medium text-lg">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </section>
  );
}
