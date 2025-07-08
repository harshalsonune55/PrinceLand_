import React from "react";
import "./advice.css";

export default function Testimonial() {
  return (
    <section className="relative py-20 px-4 md:px-10 bg-white overflow-hidden">
      {/* Optional slant lines in background (like image) */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <svg
          viewBox="0 0 1600 120"
          preserveAspectRatio="none"
          className="w-full h-[150px] rotate-[2deg] opacity-10"
        >
          <path
            d="M0,100 L1600,0"
            stroke="#ccc"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="flex r mb-9 ">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Philip Demarco"
            className="w-32 h-32 rounded-full object-cover shadow-md gopil"
          />
        </div>

        {/* Quote */}
        <p className="text-xl md:text-2xl font-medium text-green-700 leading-relaxed px-4">
          “Quis lectus nulla at volutpat diam. Sed nisi lacus sed viverra tellus in hac. 
          Enim nunc faucibus a pellentesque sit. Commodo nulla facilisi nullam vehicula ipsum 
          a arcu cursus. Risus ultricies tristique nulla aliquet enim tortor.”
        </p>

        {/* Name + Title */}
        <div className="mt-6">
          <h4 className="text-lg font-bold text-gray-800 uppercase">Philip Demarco</h4>
          <p className="text-gray-500 mt-1">Lead architect and partner</p>
        </div>
      </div>
    </section>
  );
}
