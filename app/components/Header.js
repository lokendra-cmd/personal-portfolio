import { motion } from "framer-motion";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
});

const Header = ({ scrollToSection, activeSection }) => {
  return (
    <nav className="navbar ">
      <ul className={`${ubuntu.className}`}>
        {["profile", "about", "skills", "projects", "education", "contacts"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={activeSection === section ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
