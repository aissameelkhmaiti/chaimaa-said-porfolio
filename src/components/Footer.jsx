import React from "react";
import Wrapper from "./Wrapper";
import gmailIcon from "../assets/email-icon.png";
import { scrollTo } from "../helper";

// Import icons (tu peux les mettre dans ton dossier assets ou utiliser une librairie comme react-icons)
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#F2F2F2]">
            <Wrapper>
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 border-t border-[#CCCCCC] py-10 text-[#111111]">
                    {/* Email */}
                    <div className="flex items-center gap-2">
                        <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
                            <img src={gmailIcon} alt="Email" className="w-[18px]" />
                        </div>
                        <span>chaimaasaid.it@gmail.com
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex gap-5 md:gap-8 text-sm md:text-base">
                        <li
                            className="cursor-pointer transition hover:text-blue-600"
                            onClick={() => scrollTo("about")}
                        >
                            About me
                        </li>
                        <li
                            className="cursor-pointer transition hover:text-blue-600"
                            onClick={() => scrollTo("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="cursor-pointer transition hover:text-blue-600"
                            onClick={() => scrollTo("work")}
                        >
                            Work
                        </li>
                        <li
                            className="cursor-pointer transition hover:text-blue-600"
                            onClick={() => scrollTo("contact")}
                        >
                            Contact
                        </li>
                    </ul>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-xl text-[#252525]">
                        <a
                            href="https://www.linkedin.com/in/ChaimaaSaid"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-700 transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/Chaimaa-SAID"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-700 transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.instagram.com/chaimaa_said__/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-600 transition"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </Wrapper>
        </footer>
    );
};

export default Footer;
