import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Today, Investing in Plots is the best option to secure hard earned money. My association with Princelands in owning a plot in Mega and dream Project was based on trust & really beyond Imagination. Thanks to Princelands and Team.",
    name: "Dr Mahendra Parage",
    place: "Hyderabad",
  },
  {
    quote:
      "To deal in Real Estate, first time ever what an delightful experience with professional and experienced people in a smooth way ' Princelands made it possible in peaceful manner. Thanks, a highly recommended brand in nagpur Realty.",
    name: "Pallavi Jambhulkar",
    place:"Nagpur"
  },
  {
    quote:
      " I had an great experience buying a plot with Princelands and for sure I would recommend this to my friends and family and in future I would also approach again for any New Purchase.",
    name: "Jyoti & Pratik Wagh",
    place: "Nagpur",
  },
];

export default function TestimonialsSectionReview() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setFade(true);
    }, 200);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, 200);
  };

  // Auto play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { quote, name, place } = testimonials[current];

  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto relative">
        {/* Section Label */}
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="w-10 h-px bg-blue-500" />
          <span className="text-green-700 font-semibold tracking-wide uppercase text-sm">
            Reviews
          </span>
          <div className="w-10 h-px bg-blue-500" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          What our happy customers <br /> say about{" "}
          <span className="text-gray-900 font-extrabold">US</span>
        </h2>

        {/* Quote Icon */}
        <div className="text-4xl text-gray-300 my-6">
          <FaQuoteLeft />
        </div>

        {/* Animated Quote Text */}
        <div
          className={`transition-opacity duration-700 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-blue-600 text-xl leading-relaxed max-w-3xl mx-auto px-2">
            “{quote}”
          </p>
          <div className="mt-8">
            <h4 className="text-gray-800 font-bold">{name}</h4>
            <p className="text-sm text-gray-500">{place}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full px-2 md:px-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 text-gray-700 hover:bg-gray-100 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 text-gray-700 hover:bg-gray-100 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
