import { useEffect } from "react";
import { workWelcomeAnimation } from "./Work-gsap";

const Work = () => {
    useEffect(() => {
        workWelcomeAnimation();
    }, []);

    const showText = (e) => {
        const allBoxes = document.querySelectorAll(".portfolio-box");
        const box = e.currentTarget;
        const links = box.querySelectorAll("a");
        const minibox = box.querySelector(".portfolio-minibox");
        const txt = box.querySelector(".portfolio-txt");
        const title = box.querySelector(".portfolio-title h3");

        if (window.getComputedStyle(txt).opacity === "1") {
            txt.style.opacity = "0";
            title.style.color = "black";
            title.style.textShadow =
                "2px 2px 2px rgba(255, 255, 255, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.8), 1px -1px 2px rgba(255, 255, 255, 0.8), -1px 1px 2px rgba(255, 255, 255, 0.8)";
            minibox.style.backgroundColor = "transparent";
            links.forEach((l) => {
                l.classList.add("non-clickable");
            });
        } else {
            txt.style.opacity = "1";
            title.style.color = "white";
            title.style.textShadow = "none";
            minibox.style.backgroundColor = "rgba(57, 57, 57, 0.8)";
            links.forEach((l) => {
                l.classList.remove("non-clickable");
            });
            allBoxes.forEach((b) => {
                if (b !== box) {
                    b.querySelector(".portfolio-txt").style.opacity = "0";
                    b.querySelector(".portfolio-title h3").style.color =
                        "black";
                    b.querySelector(".portfolio-title h3").style.textShadow =
                        "2px 2px 2px rgba(255, 255, 255, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.8), 1px -1px 2px rgba(255, 255, 255, 0.8), -1px 1px 2px rgba(255, 255, 255, 0.8)";
                    b.querySelector(
                        ".portfolio-minibox"
                    ).style.backgroundColor = "transparent";
                    b.querySelectorAll("a").forEach((l) => {
                        l.classList.add("non-clickable");
                    });
                }
            });
        }
    };

    return (
        <div className="work text-white text-center w-full px-6">
            <header>
                <h1 className="text-3xl">Alex Basurto</h1>
                <h2>Full Stack Web Developer</h2>
            </header>
            <main>
                <article
                    className="portfolio-box"
                    id="box-1"
                    onClick={showText}
                >
                    <div className="portfolio-img">
                        <img src="/me2.jpg" alt="Alex Basurto" />
                    </div>
                    <div className="portfolio-minibox">
                        <div className="portfolio-title">
                            <h3>About Me</h3>
                        </div>
                        <div className="portfolio-txt">
                            <p>
                                With several years of experience in the IT field
                                and a recent specialisation in full stack web
                                development, I am ready to take my career to new
                                heights.
                            </p>
                            <p>
                                My journey in technology, complemented
                                by my enthusiasm for nature and sport,
                                underlines my commitment to continuous learning
                                and professional and personal development.
                            </p>
                        </div>
                    </div>
                </article>

                <article
                    className="portfolio-box"
                    id="box-2"
                    onClick={showText}
                >
                    <div className="portfolio-img">
                        <img src="/stairs.jpg" alt="Escaleras" />
                    </div>
                    <div className="portfolio-minibox">
                        <div className="portfolio-title">
                            <h3>My Career</h3>
                        </div>
                        <div className="portfolio-txt">
                            <p>
                                My diverse experience spans roles as a systems
                                and network technician, culminating in a
                                position as an IT manager within a corporate
                                group.
                            </p>
                            <p>
                                In this role, I focused on ERP
                                management, e-commerce, and digital
                                transformation.
                            </p>
                            <p>
                                Currently, I am shifting my
                                focus to web development, an area that deeply
                                motivates me.
                            </p>
                        </div>
                    </div>
                </article>

                <article
                    className="portfolio-box"
                    id="box-3"
                    onClick={showText}
                >
                    <div className="portfolio-img">
                        <img src="/skills.jpg" alt="Ordenador portátil" />
                    </div>
                    <div className="portfolio-minibox">
                        <div className="portfolio-title">
                            <h3>My Skills</h3>
                        </div>
                        <div className="portfolio-txt">
                            <p>
                                <strong>Tech Skills</strong>
                            </p>
                            <p>
                                <span>WEB DEV:</span>
                                React, NodeJS, ExpressJS, JavaScript, HTML, CSS, Docker, Git
                                <span>DATABASES:</span>
                                MySQL, PostgreSQL, MongoDB, MS SQL Server
                                <span>OTHERS:</span>
                                <p>
                                    Python, VisualBasic
                                </p>
                                <p>
                                    Enthusiast of Linux and Bash
                                </p>
                            </p>
                            <p id="soft-skills">
                                <strong>Soft Skills</strong>
                            </p>
                            <p>
                                I bring a suite of soft skills crucial in
                                today{"'"}s professional environment, including a
                                strong work methodology, pragmatism, effective
                                communication, and leadership.
                            </p>
                        </div>
                    </div>
                </article>

                <article
                    className="portfolio-box"
                    id="box-4"
                    onClick={showText}
                >
                    <div className="portfolio-img">
                        <img
                            src="/github-linkedin.png"
                            alt="Logotipos de GitHub y LinkedIn"
                        />
                    </div>
                    <div className="portfolio-minibox">
                        <div className="portfolio-title">
                            <h3>Contact and projects</h3>
                        </div>
                        <div className="portfolio-txt">
                            <p>
                                Contact with me on{" "}
                                <a
                                    href="https://www.linkedin.com/in/alex-basurto/"
                                    className=" non-clickable"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </p>
                            <p>
                                Explore my projects on{" "}
                                <a
                                    href="https://github.com/alexBasurto/"
                                    className=" non-clickable"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </p>
                        </div>
                    </div>
                </article>
            </main>
            <footer>
                <p>Made with React and ThreeJS</p>
            </footer>
        </div>
    );
};

export default Work;
