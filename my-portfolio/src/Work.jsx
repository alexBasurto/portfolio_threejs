const Work = () => {
    return (
        <div className="work text-white text-center w-full px-6">
            <header>
                <h1 className="text-3xl">Alex Basurto</h1>
                <h2>Full Stack Web Developer</h2>
            </header>
            <main>
                <article className="portfolio-box">
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

                <article className="portfolio-box">
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

                <article className="portfolio-box">
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

                <article className="portfolio-box">
                    <div className="portfolio-img">
                        <img
                            src="/github-linkedin.png"
                            alt="Logotipos de GitHub y LinkedIn"
                        />
                    </div>
                    <div className="portfolio-minibox">
                        <div className="portfolio-title">
                            <h3>Contact and my projects</h3>
                        </div>
                        <div className="portfolio-txt">
                            <p>
                                You can contact me at{" "}
                                <a href="https://www.linkedin.com/in/alex-basurto/">
                                    LinkedIn
                                </a>
                            </p>
                            <p>
                                You can check my work at{" "}
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
