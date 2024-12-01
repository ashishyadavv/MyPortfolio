"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaCogs,
  FaGithub,
} from "react-icons/fa"; // Tech icons
import { SiMongodb, SiCplusplus, SiRedux, SiJavascript } from "react-icons/si";
import Image from "next/image";
import Footer from "./Footer";

export default function Skills() {
  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.9))",
          color: "#ffffff",
          padding: "3rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Section Title */}
        {/* <h2
        style={{
          fontSize: "2.8rem",
          fontWeight: "600",
          marginBottom: "1.5rem",
          textTransform: "uppercase",
          color: "#00FFC6",
          letterSpacing: "0.1rem",
        }}
      >
        Technical Skills
      </h2> */}

        {/* Skills List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            justifyContent: "center",
            width: "80%",
            maxWidth: "1200px",
          }}
        >
          {/* Languages */}
          <div
            style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2rem",
                borderRadius: "15px",
                color: "#EAEAEA",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                width: "150px",
              }}
            >
              <SiCplusplus size={50} color="#00599C" />
              <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>C++</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2rem",
                borderRadius: "15px",
                color: "#EAEAEA",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                width: "150px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  // backgroundColor: "
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/java_image.webp"
                  alt="Java Icon"
                  width={60}
                  height={50}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: "1.2rem",
                  // marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                Java
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2rem",
                borderRadius: "15px",
                color: "#EAEAEA",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                width: "150px",
              }}
            >
              <SiJavascript size={50} color="#F7DF1E" /> {/* JavaScript Icon */}
              <p
                style={{
                  fontSize: "1.2rem",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                JavaScript
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2rem",
                borderRadius: "15px",
                color: "#EAEAEA",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                width: "150px",
              }}
            >
              <FaCogs size={50} color="#F7B731" />{" "}
              {/* Using gears icon to represent algorithms */}
              <p
                style={{
                  fontSize: "1.2rem",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                DSA
              </p>
            </motion.div>
          </div>

          {/* Frontend Technologies */}
          <div
            style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2rem",
                borderRadius: "15px",
                color: "#EAEAEA",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                width: "150px",
              }}
            >
              <FaReact size={50} color="#61DBFB" />
              <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>React.js</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2rem",
                borderRadius: "15px",
                color: "#EAEAEA",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                width: "150px",
              }}
            >
              <SiRedux size={50} color="#764ABC" />
              <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>Redux</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2rem",
                borderRadius: "15px",
                color: "#EAEAEA",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                width: "150px",
              }}
            >
              <FaHtml5 size={50} color="#F16529" />
              <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>HTML5</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2rem",
                borderRadius: "15px",
                color: "#EAEAEA",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                width: "150px",
              }}
            >
              <FaCss3Alt size={50} color="#2965F1" />
              <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>CSS3</p>
            </motion.div>
          </div>

          {/* Backend Technologies */}
          <div
            style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2rem",
                borderRadius: "15px",
                color: "#EAEAEA",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                width: "150px",
              }}
            >
              <FaNodeJs size={50} color="#68A063" />
              <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>Node.js</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2rem",
                borderRadius: "15px",
                color: "#EAEAEA",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                width: "150px",
              }}
            >
              <SiMongodb size={50} color="#47A248" />
              <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>MongoDB</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2rem",
                borderRadius: "15px",
                color: "#EAEAEA",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                width: "150px",
              }}
            >
              <FaDatabase size={50} color="#47A048" />
              <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>MySQL</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.7)",
                padding: "2rem",
                borderRadius: "15px",
                color: "#EAEAEA",
                boxShadow: "0 0 15px rgba(0, 255, 198, 0.4)",
                width: "150px",
              }}
            >
              <FaGithub size={50} color="#F1502F" /> {/* Git Icon */}
              <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>Git</p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
