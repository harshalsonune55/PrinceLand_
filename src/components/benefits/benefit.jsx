import React from "react";
import {
  FaThermometerHalf,
  FaTint,
  FaPlug,
  FaLock,
  FaFan,
  FaAirFreshener,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaAirFreshener size={30} />,
    title: "AIR CLEANING",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua vestibulum.",
  },
  {
    icon: <FaFan size={30} />,
    title: "VENTILATION",
    text: "Platea dictumst quisque sagittis purus sit amet. Massa sed elementum tempus egestas sed sed.",
  },
  {
    icon: <FaThermometerHalf size={30} />,
    title: "HEATING",
    text: "Duis convallis convallis tellus id interdum velit. Posuere lorem ipsum dolor sit amet. Adipiscing commodo elit.",
  },
  {
    icon: <FaTint size={30} />,
    title: "WATER SUPPLY",
    text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Enim nulla aliquet porttitor lacus. Turpis massa tincidunt dui ut ornare.",
  },
  {
    icon: <FaPlug size={30} />,
    title: "POWER SUPPLY",
    text: "Lobortis mattis aliquam faucibus purus in massa tempor. Vel fringilla est ullamcorper eget nulla facilisi etiam.",
  },
  {
    icon: <FaLock size={30} />,
    title: "SECURITY",
    text: "Ac turpis egestas integer eget. Morbi quis commodo odio aenean sed. Tellus mauris a diam maecenas. Nisl suscipit adipiscing bibendum est ultricies.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
          {/* Heading in Grid */}
          <div className="col-span-full md:col-span-2 lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-orange-500 tracking-wide flex items-center gap-4">
                <span className="h-px w-10 bg-orange-500" />
                BENEFITS
                <span className="h-px w-10 bg-orange-500" />
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 leading-snug" style={{"font-size":"4rem"}}>
                Apartments tailored to your highest standards
              </h2>
            </div>
          </div>

          {/* Benefit Cards */}
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-5">
              <div className="p-4">
                <div className="text-orange-500">{benefit.icon}</div>
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold mb-1">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
