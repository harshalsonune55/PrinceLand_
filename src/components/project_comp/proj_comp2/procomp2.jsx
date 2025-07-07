import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBuilding,
  FaWarehouse,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const ProjectsHeader = () => {
  const [selectedCity, setSelectedCity] = useState("All Projects");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const cities = [
    "All Projects",
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego"
  ];

  const projects = [
    {
      id: 1,
      city: "New York",
      name: "Tower Business Center",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer1.jpg",
      description:
        "Volutpat diam ut venenatis tellus in metus vulputateondimentum vitae sapien pellentesque habitant morbi tristique.",
      icon: <FaBuilding size={24} />,
    },
    {
        id: 1,
        city: "New York",
        name: "Tower Business Center",
        image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer1.jpg",
        description:
          "Volutpat diam ut venenatis tellus in metus vulputateondimentum vitae sapien pellentesque habitant morbi tristique.",
        icon: <FaBuilding size={24} />,
      },
      {
        id: 1,
        city: "New York",
        name: "Tower Business Center",
        image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer1.jpg",
        description:
          "Volutpat diam ut venenatis tellus in metus vulputateondimentum vitae sapien pellentesque habitant morbi tristique.",
        icon: <FaBuilding size={24} />,
      },
      {
        id: 1,
        city: "New York",
        name: "Tower Business Center",
        image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer1.jpg",
        description:
          "Volutpat diam ut venenatis tellus in metus vulputateondimentum vitae sapien pellentesque habitant morbi tristique.",
        icon: <FaBuilding size={24} />,
      },
      {
        id: 1,
        city: "New York",
        name: "Tower Business Center",
        image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer1.jpg",
        description:
          "Volutpat diam ut venenatis tellus in metus vulputateondimentum vitae sapien pellentesque habitant morbi tristique.",
        icon: <FaBuilding size={24} />,
      },
    {
      id: 2,
      city: "Los Angeles",
      name: "Kvartal Residences",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores reprehenderit.",
      icon: <FaWarehouse size={24} />,
    },
    {
      id: 3,
      city: "Chicago",
      name: "Premium Park Residences",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer3.jpg",
      description:
        "Aliquam ultrices sagittis orci a scelerisque purus semper eget. Vitae tortor condimentum lacinia quis.",
      icon: <FaWarehouse size={24} />,
    },
  ];

  const filteredProjects = selectedCity === "All Projects"
    ? projects
    : projects.filter(p => p.city === selectedCity);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <div className="relative w-full h-screen">
        <img
          src="project_back.png"
          alt="Building"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 " />
        <div className="relative z-10 flex flex-col justify-center h-full px-10 text-white">
          <div className="text-sm mb-2">
            <span className="text-gray-300">Home</span>
            <span className="mx-2">&#8594;</span>
            <span className="text-orange-500">Projects</span>
          </div>
          <h1 className="text-8xl font-bold">Our projects</h1>
        </div>
      </div>

      {/* Cities Section */}
      <div className="bg-[#23282e] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="text-orange-500 font-bold text-sm mb-2 border-t border-b border-orange-500 inline-block py-1 px-4">
              CITIES
            </div>
            <h2 className="text-4xl font-bold mt-4">
              <span className="text-orange-500">8 cities</span> in which we created comfort
            </h2>
          </div>

          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">Select city:</h3>
            <div className="relative">
              <div
                className="cursor-pointer text-lg border-b border-orange-500 pb-2 flex justify-between items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {selectedCity}
                <span className="text-orange-500 ml-2">▾</span>
              </div>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    className="absolute bg-[#2c3137] mt-2 w-full rounded shadow-lg z-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {cities.map(city => (
                      <li
                        key={city}
                        onClick={() => {
                          setSelectedCity(city);
                          setDropdownOpen(false);
                          setCurrentPage(1);
                        }}
                        className="px-4 py-2 hover:bg-[#3a3f45] cursor-pointer"
                      >
                        {city}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* All Projects Section */}
      <section className="bg-[#fff7ee] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {currentProjects.map((card, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md shadow-lg group"
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-[660px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300" />

                {/* Initial content */}
                <div className="absolute bottom-0 left-0 w-full px-6 py-8 text-white transform transition-transform duration-500 group-hover:-translate-y-20 z-20">
                  <div>{card.icon}</div>
                  <h3 className="text-2xl font-bold leading-snug">
                    {card.name}
                  </h3>
                </div>

                {/* Hover content */}
                <div className="absolute bottom-0 left-0 w-full px-6 pb-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 z-10">
                  <p className="text-sm mb-3">{card.description}</p>
                  <FaArrowUpRightFromSquare />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-6 py-3 bg-gray-200 text-gray-700 font-medium skew-x-[-20deg] disabled:opacity-50"
            >
              <span className="inline-block skew-x-[20deg]">Prev</span>
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border skew-x-[-20deg] ${
                  currentPage === i + 1 ? "bg-orange-500 text-white" : "border-gray-300 text-gray-700"
                }`}
              >
                <span className="inline-block skew-x-[20deg]">{i + 1}</span>
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-6 py-3 bg-gray-200 text-gray-700 font-medium skew-x-[-20deg] disabled:opacity-50"
            >
              <span className="inline-block skew-x-[20deg]">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsHeader;
