import React from "react";
import "./aboutpl.css";
export default function AboutDaxx() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Logo Shape (Left Side) */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-10 z-0">
        <img
          src="/main_o1.png" // <-- Replace with your light logo bg image
          alt="PrinceLand logo"
          className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <p className="text-green-700 font-semibold text-sm tracking-wider uppercase relative inline-block mb-4 before:content-[''] before:absolute before:left-[-40px] before:top-1/2 before:w-8 before:h-[1px] before:bg-orange-500 after:content-[''] after:absolute after:right-[-40px] after:top-1/2 after:w-8 after:h-[1px] after:bg-orange-500 ">
          About PrinceLand Developers
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight go text-left">
        Princelands Developers is a trusted name in Nagpur’s land and plot development
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-left">
        Our focus is clear, to offer legally secure, NMRDA-sanctioned, RERA-registered, ready-to-construct plots backed by transparency, professional service, and long-term value.
We work with a client-first approach, delivering developments that are not just investment opportunities but foundations for future homes and lasting relationships.

        </p>
      </div>
    </section>
  );
}
