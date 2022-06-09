import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typical from "react-typical";
import "./home.css";
import MyImage from "../../profile-pic.png";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <div className="profile-container" id="home">
                <Container className="intro-row">
                    <Row style={{ marginTop: "105px" }}>
                        <Col className="intro-col">
                            <div className="profile-col-icons">
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

                                <a
                                    href="https://github.com/Shamsalfahad"
                                    className="icons"
                                >
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>

                            <div className="profile-details-name">
                                <span className="primary-text">
                                    Hello, I'M{" "}
                                    <span className="highlighted-text">
                                        Shams Al Fahad
                                    </span>
                                </span>
                            </div>

                            <div className="profile-details-role">
                                <span className="primary-text">
                                    <h1>
                                        <Typical
                                            loop={Infinity}
                                            steps={[
                                                "React.js Developer",
                                                1000,
                                                "Node.js Developer",
                                                1000,
                                                "Jr. Front-End Developer",
                                                1000,
                                                "Auth Firebase",
                                                1000,
                                            ]}
                                        />
                                    </h1>
                                    <div data-aos="fade-right">
                                        <span className="profile-role-tagline lead">
                                            Ability to create apps  
                                        
                                        </span>
                                    </div>
                                </span>
                            </div>

                            <div className="profile-options mt-5">
                                <a href="#footer" className="pdf">
                                    <Link to="/contact">
                                        <button
                                            type="button"
                                            className="me-4 hire-btn fw-bold"
                                            data-aos="fade-right"
                                        >
                                            Hire Me
                                        </button>
                                    </Link>
                                </a>

                                <a href="https://drive.google.com/file/d/1u2VMC7gjzYEMGnYRjIqemc_pF0CRnMTt/view?usp=sharing">
                                    <button
                                        type="button"
                                        className="resume-btn fw-bold text-nowrap"
                                        data-aos="fade-left"
                                        // download=""
                                    >
                                        Get Resume
                                    </button>
                                </a>
                            </div>
                        </Col>

                        <Col className="col-2 order-0" data-aos="zoom-in">
                            <img src={MyImage} className="img-myself" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="svg"
            >
                <path
                    fill="#ee481f"
                    fill-opacity="1"
                    d="M0,192L60,181.3C120,171,240,149,360,165.3C480,181,600,235,720,261.3C840,288,960,288,1080,250.7C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg>
            {/* <Biography></Biography> */}
            {/* <Footer></Footer> */}
        </>
    );
};

export default Home;
