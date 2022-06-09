import React from "react";
import {
    Col,
    Container,
    OverlayTrigger,
    ProgressBar,
    Row,
    Tooltip,
    Button,
} from "react-bootstrap";
import "./about.css";
import MyImage from "../../profile-pic.png";
import Biography from "../Biography/Biography";
import MySelf from "../MySelf/MySelf";
const AboutMe = () => {
    return (
        <>
            <div className="about-me">
                <Container>
                    <Row>
                        <Col lg={6} sm={12}>
                            <img
                                src={MyImage}
                                className="about-img"
                                data-aos="zoom-in"
                            ></img>
                            <div className="profile-details-name mt-5">
                                <div data-aos="fade-right" className="my-name">
                                    <span className="primary-text">
                                        Hi, I'M{" "}
                                        <span className="highlighted-text">
                                            Shams Al Fahad
                                        </span>
                                    </span>
                                </div>
                                <div data-aos="fade-left">
                                    <p className="profile-role-tagline lead">
                                    I am Shams Al Fahad a Jr. Front-End Developer . I am looking for a front-end Job. Expertise in React.Js, Node. Js, Express. Js, MongoDB (No-SQL), CSS3,Bootstrap, Tailwind CSS, React- Bootstrap, Stripe.
Tools: VS Code, Github, Netlify, Heroku, Git bash, Npm, Firebase, Figma.

I will be pleased if you pick me :) ...


                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                        </Col>
                        <Col lg={6} sm={12} className="skills-col">
                            <Row className="skills">
                                <div data-aos="zoom-in">
                                    <h1 className="skill-title">
                                        My Skills Are
                                    </h1>
                                </div>
                                <Col
                                    lg={12}
                                    sm={12}
                                    className="mt-5 skills-all"
                                >
                                    <div data-aos="zoom-in">
                                        <span className="">HTML5</span>
                                        <ProgressBar
                                            animated
                                            now={80}
                                            label={"80%"}
                                            className="mb-2"
                                        />
                                        <span>CSS3</span>
                                        <ProgressBar
                                            animated
                                            variant="success"
                                            now={80}
                                            label={"80%"}
                                            className="mb-2"
                                        />

                                        <span>Bootstrap</span>
                                        <ProgressBar
                                            animated
                                            variant="info"
                                            now={80}
                                            label={"80%"}
                                            className="mb-2"
                                        />

                                        <span>Tailwind CSS</span>
                                        <ProgressBar
                                            animated
                                            variant="info"
                                            now={70}
                                            label={"70%"}
                                            className="mb-2"
                                        />

                                        <span>Javascript(ES6)</span>
                                        <ProgressBar
                                            animated
                                            variant="warning"
                                            now={60}
                                            label={"60%"}
                                            className="mb-2"
                                        />
                                        <span>React.js</span>
                                        <ProgressBar
                                            animated
                                            variant="danger"
                                            now={65}
                                            label={"65%"}
                                            className="mb-2"
                                        />
                                        <span>React-Bootstrap</span>
                                        <ProgressBar
                                            animated
                                            variant="primary"
                                            now={70}
                                            label={"70%"}
                                            className="mb-2"
                                        />

                                        <span>Material-UI</span>
                                        <ProgressBar
                                            animated
                                            variant="primary"
                                            now={65}
                                            label={"65%"}
                                            className="mb-2"
                                        />

                                        <span>Node/Express.js</span>
                                        <ProgressBar
                                            animated
                                            variant="success"
                                            now={50}
                                            label={"50%"}
                                            className="mb-2"
                                        />

                                        <span>Firebase</span>
                                        <ProgressBar
                                            animated
                                            variant="warning"
                                            now={60}
                                            label={"60%"}
                                            className="mb-2"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div className="profile-col-icons2">
                    <a
                        href="https://www.facebook.com/shamsalfahad"
                        className="icons"
                    >
                        <i class="fab fa-facebook-square"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/shams-al-fahad-932502241/"
                        className="icons"
                    >
                        <i class="fab fa-linkedin"></i>
                    </a>

                    <a href="https://github.com/Shamsalfahad" className="icons">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <MySelf></MySelf>
        </>
    );
};

export default AboutMe;
