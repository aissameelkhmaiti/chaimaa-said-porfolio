import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import skjava from "../assets/java.png";
import skkotlin from "../assets/kotlin.png";
import skpython from "../assets/python.png";
import skmysql from "../assets/mysql.png";
import sknode from "../assets/node.png";
import skmongo from "../assets/mongo.png";
import skgit from "../assets/gitt.png";
import net from "../assets/net.png";
import cicd from "../assets/ci.png";
import sk1 from "../assets/sk-1.png"; // HTML
import sk5 from "../assets/sk-5.png"; // React
import sk8 from "../assets/sk-8.png"; // JS
import sk9 from "../assets/sk-9.png"; // TS
import sk10 from "../assets/sk-10.png"; // CSS
import sk11 from "../assets/sk-11.png"; // Bootstrap

import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });

    return (
        <div id="skills" className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden">
            {/* BACKGROUND ELEMENTS */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />

            <Wrapper>
                {/* SKILL ICONS */}
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                    <SkillIcon path={skjava} />
                    <SkillIcon path={skkotlin} />
                    <SkillIcon path={skpython} />
                    <SkillIcon path={skmysql} />
                    <SkillIcon path={sknode} />
                    <SkillIcon path={skmongo} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk11} />
                    <SkillIcon path={skgit} />
                    <SkillIcon path={net} />
                    <SkillIcon path={cicd} />
                    <SkillIcon path={sk1} />
                </Div>

                {/* SERVICES SECTION */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                        <Service
                            num="1"
                            title="Développement Web Full Stack"
                            desc="Création de plateformes web robustes en Java/Spring Boot et MERN. J’ai contribué à des projets e-commerce, ERP et de gestion budgétaire, avec une attention particulière sur l’expérience utilisateur et la sécurité."
                            data={[
                                "Java / Spring Boot / Spring Security",
                                "MERN (MongoDB, Express, React, Node.js)",
                                "TailwindCSS / Bootstrap",
                                "MySQL & MongoDB",
                                "Chart.js pour la visualisation des données",
                            ]}
                        />
                        <Service
                            num="2"
                            title="Développement Mobile Android"
                            desc="Développement d'applications Android pour la gestion des absences à l’EMSI avec Spring Boot côté backend. Intégration d’APIs, Firebase, géolocalisation et architecture MVVM."
                            data={[
                                "Java / Kotlin / Android Studio",
                                "Firebase (Auth, Firestore, Storage)",
                                "Google Maps API",
                                "Architecture MVVM",
                                "Spring Boot REST API",
                            ]}
                        />
                        <Service
                            num="3"
                            title="Projets académiques & collaboratifs"
                            desc="Développement d’une plateforme de streaming, projet de fin d’année EMSI. Travail en équipe agile (Scrum) et intégration d’IA avec Gemini et Firebase."
                            data={[
                                "Java / Firebase / Google Maps API",
                                "Gemini AI (LLM Integration)",
                                "SCRUM / Agile",
                                "CI/CD & GitHub",
                                "UX-First Development",
                            ]}
                        />
                        <Service
                            num="4"
                            title="Conception & Architecture Logicielle"
                            desc="Conception d’architectures claires et évolutives avec UML et Merise. Intégration des bonnes pratiques (MVC, TDD, clean code) dans tous mes projets."
                            data={[
                                "UML / Merise",
                                "Architecture MVC",
                                "JavaEE",
                                "Tests unitaires avec JUnit",
                                "Clean Code & Design Patterns",
                            ]}
                        />
                    </div>

                    {/* SECTION HEADING */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>Solving</span>
                        <span>Problems</span>
                        <span className="flex items-center gap-2">
                            Through
                            <img src={pattern} className="block md:hidden w-[80px] mt-1" />
                        </span>
                        <span className="flex items-center gap-4">
                            Smart{" "}
                            <img src={pattern} className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3" />
                        </span>
                        <span>Solutions</span>
                    </div>
                </div>

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
