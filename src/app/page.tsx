"use client";
import { useEffect, useMemo, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Slim version for lightweight particles
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Icons
import { SiLeetcode } from "react-icons/si";
import AboutMe from "./AboutMe";
import { Suspense } from "react";

export default function Home() {
  const [init, setInit] = useState(false);
  const [showAbout, setShowAbout] = useState(false); // To toggle the About Me section
  const aboutMeRef = useRef<HTMLDivElement>(null); // Reference to the About Me section

  const handleMoreAboutMe = () => {
    setShowAbout(true); // Show About Me section
    setTimeout(() => {
      aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
      // Smooth scroll to the About Me section
    }, 100); // Timeout ensures rendering completes before scrolling
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      try {
        await loadSlim(engine); // Load slim version
      } catch (error) {
        console.error("Error initializing particles engine:", error);
      }
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded:", container);
  };

  const options: ISourceOptions = useMemo(() => {
    return {
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          outModes: { default: "out" },
        },
        number: { density: { enable: true }, value: 80 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2 } },
      },
      detectRetina: true,
    };
  }, []);

  return (
    <div>
      <div
        style={{
          height: "100vh",
          position: "relative",
          backgroundColor: "#1a1a1a",
        }}
      >
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1, // Ensure particles are in the background
            }}
          />
        )}

        <header
          style={{
            position: "absolute",
            top: "50%",
            width: "100%",
            textAlign: "center",
            color: "#ffffff",
            transform: "translateY(-50%)",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "2px 2px 15px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              height: "100vh",
              background:
                "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/path-to-your-background.jpg') no-repeat center center/cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "#00FFC6",
                fontWeight: "600",
                fontSize: "1.5rem",
                letterSpacing: "0.2rem",
                marginBottom: "1.5rem",
              }}
            >
              HELLO, WORLD.
            </p>
            <h1
              style={{
                fontSize: "4.5rem",
                fontWeight: "900",
                lineHeight: "1.2",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}
            >
              I&apos;m Ashish Yadav
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                fontFamily: "'Roboto', sans-serif",
                letterSpacing: "0.15rem",
                marginBottom: "1rem",
                color: "#EAEAEA",
              }}
            >
              Full-Stack Developer | React | Node.js
            </p>

            <button
              onClick={handleMoreAboutMe}
              style={{
                border: "2px solid #00FFC6",
                padding: "0.8rem 2.5rem",
                borderRadius: "30px",
                fontSize: "1.2rem",
                fontWeight: "500",
                background: "transparent",
                color: "#ffffff",
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00FFC6";
                e.currentTarget.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              More About Me
            </button>

            <div
              style={{
                marginTop: "3rem",
                display: "flex",
                gap: "1.5rem",
                justifyContent: "center",
              }}
            >
              <a
                href="https://github.com/ashishyadavv"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #333333, #4CAF50)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2rem",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                  e.currentTarget.style.boxShadow = "0px 0px 20px #00FFC6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaGithub color="#ffffff" />
              </a>

              <a
                href="https://linkedin.com/in/ashishyadavv"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #0077B5, #00A0DC)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2rem",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                  e.currentTarget.style.boxShadow = "0px 0px 20px #00A0DC";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaLinkedin color="#ffffff" />
              </a>

              <a
                href="mailto:ashish.yadav2021@gmail.com"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #D44638, #FF6B6B)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2rem",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                  e.currentTarget.style.boxShadow = "0px 0px 20px #FF6B6B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaEnvelope color="#ffffff" />
              </a>

              <a
                href="https://leetcode.com/ashishyadavv"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #FFA116, #FFCC00)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2rem",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                  e.currentTarget.style.boxShadow = "0px 0px 20px #FFA116";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <SiLeetcode color="#ffffff" />
              </a>
            </div>
          </div>
        </header>
      </div>
      <>{console.log("getting rendered", showAbout)}</>

      {showAbout && (
        <Suspense fallback={<div>Loading About Me...</div>}>
          <div
            ref={aboutMeRef}
            style={{
              zIndex: 2, // Ensure AboutMe section appears above particles
              position: "relative",
            }}
          >
            <AboutMe />
          </div>
        </Suspense>
      )}
    </div>
  );
}
