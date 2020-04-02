import React from 'react';
import { Container, Jumbotron, Card, Col, Row } from 'react-bootstrap';
import '../assests/home/home.css';
// moved css to separate file

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
                    <Col md="3">

                        <div class="card text-left" className="info-card">

                            <div class="card-body">
                                <h4 class="card-title"></h4>
                                <p class="card-text"></p>
                                <button className="btn btn-primary">requests</button>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">

                        <div class="card text-left info-card" className="info-card">

                            <div class="card-body">
                                <h4 class="card-title"></h4>
                                <p class="card-text"></p>
                                <button className="btn btn-primary">About</button>
                            </div>
                        </div>
                    </Col>
                
                    <Col md="3">

                        <div class="card text-left info-card" className="info-card">

                            <div class="card-body">
                                <h4 class="card-title"></h4>
                                <p class="card-text"></p>
                                <button className="btn btn-primary">Help?</button>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">

                        <div class="card text-left" className="info-card">

                            <div class="card-body">
                                <h4 class="card-title"></h4>
                                <p class="card-text"></p>
                                <button className="btn btn-primary">Give</button>
                            </div>
                        </div>
                    </Col>

                    
                    
                    <Col className="info-cards" >

                        <div class="card text-left">

                            <div class="card-body">
                                <h4 class="card-title">35,184,513</h4>
                                <p class="card-text">Items Received</p>
                                
                            </div>
                        </div>
                    </Col>

                    <Col className="info-cards">

                        <div class="card text-left">

                            <div class="card-body">
                                <h4 class="card-title">1568</h4>
                                <p class="card-text">Churches Involved</p>
                              
                            </div>
                        </div>
                    </Col>
                    <Col className="info-cards" >

                        <div class="card text-left">

                            <div class="card-body">
                                <h4 class="card-title">131,489</h4>
                                <p class="card-text">People Helped</p>
                               
                            </div>
                        </div>
                    </Col>
                  
                </Row>
            </Container>

        </div>
    );
}
export default Home;


