import React from "react";
import { FaGem, FaCar, FaTree, FaBuilding } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ProjectOverviewO() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: <FaBuilding className="text-blue-500 text-3xl mx-auto mb-2" />,
      value: 11700,
      suffix: "",
      label: "SQUARE AREAS",
    },
    {
      icon: <FaBuilding className="text-blue-500 text-3xl mx-auto mb-2" />,
      value: 264,
      suffix: "",
      label: "APARTMENTS",
    },
    {
      icon: <FaCar className="text-blue-500 text-3xl mx-auto mb-2" />,
      value: 520,
      suffix: "",
      label: "CAR PARKINGS",
    },
    {
      icon: <FaTree className="text-blue-500 text-3xl mx-auto mb-2" />,
      value: 2100,
      suffix: "m²",
      label: "PARK AREAS",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 overflow-x-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-28 h-28 bg-blue-100 clip-triangle" />
          <div className="relative z-10">
            <img
              src="https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer3.jpg"
              alt="Main Building"
              className="rounded shadow-md"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center bg-white/50">
                <FaGem className="text-grey-100 text-3xl" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-gray-200 clip-triangle rotate-180" />
        </div>

        {/* Right Content Section */}
        <div>
          <h4 className="text-blue-500 font-bold mb-2 flex items-center gap-2">
            <span className="border-t border-b border-green-700 px-4 py-1">OVERVIEW</span>
          </h4>
          <h2 className="text-6xl font-bold text-gray-800 mb-4 leading-snug">
            Modern & premium apartments
          </h2>
          <p className="text-gray-600 mb-8 text-2xl">
            Odio tempor orci dapibus ultrices. Volutpat sed cras ornare arcu dui
            vivamus arcu felis. Sed elementum tempus egestas.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 border rounded-md">
                {stat.icon}
                <h3 className="text-3xl font-bold text-gray-800">
                  {inView ? (
                    <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom clip path */}
      <style>{`
        .clip-triangle {
          clip-path: polygon(100% 0, 0 100%, 0 0);
        }
      `}</style>
    </section>
  );
}
