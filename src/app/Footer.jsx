"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.8))",
        color: "#EAEAEA",
        padding: "2rem 1.5rem",
        textAlign: "center",
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
          opacity: 0.05,
          zIndex: -1,
        }}
      ></div>

      {/* Footer Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <h3
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            color: "#00FFC6",
            textTransform: "uppercase",
            letterSpacing: "0.1rem",
          }}
        >
          Stay Connected
        </h3>

        {/* Social Icons */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          <a
            href="https://github.com/ashishyadavv"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "2rem",
              color: "#EAEAEA",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00FFC6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#EAEAEA")}
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/ashishyadavv"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "2rem",
              color: "#EAEAEA",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00FFC6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#EAEAEA")}
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:ashish.yadav2021@gmail.com"
            style={{
              fontSize: "2rem",
              color: "#EAEAEA",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00FFC6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#EAEAEA")}
          >
            <FaEnvelope />
          </a>

          <a
            href="tel:+12345678901"
            style={{
              fontSize: "2rem",
              color: "#EAEAEA",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00FFC6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#EAEAEA")}
          >
            <FaPhoneAlt />
          </a>
        </div>

        {/* Contact Info */}
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#B0B0B0",
          }}
        >
          © {new Date().getFullYear()} Ashish Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
