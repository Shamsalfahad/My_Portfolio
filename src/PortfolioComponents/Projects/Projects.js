import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./projects.css";
import ProjectCover1 from "../../projects1-banner.png";
import ProjectCover2 from "../../tour-cover.png";
import { Link } from "react-router-dom";
const Projects = () => {
    return (
        <div className="theProjects mb-5">
            <Container>
                <Row md={12}>
                    <div className="projects-title-head" data-aos="fade-right">
                        <h1
                            className="project-title text-center text-nowrap"
                            // style={{ marginTop: "100px" }}
                        >
                            My Projects
                        </h1>
                    </div>
                    <Col lg={6} className="mt-5">
                        <h1>1.</h1>
                        <div
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >
                            <img
                                src={ProjectCover1}
                                className="img-fluid"
                            ></img>
                        </div>
                    </Col>
                    <Col lg={6} className="projects-details mt-5">
                        <div
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                        >
                            <h2 className="text-center mt-3">Health Center</h2>
                            <p className="lead">
                                A single page Health Center app where people are
                                able to buy there desirable bike and can
                                checkout with their information . There are also
                                i implement firebase authentication(Email,
                                Password login & Registration) method.All the functionality are correct and
                                optimized.
                            </p>
                            <div className="projects-icons">
                                <a href="https://github.com/Shamsalfahad/Health_Center">
                                    <i className="fab fa-github project-icon"></i>
                                </a>
                                <a href="https://gym-trainer-bcca5.web.app/">
                                    <i class="fas fa-satellite-dish project-icon"></i>
                                </a>
                            </div>
                            <Link to="/project2">
                                <Button
                                    variant="outline-primary"
                                    className="mt-4 mb-4"
                                >
                                    See Details
                                </Button>{" "}
                            </Link>
                        </div>
                    </Col>

                    <Col lg={6} className="mt-5">
                        <h1>2.</h1>
                        <div
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >
                            <img
                                src={ProjectCover2}
                                className="img-fluid"
                            ></img>
                        </div>
                    </Col>
                    <Col lg={6} className="projects-details mt-5">
                        <div
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                        >
                            <h2 className="text-center mt-3">Cologne Gallery</h2>
                            <p className="lead">
                            • Authentication system implement by Firebase email password. <br />
                            • Email Password authentication.<br />
                            • Can add products.<br />
                            • Can delete products.<br />
                            • You can register and then you can login yourself.<br />
                            • Also has JWT.

                            </p>
                            <div className="projects-icons">
                                <a href="https://github.com/Shamsalfahad/-warehouse-management-client-side">
                                    <i className="fab fa-github project-icon"></i>
                                </a>
                                <a href="https://assignment-11-node-mongo-4a404.web.app//">
                                    <i class="fas fa-satellite-dish project-icon"></i>
                                </a>
                                <a href="https://github.com/Shamsalfahad/warehouse-management-server">
                                    <i class="fas fa-server project-icon"></i>
                                </a>
                            </div>
                            <Link to="/project1">
                                <Button
                                    variant="outline-primary"
                                    className="mt-4 mb-4"
                                >
                                    See Details
                                </Button>{" "}
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;
