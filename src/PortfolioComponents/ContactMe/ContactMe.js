import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./contact.css";
const ContactMe = () => {
    return (
        <div className="contact-me">
            <div className="contact-title-div">
                <h1
                    className="contact-tile"
                    style={{
                        marginTop: "100px",
                        borderBottom: "3px solid green",
                        padding: "10px",
                    }}
                >
                    GET IN{" "}
                    <span
                        style={{
                            color: "green",
                        }}
                    >
                        TOUCH
                    </span>
                </h1>
            </div>

            <Container>
                <Row className="contact-row">
                    <Col>
                        <Footer></Footer>
                    </Col>
                    <Col className="contact-address">
                        <div style={{ marginTop: "100px" }}>
                            <i
                                className="fa fa-map position-absolute map me-4"
                                style={{ color: "#ee481f" }}
                            ></i>
                            <span className="ms-5 address-title">
                                Address Point
                            </span>
                            <p
                                style={{
                                    marginTop: "10px",
                                    fontSize: "1.3rem",
                                }}
                            >
                                House:17,Faidabad Transformer,
  Ganakabarstan Road, Dakshin Khan, Dhaka 1230

                            </p>
                            <p
                                style={{
                                    marginTop: "10px",
                                    fontSize: "1.3rem",
                                }}
                            >
                                Bangladesh
                            </p>
                        </div>

                        <div
                            style={{ marginTop: "10px", marginBottom: "30px" }}
                        >
                            <i
                                className="fas fa-mobile-alt map me-3"
                                style={{ color: "#ee481f" }}
                            ></i>

                            <span className="address-title">
                                (+88) 01746417181
                            </span>
                        </div>
                        <div className="profile-col-icons3">
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactMe;
