import React, { useState } from 'react';

const timelineSteps = [
  {
    date: 'January 2023',
    text: 'Massa sed elementum tempus',
    image: 'https://daxx.lohatheme.com/wp-content/uploads/2024/02/timeline1.jpg', // Replace with actual image
  },
  {
    date: 'Spring 2024',
    text: 'Building permit',
    image: 'https://daxx.lohatheme.com/wp-content/uploads/2024/02/timeline2.jpg',
  },
  {
    date: 'Summer 2024',
    text: 'Beginning of construction',
    image: 'https://daxx.lohatheme.com/wp-content/uploads/2024/02/timeline1.jpg',
  },
  {
    date: 'December 2024',
    text: 'Completion of construction',
    image: 'https://daxx.lohatheme.com/wp-content/uploads/2024/02/timeline4.jpg',
  },
];

export default function Timeline() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex flex-col md:flex-row p-8 space-x-0 md:space-x-8 items-center justify-center">
      {/* Left side image that changes based on current step */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src={timelineSteps[current].image}
          alt="Timeline stage"
          className="rounded-lg shadow-md w-full h-auto object-cover transition-all duration-500"
        />
      </div>

      {/* Right side timeline */}
      <div className="w-full md:w-1/2 space-y-6 relative">
        <h2 className="text-orange-500 font-bold uppercase text-sm tracking-wide">
          Timeline
        </h2>
        <h1 className="text-4xl font-bold text-gray-800">
          Where innovation will <br /> inspire you
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis.
        </p>

        {/* Timeline steps */}
        <div className="relative mt-6 space-y-6">
          {timelineSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 cursor-pointer"
              onClick={() => setCurrent(index)}
            >
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition duration-300 ${
                  current === index ? 'border-orange-500' : 'border-gray-400'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition duration-300 ${
                    current === index ? 'bg-orange-500' : 'bg-gray-500'
                  }`}
                ></div>
              </div>
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    current === index ? 'text-orange-500' : 'text-gray-800'
                  }`}
                >
                  {step.date}
                </h3>
                <p className="text-gray-500">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation button (optional) */}
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % timelineSteps.length)}
          className="absolute -left-10 top-2 text-orange-500 text-2xl"
        >
          ←
        </button>
      </div>
    </div>
  );
}
