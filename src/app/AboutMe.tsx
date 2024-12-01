"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaMusic, FaCogs, FaCoffee } from "react-icons/fa";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Skills from "./Skills";

export default function AboutMe() {
  const [currentSection, setCurrentSection] = useState("about");

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

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
      {/* Navigation Buttons for Sections */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginBottom: "2rem",
          justifyContent: "center",
        }}
      >
        <motion.button
          onClick={() => handleSectionChange("about")}
          style={{
            background: currentSection === "about" ? "#00FFC6" : "transparent",
            color: currentSection === "about" ? "#000" : "#fff",
            padding: "1rem 2rem",
            borderRadius: "30px",
            fontSize: "1.2rem",
            fontWeight: "600",
            border: "2px solid #00FFC6",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          About Me
        </motion.button>
        <motion.button
          onClick={() => handleSectionChange("work")}
          style={{
            background: currentSection === "work" ? "#00FFC6" : "transparent",
            color: currentSection === "work" ? "#000" : "#fff",
            padding: "1rem 2rem",
            borderRadius: "30px",
            fontSize: "1.2rem",
            fontWeight: "600",
            border: "2px solid #00FFC6",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Work Experience
        </motion.button>
        <motion.button
          onClick={() => handleSectionChange("projects")}
          style={{
            background:
              currentSection === "projects" ? "#00FFC6" : "transparent",
            color: currentSection === "projects" ? "#000" : "#fff",
            padding: "1rem 2rem",
            borderRadius: "30px",
            fontSize: "1.2rem",
            fontWeight: "600",
            border: "2px solid #00FFC6",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Projects
        </motion.button>
        <motion.button
          onClick={() => handleSectionChange("skills")}
          style={{
            background: currentSection === "skills" ? "#00FFC6" : "transparent",
            color: currentSection === "skills" ? "#000" : "#fff",
            padding: "1rem 2rem",
            borderRadius: "30px",
            fontSize: "1.2rem",
            fontWeight: "600",
            border: "2px solid #00FFC6",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Skills
        </motion.button>
      </div>
      {/* Sections Rendering */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: currentSection === "about" ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{
          display: currentSection === "about" ? "block" : "none",
          width: "80%",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
            color: "#00FFC6",
            letterSpacing: "0.1rem",
            textAlign: "center",
            textShadow: "2px 2px 10px rgba(0, 255, 198, 0.6)",
          }}
        >
          About Me
        </h2>
        <div
          style={{
            width: "100%",
            padding: "2rem",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "15px",
            color: "#EAEAEA",
            boxShadow: "0 4px 15px rgba(0, 255, 198, 0.4)",
            transition: "all 0.3s ease",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.8",
              marginBottom: "1.5rem",
              color: "#EAEAEA",
            }}
          >
            I’m{" "}
            <span
              style={{
                color: "#00FFC6",
                fontWeight: "700",
                textShadow: "0 0 5px rgba(0, 255, 198, 0.8)",
              }}
            >
              Ashish Yadav
            </span>
            , a skilled Full-Stack Developer with 3 years of experience building
            high-quality web applications. I specialize in frontend technologies
            like{" "}
            <span style={{ color: "#00FFC6", fontWeight: "700" }}>
              React.js
            </span>{" "}
            and backend technologies like{" "}
            <span style={{ color: "#00FFC6", fontWeight: "700" }}>Node.js</span>
            , with expertise in creating smooth user experiences and strong
            server functionality.
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.8",
              marginBottom: "1.5rem",
              color: "#EAEAEA",
            }}
          >
            I’m passionate about using technology to improve efficiency and
            excited to work on projects that make a real impact while growing my
            expertise.
          </p>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            {/* Coding, Coffee, and Music Icons */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "120px",
                height: "120px",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                borderRadius: "50%",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                padding: "1rem",
                cursor: "pointer",
              }}
            >
              <FaCogs size={40} color="#00FFC6" />
              <p
                style={{
                  fontSize: "1rem",
                  marginTop: "0.5rem",
                  color: "#EAEAEA",
                }}
              >
                Coding
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "120px",
                height: "120px",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                borderRadius: "50%",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                padding: "1rem",
                cursor: "pointer",
              }}
            >
              <FaCoffee size={40} color="#00FFC6" />
              <p
                style={{
                  fontSize: "1rem",
                  marginTop: "0.5rem",
                  color: "#EAEAEA",
                }}
              >
                Coffee
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "120px",
                height: "120px",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                borderRadius: "50%",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                padding: "1rem",
                cursor: "pointer",
              }}
            >
              <FaMusic size={40} color="#00FFC6" />
              <p
                style={{
                  fontSize: "1rem",
                  marginTop: "0.5rem",
                  color: "#EAEAEA",
                }}
              >
                Music
              </p>
            </motion.div>
          </div>

          {/* Resume Button */}
          <motion.a
            href="/Ashish_yadav_sde.pdf"
            download
            style={{
              background: "linear-gradient(90deg, #00FFC6 0%, #0077FF 100%)",
              color: "#fff",
              padding: "1rem 2rem",
              borderRadius: "30px",
              fontSize: "1.2rem",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 15px rgba(0, 255, 198, 0.4)",
              transition: "all 0.3s ease",
              margin: "2rem auto 0",
              width: "fit-content",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaDownload style={{ marginRight: "10px" }} size={20} />
            Resume
          </motion.a>
        </div>
      </motion.div>
      {/* Work Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: currentSection === "work" ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{
          display: currentSection === "work" ? "block" : "none",
        }}
      >
        <WorkExperience />
      </motion.div>
      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: currentSection === "projects" ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{
          display: currentSection === "projects" ? "block" : "none",
        }}
      >
        <Projects />
      </motion.div>
      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: currentSection === "skills" ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{
          display: currentSection === "skills" ? "block" : "none",
        }}
      >
        <Skills />
      </motion.div>
    </section>
  );
}
