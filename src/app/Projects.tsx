"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.9))",
        color: "#ffffff",
        padding: "3rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "url('/background-pattern.png') repeat center center",
          opacity: 0.1,
          zIndex: -1,
        }}
      ></div>

      {/* Section Title */}
      <h2
        style={{
          fontSize: "2.8rem",
          fontWeight: "600",
          marginBottom: "1.5rem",
          textTransform: "uppercase",
          color: "#00FFC6",
          letterSpacing: "0.1rem",
        }}
      >
        Projects
      </h2>

      {/* Projects List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "80%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            padding: "2rem",
            borderRadius: "15px",
            color: "#EAEAEA",
            boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
            transition: "all 0.3s ease",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "#00FFC6",
            }}
          >
            Property Management SaaS Platform | Node.js, React.js, Stripe,
            TazWorks
          </h3>
          <ul
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              marginTop: "0.8rem",
              color: "#EAEAEA",
              paddingLeft: "1.5rem", // Indent bullets
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              Developed and optimized a comprehensive Property Management SaaS
              platform, improving leasing process efficiency and increasing user
              engagement by <strong>25%</strong>.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Integrated third-party APIs like <strong>Stripe</strong> and{" "}
              <strong>TazWorks</strong> for secure payment processing and
              background checks, reducing manual work by <strong>40%</strong>.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Led the development of a real-time <strong>PDF editor</strong> in
              React, improving admin productivity by <strong>30%</strong>{" "}
              through enhanced document management features.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Collaborated with cross-functional teams to deliver high-quality,
              scalable solutions, reducing deployment time by{" "}
              <strong>20%</strong>.
            </li>
          </ul>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            padding: "2rem",
            borderRadius: "15px",
            color: "#EAEAEA",
            boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
            transition: "all 0.3s ease",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "#00FFC6",
            }}
          >
            Digital Learning Platform Enhancement | Node.js, React.js
          </h3>
          <ul
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              marginTop: "0.8rem",
              color: "#EAEAEA",
              paddingLeft: "1.5rem",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              Developed and maintained core features of{" "}
              <strong>TCS iON’s Digital Learning platform</strong>, improving
              platform stability and performance by <strong>20%</strong>.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Automated user notification processes, reducing manual
              intervention by <strong>35%</strong> and increasing response times
              for security alerts.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Migrated legacy systems to modern UI frameworks, leading to a{" "}
              <strong>25%</strong> increase in user satisfaction and a smoother
              user experience.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
