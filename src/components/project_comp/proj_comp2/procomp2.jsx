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
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsPerPage = 6;

  const cities = [
    "All Projects",
    "Recently Completed Star Projects",
    "Running Layout Projects",
    "Running Flat Schemes Projects"
  ];

  const projects = [
    {
      id: 1,
      city: "Recently Completed Star Projects",
      name: "Vrindavan Park",
      image: "Vrindavan_Park.png",
      description:
        "NH 353(I) touch, a 35-acre layout, 400 plots, 2 km from Samruddhi Junction Point",
      icon: <FaBuilding size={24} />,
    },
    {
      id: 2,
      city: "Recently Completed Star Projects",
      name: "Silver Icon 1 & 2",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer1.jpg",
      description:
        "Shankarpur Area, 3 kms from Wardha Road",
      icon: <FaBuilding size={24} />,
    },
    {
      id: 3,
      city: "Recently Completed Star Projects",
      name: "Silver Park 1 to 15",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer1.jpg",
      description:
        "Gotal Panjri, 5 kms from Wardha Road",
      icon: <FaBuilding size={24} />,
    },
    {
      id: 4,
      city: "Recently Completed Star Projects",
      name: "Samruddhi 1 to 8",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer1.jpg",
      description:
        "4 kms from Samruddhi Junction Poin",
      icon: <FaBuilding size={24} />,
    },
    {
      id: 5,
      city: "Running Layout Projects",
      name: "AGI Residency",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer2.jpg",
      description:
        "NH 353(I) touch, 140 plot layout",
      icon: <FaWarehouse size={24} />,
    },
    {
      id: 6,
      city: "Running Layout Projects",
      name: "Green Gold",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer2.jpg",
      description:
        "NH 353(I) touch, 140 plot layout",
      icon: <FaWarehouse size={24} />,
    },
    {
      id: 7,
      city: "Running Layout Projects",
      name: "AGI Colony",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer2.jpg",
      description:
        "NH 353(I) touch, 140 plot layout",
      icon: <FaWarehouse size={24} />,
    },
    {
      id: 8,
      city: "Running Layout Projects",
      name: "Kuber Nagar",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer2.jpg",
      description:
        "NH 353(I) touch, 140 plot layout",
      icon: <FaWarehouse size={24} />,
    },
    {
      id: 9,
      name: "Prospera",
      city: "Running Flat Schemes Projects",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer3.jpg",
      description:
        "Besa Square, Nagpur",
      icon: <FaWarehouse size={24} />,
    },
    {
      id: 10,
      name: "Krishna Kunj",
      city: "Running Flat Schemes Projects",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer3.jpg",
      description:
        "Swalambhi Nagar, Nagpur",
      icon: <FaWarehouse size={24} />,
    },
    {
      id: 11,
      name: "Shree Enclav",
      city: "Running Flat Schemes Projects",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer3.jpg",
      description:
        "Narendra Nagar Square, Nagpur",
      icon: <FaWarehouse size={24} />,
    },
    {
      id: 12,
      name: "Ved Enclave ",
      city: "Running Flat Schemes Projects",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer3.jpg",
      description:
        "Sonegaon Lake, Nagpur",
      icon: <FaWarehouse size={24} />,
    },
    {
      id: 13,
      name: " Shaisha Enclave ",
      city: "Running Flat Schemes Projects",
      image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer3.jpg",
      description:
        "Jaiprakash Nagar, Nagpur",
      icon: <FaWarehouse size={24} />,
    },
  ];

  const filteredProjects =
    selectedCity === "All Projects"
      ? projects
      : projects.filter((p) => p.city === selectedCity);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

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
            <span className="text-blue-500">Projects</span>
          </div>
          <h1 className="text-8xl font-bold">Our projects</h1>
        </div>
      </div>

      {/* Cities Section */}
      <div className="bg-[#23282e] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="text-green-700 font-bold text-sm mb-2 border-t border-b border-blue-500 inline-block py-1 px-4">
              Projects
            </div>
            <h2 className="text-4xl font-bold mt-4">
              <span className="text-blue-500">Explore</span> Our Projects
            </h2>
          </div>

          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">Select categoty:</h3>
            <div className="relative">
              <div
                className="cursor-pointer text-lg border-b border-blue-500 pb-2 flex justify-between items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {selectedCity}
                <span className="text-blue-500 ml-2">▾</span>
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
      <section className="bg-[#ebf8ff] py-16 px-6">
        <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {currentProjects.map((card, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md shadow-lg group cursor-pointer"
                onClick={() => setSelectedProject(card)}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-[660px] object-cover"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300" />

                <div className="absolute bottom-0 left-0 w-full px-6 py-8 text-white transform transition-transform duration-500 group-hover:-translate-y-20 z-20">
                  <div>{card.icon}</div>
                  <h3 className="text-2xl font-bold leading-snug">
                    {card.name}
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 w-full px-6 pb-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 z-10">
                  <p className="text-sm mb-3">{card.description}</p>
                  <FaArrowUpRightFromSquare />
                </div>
              </div>
            ))}
          </div>
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
                  currentPage === i + 1 ? "bg-blue-500 text-white" : "border-gray-300 text-gray-700"
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


{/* trial */}


  


      {/* // model */}

{selectedProject && (
  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md relative">
      <button
        className="absolute top-2 right-2 text-black"
        onClick={() => setSelectedProject(null)}
      >
        ✕
      </button>
      <img
        src={selectedProject.image}
        alt={selectedProject.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-bold mb-2">
        {selectedProject.name}
      </h3>
      <p className="text-gray-700">{selectedProject.description}</p>
    </div>
  </div>
)}


    </div>




  );
};

export default ProjectsHeader;

