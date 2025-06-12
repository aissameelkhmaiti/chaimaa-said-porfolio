import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import Div from "./Div";
import profilePic from "../assets/chaimaa.jpg"; // Remplace par le bon chemin
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });

  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />

      <Wrapper>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* LEFT TEXT SIDE */}
          <div className="flex-1">
            <Div className="text-[40px] md:text-[60px] font-oswald uppercase mb-10">
              <span className="block text-[20px] md:text-[28px] normal-case mt-2">
                Full Stack Developer – MERN & Java/Spring
              </span>
            </Div>

            <Div className="max-w-[700px] text-[16px] md:text-[18px] leading-[28px] mb-6">
              I'm currently a 4th year engineering student in Computer Science
              and Networks at EMSI Casablanca. I'm seeking my first
              professional opportunity as a Full Stack Developer. My internships
              allowed me to build several web projects using Java/Angular and
              the MERN stack, with secure backend integration and reactive
              frontend interfaces.
            </Div>

            <Div className="max-w-[700px] text-[16px] md:text-[18px] leading-[28px] mb-6">
              I’ve worked on an e-commerce site in packaging, budget
              management tools for construction, and contributed to a high-end
              eSport experience. I’m passionate about building impactful,
              secure, and efficient web solutions.
            </Div>

            <Div className="text-[16px] md:text-[18px] leading-[28px]">
              🚀 Tech Stack: React.js, Node.js, Express, MongoDB, Spring Boot,
              MySQL, Tailwind, Angular <br />
              💼 Internships at ARK-X, Yousra Litajhiz, Hakam Gaming <br />
              📍 Based in Casablanca, Morocco
            </Div>
          </div>

          {/* RIGHT IMAGE SIDE */}
          <div className="flex-1 flex justify-center">
            <img
              src={profilePic}
              alt="Chaimaa Said profile"
              className="w-[250px] md:w-[350px] rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutMe;
