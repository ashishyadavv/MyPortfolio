"use client";
import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        width: "80%",
        maxWidth: "1200px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderRadius: "15px",
        color: "#EAEAEA",
        boxShadow: "0 4px 15px rgba(0, 255, 198, 0.4)",
        transition: "all 0.3s ease",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "800",
          marginBottom: "1.5rem",
          color: "#00FFC6",
        }}
      >
        Work Experience
      </h2>

      {/* Experience Entry 1 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "1rem",
          background: "#222222",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 255, 198, 0.1)",
        }}
      >
        <h3 style={{ fontSize: "1.8rem", fontWeight: "600" }}>
          Software Developer | Chetu Inc.
        </h3>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "400",
            color: "#00FFC6",
            marginBottom: "1rem",
          }}
        >
          Greater Noida, India | Remote | June 2019 – Present
        </p>
        <ul
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginTop: "0.8rem",
          }}
        >
          <li>
            Developed and optimized a Property Management SaaS platform using
            Node.js and React, improving leasing process efficiency and
            increasing user engagement by 25%.
          </li>
          <li>
            Integrated third-party APIs like Stripe and TazWorks, automating
            processes and reducing manual work by 40%.
          </li>
          <li>
            Led the development of a real-time PDF editor in React, improving
            admin productivity by 30%.
          </li>
        </ul>
      </div>

      {/* Experience Entry 2 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "1rem",
          background: "#222222",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 255, 198, 0.1)",
          marginTop: "2rem",
        }}
      >
        <h3 style={{ fontSize: "1.8rem", fontWeight: "600" }}>
          TA Intern | Coding Ninjas
        </h3>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "400",
            color: "#00FFC6",
            marginBottom: "1rem",
          }}
        >
          Remote | October 2021 – May 2022
        </p>
        <ul
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginTop: "0.8rem",
          }}
        >
          <li>
            Mentored 2000+ students in Data Structures and Algorithms, improving
            coding proficiency.
          </li>
          <li>
            Conducted coding sessions that increased assignment completion rates
            by 15%.
          </li>
          <li>
            Developed hands-on coding exercises to enhance student learning
            outcomes.
          </li>
        </ul>
      </div>

      {/* Experience Entry 3 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "1rem",
          background: "#222222",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 255, 198, 0.1)",
          marginTop: "2rem",
        }}
      >
        <h3 style={{ fontSize: "1.8rem", fontWeight: "600" }}>
          Assistant System Engineer | TCS iON
        </h3>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "400",
            color: "#00FFC6",
            marginBottom: "1rem",
          }}
        >
          Remote | July 2019 – September 2021
        </p>
        <ul
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginTop: "0.8rem",
          }}
        >
          <li>
            Enhanced core features of the Digital Learning platform using
            Node.js and React, improving platform performance by 20%.
          </li>
          <li>
            Automated user notifications, reducing manual interventions by 35%.
          </li>
          <li>
            Migrated legacy systems to modern UI frameworks, increasing user
            satisfaction by 25%.
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default WorkExperience;
