import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "./project2.css";

import Explore from "../../explore-page.png";

const Project2 = () => {
    return (
        <div>
            <Container>
               

                <Card style={{ width: "100%", marginTop: "100px" }}>
                    <Card.Img variant="top" src={Explore} />
                    <Card.Body>
                        <Card.Title>
                            Services It's a private route. If a user created an account only he/she can see what is inside the services.
                            <br></br> 
                            <br />
                            Technology Used:-
React Js, React-Bootstrap, CSS3, Firebase, React-Hook-Form.
                        </Card.Title>
                    </Card.Body>
                </Card>

                

                
            </Container>
        </div>
    );
};

export default Project2;
