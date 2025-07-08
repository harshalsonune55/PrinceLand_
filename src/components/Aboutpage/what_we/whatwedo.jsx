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
      title: " ⁠Legally Secure Plots",
      desc:
        "Every project is approved by NMRDA and registered under RERA, ensuring full legal compliance and buyer confidence."
    },
    {
      icon: <FileText size={32} className="text-blue-500" />,
      title: "Ready-to-Construct Layouts",
      desc: "We deliver plots with clear titles, developed infrastructure, and immediate construction readiness."
    },
    {
      icon: <HardHat size={32} className="text-blue-500" />,
      title: "Trusted by Thousands",
      desc:
        "With over 25,000 clients, including 20% NRIs, our reputation is built on transparency and consistent delivery."
    },
    {
      icon: <Lightbulb size={32} className="text-blue-500" />,
      title: "⁠Defence & National Service Support",
      desc:
        "In collaboration with ABSAY, we proudly assist defence personnel in securing legally clear land across India."
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
           At Princelands Developers, we specialize in legally secure, NMRDA-sanctioned and<br/>
           RERA-registered plotted developments across<br/>
           prime Nagpur locations.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
          With a legacy of 125+ successful projects, we focus on creating ready-to-construct plots that offer lasting value and trust.
           Our client-first approach ensures transparent service, legal integrity,
            and future-ready investments for both residents and NRIs.
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
