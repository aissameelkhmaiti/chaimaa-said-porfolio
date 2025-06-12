import { useRef, useState } from "react";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Wrapper from "./Wrapper";
import manImage from "../assets/rizwan.png";
import externalLinkIcon from "../assets/external-link-icon.png";
import logoIcon from "../assets/logo.png";
import { scrollTo } from "../helper";
import { useFollowPointer } from "./useFollowPointer";

const navLinks = [
  { label: "About me", section: "about" },
  { label: "Skills", section: "skills" },
  { label: "Work", section: "work" },
  { label: "Contact", section: "contact" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/muhammad-rizwann/", icon: "linkedin" },
  { href: "https://github.com/Rizwan0994/", icon: "github" },
  { href: "https://twitter.com/midstain/", icon: "twitter" },
];

const HeroBanner = () => {
  const pointerRef = useRef(null);
  const { x, y } = useFollowPointer(pointerRef);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-[#111111] overflow-hidden text-white"
    >
      {/* Background Animations */}
      <motion.span
        ref={pointerRef}
        animate={{ x, y }}
        className="hidden md:block sec-1-bg-gradient-1-desktop absolute md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
      />
      <span className="hidden md:block sec-1-bg-gradient-2-desktop absolute md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] left-[105px] md:top-[500px] 2xl:top-[672px]" />
      <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
      <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />

      <Wrapper>
        {/* Navbar responsive */}
        <motion.nav
          className="flex items-center justify-between mt-[15px] relative"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white">
              <img src={logoIcon} alt="logo" className="w-4" />
            </div>
            <span className="font-semibold">Chaimaa Said</span>
          </div>

          {/* Menu desktop */}
          <ul className="hidden md:flex 2xl:text-lg">
            {navLinks.map(({ label, section }) => (
              <li
                key={section}
                onClick={() => scrollTo(section)}
                className="cursor-pointer px-5 py-2 hover:bg-slate-900 rounded-lg transition active:scale-90"
              >
                {label}
              </li>
            ))}
          </ul>

          {/* Bouton hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            <i className="fas fa-bars" />
          </button>
        </motion.nav>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <ul className="md:hidden mt-4 space-y-3 bg-[#222] p-4 rounded-lg shadow-lg">
            {navLinks.map(({ label, section }) => (
              <li
                key={section}
                onClick={() => {
                  scrollTo(section);
                  setMenuOpen(false); // Ferme le menu après clic
                }}
                className="cursor-pointer px-4 py-2 hover:bg-slate-800 rounded transition"
              >
                {label}
              </li>
            ))}
          </ul>
        )}

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-8 px-4 h-[calc(100vh-100px)] max-w-7xl mx-auto">
          {/* Text Block */}
          <motion.div
            className="flex-1 flex flex-col justify-center text-left"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-7xl font-oswald uppercase leading-tight">
              I Am A Software <br /> Engineer
            </h1>
          </motion.div>

          {/* Profile + Button */}
          <motion.div
            className="flex-1 flex flex-col justify-center items-center relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={manImage} alt="Profile" className="w-[250px] md:w-[350px]" />
            <button
              onClick={() => scrollTo("contact")}
              className="mt-6 w-[120px] h-[120px] rounded-full bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center gap-2 text-black font-semibold transition-transform hover:scale-105 active:scale-95"
            >
              <img src={externalLinkIcon} alt="External Link" className="w-[15px]" />
              Hire Me
            </button>
          </motion.div>
        </div>
      </Wrapper>

      {/* Social Icons */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col items-end space-y-4">
        {socialLinks.map(({ href, icon }) => (
          <a
            key={icon}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon}
            className="text-white text-xl hover:text-blue-400 transition"
          >
            <i className={`fab fa-${icon}`} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
