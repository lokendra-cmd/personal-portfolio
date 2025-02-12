"use client"
import { useState, useRef, useEffect } from "react";
import Header from "@/app/components/Header";
import Profile from "@/app/components/Profile";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Education from "@/app/components/Education";
import Contacts from "@/app/components/Contacts";
import Experience from "./components/Experience";

export default function Home() {
  const [activeSection, setActiveSection] = useState("profile");

  const sectionsRef = {
    profile: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    education: useRef(null),
    contacts: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionsRef[section].current.scrollIntoView({ behavior: "smooth" });
  };

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update active section when it comes into view
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);

    Object.keys(sectionsRef).forEach((key) => {
      if (sectionsRef[key].current) {
        observer.observe(sectionsRef[key].current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div>
        <Header activeSection={activeSection} scrollToSection={scrollToSection} />

        <section id="profile" ref={sectionsRef.profile}>
          <Profile />
        </section>
        <section id="about" ref={sectionsRef.about}>
          <About />
        </section>
        <section id="experience" ref={sectionsRef.experience}>
         <Experience/>
        </section>

        <section id="projects" ref={sectionsRef.projects}>
          <Projects />
        </section>
        <section id="skills" ref={sectionsRef.skills}>
          <Skills />
        </section>
        <section id="education" ref={sectionsRef.education}>
          <Education />
        </section>
        <section id="contacts" ref={sectionsRef.contacts}>
          <Contacts />
        </section>
      </div>
    </>
  );
}
