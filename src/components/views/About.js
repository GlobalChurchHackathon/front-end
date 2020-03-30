import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../assests/about.css';

const About = () => {
    return (
        <div id="about-body">
            <Container>
                <Jumbotron style={{background: "white", opacity: "70%"}}>
                    <h1 className="display-3 text-center">About</h1>
                    <hr className="my-1"></hr>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum.
                    </p>
                </Jumbotron>
            </Container>
        </div>
    );
}

export default About;
