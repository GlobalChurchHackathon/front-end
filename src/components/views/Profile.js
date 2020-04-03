import React from 'react';
import { Col, Row, Card, Jumbotron } from 'react-bootstrap';
import '../assests/profile/profile.css';
import { Link } from 'react-router-dom';
import about from '../assests/home/about.png';
import give from '../assests/home/give.png';
import requestBoard from '../assests/home/requestBoard.png';
import needhelp from '../assests/home/needhelp.png';
import Update from '../assests/profile/Update';

const profile = (props) => {

    return (
        <>
            <Row className="divs justify-content-center">
                
                    <Jumbotron-fluid className="text-center">  
                    <h1 class="display-3">Welcome, {/*{this.props.firstName}*/}</h1> 
                        <hr class="my-2"></hr>
                    <p class="lead">Please keep your address up to date</p>
                    <p>
                       <a className="btn btn-dark btn-lg" href="/Update" role="button">Edit Information</a>
                        </p>       
                    </Jumbotron-fluid>
            </Row>
            <div>
            {/* <Update /> */}
            </div>

            <Row >
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

            </Row>
        </>
    );
}
export default profile;
