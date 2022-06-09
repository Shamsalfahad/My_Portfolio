import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./mySelf.css";
const MySelf = () => {
    return (
        <div className="mb-5">
            <h1 className="text-center my-title mt-5" data-aos="flip-right">
                BIOGRAPHY
            </h1>
            <Container>
                <Row className="myself-row">
                    <Col>
                        <h3
                            className="text-center personal-title"
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                        >
                            PERSONAL INFOS
                        </h3>
                        <Container>
                            <Row>
                                <Col>
                                    <p>
                                        <span className="some">Name:</span>{" "}
                                        <span className="texts">Shams Al </span>
                                    </p>
                                    <p>
                                        <span className="some">Age:</span>{" "}
                                        <span className="texts">22 Years</span>
                                    </p>

                                    <p>
                                        <span className="some">Telegram:</span>{" "}
                                        <span className="texts">Available</span>
                                    </p>

                                    <p>
                                        <span className="some">Phone:</span>{" "}
                                        <span className="texts">
                                            (+88) 01746417181
                                        </span>
                                    </p>
                                </Col>
                                <Col>
                                    <p>
                                        <span className="some">Last Name:</span>{" "}
                                        <span className="texts">Fahad</span>
                                    </p>

                                    <p>
                                        <span className="some">
                                            Nationality:
                                        </span>{" "}
                                        <span className="texts">
                                            Bangladeshi
                                        </span>
                                    </p>

                                    <p>
                                        <span className="some">Address:</span>{" "}
                                        <span className="texts">
                                        House:17,Faidabad Transformer,
  Ganakabarstan Road, Dakshin Khan, Dhaka 1230

                                        </span>
                                    </p>

                                    <p>
                                        <span className="some">Email:</span>{" "}
                                        <span className="texts">
                                            Shamsalfahad3@gmail.com
                                        </span>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col
                        className="second-col"
                        style={{
                            marginTop: "100px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Container className="mb-5">
                            <Row>
                                <Col>
                                    <div
                                        className="experience"
                                        data-aos="flip-left"
                                    >
                                        <p className="experience-time">3+</p>
                                        <p className="experience-extension">
                                            Month of Experience
                                        </p>
                                    </div>
                                </Col>
                                <Col>
                                    <div
                                        className="experience"
                                        data-aos="flip-right"
                                    >
                                        <p className="experience-time">5+</p>
                                        <p className="experience-extension">
                                            MERN Projects
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MySelf;
