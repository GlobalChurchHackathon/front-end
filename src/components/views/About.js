import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, CardDeck, Card, Row } from 'react-bootstrap';
import needs from '../assests/about/about-needs.png';
import give from '../assests/about/about-give.png';
import '../assests/about/about.css';

const About = () => {
    return (
        <div>
            <Container id="about-body">
                <Jumbotron style={{ background: "white", opacity: "70%" }}>
                    <h1 className="display-3 text-center">About</h1>
                    <hr className="my-1"></hr>
                    <p>
                        In the midst of chaos lies the eye of the storm – a place of peace and assurance that all will be well.
                        Our goal is to provide people with a way to connect with essential resources, whether it be food, hygiene,
                        or household items, through neighboring churches and communities. If you are in need, if you want a place
                        to rest and regain your footing, please create an account, head to the “Need Help?” tab, and choose what
                        you need. If you would like to help, you can donate in the "Give" tab. All are welcome!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Jumbotron>
            </Container>

            <CardDeck style={{ marginBottom: "15em" }}>
                <Row style={{ margin: "auto" }}>
                    <Link className="about-item" to='/requestHelpPage'>
                        <Card className="about-img" style={{ maxWidth: "350px" }}>
                            <Card.Img varient="top" src={needs} />
                        </Card>
                    </Link>
                    <Link className="about-item" to='/give'>
                        <Card className="about-img" style={{ maxWidth: "350px" }}>
                            <Card.Img varient="top" src={give} />
                        </Card>
                    </Link>
                </Row>
            </CardDeck>
        </div>
    );
}

export default About;
