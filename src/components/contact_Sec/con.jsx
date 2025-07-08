import React from "react";
import BuildingSlider from "./con2";
import "./con.css";

const stats = [
  { value: "21+", label: "year Experiance" },
  { value: "125+", label: "Completed Project" },
  { value: "2500+", label: "Satisfied Customers" },
  { value: "20%", label: "NRI Client Base" },
];

export default function StatsSection() {
  return (
    <>
      <section className="stats-section">
        <div className="container">
          {/* Contact Us */}
          <div className="contact-us">
            <button className="contact-button">
              Contact Us <span className="arrow text-blue-500">→</span>
            </button>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`stat-block ${idx !== stats.length - 1 ? "with-line" : ""}`}
              >
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BuildingSlider />
    </>
  );
}
