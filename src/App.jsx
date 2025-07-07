import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Navbar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Project from "./pages/project/project";
import ProjectDetail from "./pages/project/projectDetail.jsx/project_Det";
import React, { useEffect, useState } from "react";
import Loader from "./components/Loader/loder";
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {

      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
        <>
      {loading && <Loader />}

      <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projectDetail" element={<ProjectDetail />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
      </div>
    </>
  )
}

export default App
