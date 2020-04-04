import React from 'react';
import { Container, Jumbotron, Card, Col, Row, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assests/home/home.css';
// moved css to separate file
import about from '../assests/home/about.png';
import give from '../assests/home/give.png';
import requestBoard from '../assests/home/requestBoard.png';
import needhelp from '../assests/home/needhelp.png';
import slider1 from '../assests/home/slider1.png'
import slider2 from '../assests/home/slider2.png'
import slider3 from '../assests/home/slider3.png'
import slider4 from '../assests/home/slider4.png'
//conditional rendering needs to be implemented
//a guest will see less or different things than a logged in user will see

const Home = () => {
    return (
        <div className="homeSlider">

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="First slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider4}
                        alt="First slide" />
                </Carousel.Item>
            </Carousel>



            <div id="home-body">
                {/* <hr className="my-1"></hr> */}


                <Container>
                    <Jumbotron id="jumbo">
                        <h1 id="h1" className="display-3 text-center">IN|THE|MIDST</h1>
                        <p id="jp" className="lead">In the Midst was created to supply those in need with essential items through neighboring churches and communities.
                        COVID19 has effected our community in so many ways. Over 10 million Americans have applied for unemployment thus far. We're here to help you
                        by supplying food and basic household items. If you have a need, <Link to='./ChurchRequestBoard'> please reach out!</Link>
                        </p>
                        <hr className="my-1"></hr>
                        <p id="jp" className="lead">
                            If you would like to <Link to='./give'>give to those in need,</Link> In the Midst is a safe way to help your neighbors by partnering with the local Church.
                            We can do this together!
                        </p>
                        <hr className="my-1"></hr>
                        <p className="display-6 testimony">"COVID19 really affected our finances after my husband lost his job.
                        We were living paycheck to paycheck and our kids stopped receiving free lunches from school. I was afraid to go out of the house because I didn't want
                        to catch the Corona virus, especially because my elderly mother lives with us. Through "In the Midst", the Church stepped in to supply some our our needs.
                        We are so grateful that the local Church stepped in to help!</p>
                        <p className="lead">
                            -Test User
                        </p>
                    </Jumbotron>
                    <Row>
                        <Col className="fim" sm="3">
                            <Link to='./ChurchRequestBoard'><Card className="the-cards">
                                <Card.Img variant="top" src={requestBoard} />

                            </Card>
                            </Link>
                        </Col>
                        <Col className="fim" sm="3">
                            <Link to='./About'>
                                <Card className="the-cards">
                                    <Card.Img variant="top" src={about} />

                                </Card>
                            </Link>
                        </Col>

                        <Col className="fim" sm="3">
                            <Link to='./RequestHelpPage'>
                                <Card className="the-cards">
                                    <Card.Img variant="top" src={needhelp} />
                                </Card>
                            </Link>
                        </Col>
                        <Col className="fim" sm="3">
                            <Link to='./give'>
                                <Card className="the-cards">
                                    <Card.Img variant="top" src={give} />
                                </Card>
                            </Link>
                        </Col>

                        <hr className="display-2"></hr>

                        <Col className="info-cards" >

                            <div className="card text-left">
                                <div className="card-body">
                                    <h4 className="card-title">3,184,513</h4>
                                    <p className="card-text">Items Received</p>
                                </div>
                            </div>
                        </Col>

                        <Col className="info-cards">

                            <div className="card text-left">


                                <div className="card-body">
                                    <h4 className="card-title">1568</h4>
                                    <p className="card-text">Churches Involved</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="info-cards" >
                            <div className="card text-left">
                                <div className="card-body">
                                    <h4 className="card-title">131,489</h4>
                                    <p className="card-text">People Helped</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default Home;


