import React, { useState } from "react";

import {
    Alert,
    Col,
    Container,
    FloatingLabel,
    Form,
    Row,
} from "react-bootstrap";
import "./footer.css";
import { useForm, ValidationError } from "@formspree/react";
const Footer = () => {
    const [state, handleSubmit] = useForm("meqnjjrq");
    const [InputValue, setInputValue] = useState([]);
    const handleSubmitBtn = (e) => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        if (state.succeeded) {
            alert("message sent successfully");
            // setInputValue("");
            // console.log(value, field);
        }
        setInputValue(value, field);
    };
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     e.target.reset();
    // };

    return (
        <div id="footer">
            <Container>
                <Container>
                    <Row className="main-form">
                        <Col className="order-1 contact-form">
                            <form
                                onSubmit={handleSubmit}
                                action="https://formspree.io/f/meqnjjrq"
                                className="form-controls"
                            >
                                <label htmlFor="email" className="lead">
                                    Email Address
                                </label>
                                <br />
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    onChange={handleSubmitBtn}
                                    className="form-input"
                                    // data-aos="fade-left"
                                />
                                <br />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <label htmlFor="text" className="lead mb-3">
                                    Your Messages
                                </label>
                                <br />
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-100 form-text"
                                    // data-aos="fade-left"
                                    onChange={handleSubmitBtn}
                                />
                                <br />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-100 form-btn"
                                    // onClick={handleSendBtn}
                                    // data-aos="fade-left"
                                >
                                    Send Message
                                </button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
};

export default Footer;
