import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/home/home";
import Navbar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Project from "./pages/project/project";
import ProjectDetail from "./pages/project/projectDetail.jsx/project_Det";
import Loader from "./components/Loader/loder";

function RouteChangeLoaderWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Start loader on location change
    setLoading(true);

    // Simulate small delay or wait for component render
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700); // Optional delay for smoother effect

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <Loader />}

      <div
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projectDetail" element={<ProjectDetail />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <RouteChangeLoaderWrapper />
    </Router>
  );
}

export default App;
