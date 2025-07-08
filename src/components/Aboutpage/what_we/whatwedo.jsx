import React from "react";
import {
  Building2,
  FileText,
  HardHat,
  Lightbulb
} from "lucide-react"; // Using Lucide icons for similarity
import "./WhatWeDo.css";

export default function WhatWeDo() {
  const features = [
    {
      icon: <Building2 size={32} className="text-blue-500" />,
      title: "Modern Construction",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <FileText size={32} className="text-blue-500" />,
      title: "Solving complex problems",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
    },
    {
      icon: <HardHat size={32} className="text-blue-500" />,
      title: "Professional specialists",
      desc:
        "Sodales ut etiam sit amet nisl purus in mollis. Ullamcorper malesuada proin libero nunc."
    },
    {
      icon: <Lightbulb size={32} className="text-blue-500" />,
      title: "Creative approach",
      desc:
        "Maecenas volutpat blandit aliquam etiam erat. Dis parturient montes nascetur ridiculus mus. Diam donec adipiscing tristique."
    }
  ];

  return (
    <section className="what-we-do bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left content */}
        <div className="lg:w-1/2">
          <h4 className="text-blue-500 text-sm font-bold mb-2">
            ── WHAT WE DO ──
          </h4>
          <h2 className="text-4xl font-extrabold leading-tight mb-6 text-gray-800">
            Quality construction. <br />
            Honest service. <br />
            Great value.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Malesuada pellentesque elit eget gravida. Elit sed vulputate mi sit
            amet mauris commodo. In hac habitasse platea dictumst. Odio tempor
            orci dapibus ultrices. Volutpat sed cras ornare arcu dui vivamus
            arcu felis. Sed elementum tempus egestas.
          </p>
        </div>

        {/* Right feature boxes */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 rounded shadow-sm bg-white relative"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-md font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-gray-100 to-transparent transform -skew-y-2 origin-bottom-left opacity-60"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
