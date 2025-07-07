import React from "react";
import {
  FaHome,
  FaFan,
  FaTemperatureLow,
  FaTint,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

export default function PropertyFeatures() {
  const features = [
    {
      icon: <FaHome size={28} className="text-orange-500" />,
      title: "Air cleaning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua vestibulum.",
    },
    {
      icon: <FaFan size={28} className="text-orange-500" />,
      title: "Ventilation",
      description:
        "Platea dictumst quisque sagittis purus sit amet. Massa sed elementum tempus egestas sed sed.",
    },
    {
      icon: <FaTemperatureLow size={28} className="text-orange-500" />,
      title: "Heating",
      description:
        "Duis convallis convallis tellus id interdum velit. Posuere lorem ipsum dolor sit amet. Adipiscing commodo elit.",
    },
    {
      icon: <FaTint size={28} className="text-orange-500" />,
      title: "Water Supply",
      description:
        "Arcu non odio euismod lacinia at quis risus sed vulputate. Enim nulla aliquet porttitor lacus.",
    },
    {
      icon: <FaBolt size={28} className="text-orange-500" />,
      title: "Power Supply",
      description:
        "Nunc mattis enim ut tellus elementum sagittis. Sit amet luctus venenatis lectus magna fringilla urna.",
    },
    {
      icon: <FaShieldAlt size={28} className="text-orange-500" />,
      title: "Security",
      description:
        "Ac turpis egestas integer eget aliquet nibh. Amet volutpat consequat mauris nunc congue nisi.",
    },
  ];

  return (
    <section className="bg-[#23282e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h4 className="text-orange-500 font-bold mb-2 border-t border-b border-orange-500 inline-block px-4 py-1">
            BENEFITS
          </h4>
          <h2 className="text-4xl font-bold mt-4 mb-6 leading-snug">
            Our main property <br />
            features
          </h2>
          <p className="text-gray-300 mb-6">
            Condimentum vitae sapien pellentesque habitant morbi tristique. Sem
            et tortor consequat id porta. Auctor neque vitae tempus quam
            pellentesque.
          </p>
          <ul className="list-disc ml-6 text-gray-300 space-y-3">
            <li>Condimentum vitae sapien pellentesque habitant morbi.</li>
            <li>
              Mattis vulputate enim nulla aliquet porttitor lacus luctus
              accumsan.
            </li>
            <li>Nec feugiat in fermentum posuere urna nec tincidunt.</li>
            <li>Purus sit amet volutpat consequat mauris nunc.</li>
          </ul>
        </div>

        {/* Right Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-md shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
