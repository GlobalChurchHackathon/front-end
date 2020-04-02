import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../assests/about.css';

const About = () => {
    return (
        <div id="about-body">
            <Container>
                <Jumbotron style={{ background: "white", opacity: "70%"}}>
                    <h1 className="display-3 text-center">About</h1>
                    <hr className="my-1"></hr>
                    <p>
                        In the midst of chaos lies the eye of the storm – a place of peace and assurance that all will be well. 
                        Our goal is to provide people with a way to connect with essential resources, whether it be food, hygiene, 
                        or household items, through neighboring churches and communities. If you are in need, if you want a place 
                        to rest and regain your footing, please create an account, head to the “Need Help?” tab, and choose what 
                        you need. If you would like to help, you can post your available supplies. All are welcome!
                    </p>
                </Jumbotron>
            </Container>
        </div>
    );
}

export default About;
