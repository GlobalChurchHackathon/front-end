import React from 'react';
import { Container, Jumbotron, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assests/home/home.css';
// moved css to separate file
import about from '../assests/home/about.png';
import give from '../assests/home/give.png';
import requestBoard from '../assests/home/requestBoard.png';
import needhelp from '../assests/home/needhelp.png';
//conditional rendering needs to be implemented
//a guest will see less or different things than a logged in user will see

const Home = () => {
    return (
        <div id="home-body">
            <hr className="my-1"></hr>
            <Container>
                <Jumbotron id="jumbo">
                    <h1 id="h1" className="display-3 text-center">IN|THE|MIDST</h1>
                    <p id="jp" className="lead">Created to supply those in need with essential items through neighboring churches and communities </p>
                    <hr className="my-1"></hr>
                    <p>You can post new needs for yourself or someone you know, post supplies that you have available, or search for supplies that have already been made available.</p>
                    <p className="lead">
                    </p>
                </Jumbotron>
                <Jumbotron id="jumbo2">

                    <p className="display-6">"In a period of great difficulty, Covid-19 left my family alone and unemployed.  Even basic essentials like toothpaste, bread, and milk were near impossible for us to afford or even find.  In the midst became a light at the end of the tunnel for us, we have been so blessed though in the midst and partnering churches who have gone above and beyond to provide our needs!  Thank you In the Midst"</p>
                    <hr className="my-1"></hr>

                    <p className="lead">
                        -Test-testimonial
                        </p>
                </Jumbotron>
                <Row>
                    <Col className="fim" sm="3">
                        <Link to='./ChurchRequestBoard'><Card className="the-cards">
                            <Card.Img variant="top" src={requestBoard}/>
                            
                        </Card>
                        </Link>
                    </Col>
                    <Col className="fim" sm="3">
                        <Link to='./About'>
                        <Card  className="the-cards">
                            <Card.Img variant="top" src={about}/>       

                        </Card>
                        </Link>
                    </Col>
                
                    <Col className="fim" sm="3">
                        <Link to='./RequestHelpPage'>
                        <Card className="the-cards">
                        <Card.Img variant="top" src={needhelp}/>
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
                                <h4 className="card-title">35,184,513</h4>
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
    );
}
export default Home;


