import React from "react";
import BuildingSlider from "./con2";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./con.css";

const stats = [
  { value: 21, suffix: "+", label: "Years Experience" },
  { value: 125, suffix: "+", label: "Completed Projects" },
  { value: 2500, suffix: "+", label: "Satisfied Customers" },
  { value: 20, suffix: "%", label: "NRI Client Base" },
];

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // start animation when 30% visible
  });

  return (
    <>
      <section className="stats-section" ref={ref} style={{ overflowX: "hidden" }}>
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
                <h3 className="stat-value">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </h3>
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
