const Work = () => {

    const showText = (e) => {
        const allBoxes = document.querySelectorAll(".portfolio-box");
        const box = e.currentTarget;
        const minibox = box.querySelector(".portfolio-minibox");
        const txt = box.querySelector(".portfolio-txt");
        const title = box.querySelector(".portfolio-title h3");
    
        if (window.getComputedStyle(txt).opacity === "1") {
            txt.style.opacity = "0";
            title.style.color = "black";
            title.style.textShadow = '2px 2px 2px rgba(255, 255, 255, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.8), 1px -1px 2px rgba(255, 255, 255, 0.8), -1px 1px 2px rgba(255, 255, 255, 0.8)';
            minibox.style.backgroundColor = "transparent";
        } else {
            txt.style.opacity = "1";
            title.style.color = "white";
            title.style.textShadow = "none";
            minibox.style.backgroundColor = "rgba(57, 57, 57, 0.8)";
            allBoxes.forEach((b) => {
                if (b !== box) {
                    b.querySelector(".portfolio-txt").style.opacity = "0";
                    b.querySelector(".portfolio-title h3").style.color = "black";
                    b.querySelector(".portfolio-title h3").style.textShadow = '2px 2px 2px rgba(255, 255, 255, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.8), 1px -1px 2px rgba(255, 255, 255, 0.8), -1px 1px 2px rgba(255, 255, 255, 0.8)';
                    b.querySelector(".portfolio-minibox").style.backgroundColor = "transparent";
                    
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
                <article className="portfolio-box" id="box-1" onClick={showText}>
                    <div className="portfolio-img">
                        <img src="/me2.jpg" alt="Alex Basurto" />
                    </div>
                    <div className="portfolio-minibox">
                        <div className="portfolio-title">
                            <h3>Introducing myself</h3>
                        </div>
                        <div className="portfolio-txt">
                            <p>
                                I am a Full Stack Web Developer with experience
                                in JavaScript, React, Node.js, Express.js,
                                MongoDB, and more. I am a self-taught developer,
                                and I am always learning new technologies and
                                improving my skills.
                            </p>
                        </div>
                    </div>
                </article>

                <article className="portfolio-box" id="box-2" onClick={showText}>
                    <div className="portfolio-img">
                        <img src="/stairs.jpg" alt="Escaleras" />
                    </div>
                    <div className="portfolio-minibox">
                        <div className="portfolio-title">
                            <h3>My career</h3>
                        </div>
                        <div className="portfolio-txt">
                            <p>
                                I have a Bachelors Degree in Computer Science. I
                                have worked as a Software Developer for 2 years,
                                and I have been working as a Full Stack Web
                                Developer for 1 year.
                            </p>
                        </div>
                    </div>
                </article>

                <article className="portfolio-box"  id="box-3" onClick={showText}>
                    <div className="portfolio-img">
                        <img src="/skills.jpg" alt="Ordenador portátil" />
                    </div>
                    <div className="portfolio-minibox">
                        <div className="portfolio-title">
                            <h3>My skills</h3>
                        </div>
                        <div className="portfolio-txt">
                            <p>
                                I have experience in JavaScript, React, Node.js,
                                Express.js, MongoDB, HTML, CSS, Git, GitHub, and
                                more.
                            </p>
                        </div>
                    </div>
                </article>

                <article className="portfolio-box"  id="box-4" onClick={showText}>
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
                                Contact me at{" "}
                                <a href="https://www.linkedin.com/in/alex-basurto/">
                                    LinkedIn
                                </a>
                            </p>
                            <p>
                                Check my work at{" "}
                                <a href="https://github.com/alexBasurto/">
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
