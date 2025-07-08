import React, { useState, useRef, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const timelineSteps = [
  {
    date: '2004',
    text: 'Foundation Laid Princelands Developers is established in Nagpur with a mission to provide trustworthy and transparent land development solutions.',
    image: 'Milestone Start.jpg',
  },
  {
    date: '2010 – 25',
    text: 'Projects Milestone Achieved a key milestone of completing 25 successful layout projects across Nagpur, building early credibility and trust among clients.',
    image: '21 years and Growth.jpg',
  },
  {
    date: '2014 – Strategic Association with ABSAY',
    text: 'Partnered with Akhil Bharatiya Sena Awaas Yojana (ABSAY) to support defence personnel in acquiring legally clear land—strengthening our commitment to service and national trust.',
    image: 'Milestone Strategic.jpg',
  },
  {
    date: '2018 – Crossing 75 Projects & 15,000 Clients',
    text: 'Expanded our footprint with over 75 completed projects and a growing clientele, including NRIs and first-time homebuyers, emphasizing transparency and long-term value.',
    image: 'Milestone 75.jpg',
  },
  {
    date: '2025',
    text: '21 Years Strong: 125+ Projects & Global Trust Celebrating 21 years of excellence with 125+ projects delivered and a client base of over 25,000, including 20% NRIs—marking Princelands Developers as one of Nagpur’s most reliable names in real estate.',
    image: 'Milestone 25.jpg',
  },
];

export default function Timeline() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const [arrowTop, setArrowTop] = useState(0);

  // Adjust arrow position on mount and when current changes
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const itemHeight = container.querySelector('div')?.offsetHeight || 80;
      setArrowTop(current * itemHeight);
    }
  }, [current]);

  return (
    <div className="flex flex-col md:flex-row p-9 space-x-0 md:space-x-8 items-start justify-center">
      {/* Left Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src={timelineSteps[current].image}
          alt="Timeline stage"
          className="rounded-lg shadow-md w-full h-auto object-cover transition-all duration-500"
        />
      </div>

      {/* Right Timeline Section */}
      <div className="w-full md:w-1/2 relative">
        {/* Arrow */}
        <div
          className="absolute -left-8 text-blue-500 transition-all duration-500"
          style={{ top: `${arrowTop + 6}px` }} // 6px offset to vertically center with dot
        >
          <FaArrowRight className="text-xl" />
        </div>

        {/* Timeline Items */}
        <div ref={containerRef} className="space-y-6">
          {timelineSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 cursor-pointer"
              onClick={() => setCurrent(index)}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition duration-300 ${current === index ? 'border-green-500' : 'border-gray-400'
                  }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition duration-300 ${current === index ? 'bg-blue-500' : 'bg-gray-500'
                    }`}
                ></div>
              </div>

              <div>
                <h3
                  className={`text-lg font-semibold ${current === index ? 'text-blue-500' : 'text-gray-800'
                    }`}
                >
                  {step.date}
                </h3>
                <p className="text-gray-500">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
