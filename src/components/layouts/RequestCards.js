import React from 'react'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../assests/RequestHelp/RequestHelp.css'
import foodImg from '../assests/RequestHelp/foodImg.png';
import HyHo from '../assests/RequestHelp/HoHy.png';
const RequestCards = () => {


    return (
        <Container id="request-body">
            <Row >
                {/* <Col md="4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className="req-cards">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="white"><Link to='/houseHoldItems'>House Hold Items</Link></Button>
                        </Card.Body>
                    </Card>
                </Col> */}

                <Col md="6">
                    <Card className="text-center" style={{
                        width: '18rem'}}>
                        <Card.Body className="req-cards">
                            <Card.Img variant="top" src={foodImg} />
                            
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                            </Card.Text>
                            <Button variant="white"><Link to='/hygiene'>Hygiene</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md="6">
                    <Card className="text-center" style={{ width: '18rem' }}>
                        <Card.Body className="req-cards">
                            <Card.Img variant="top" src={HyHo} />
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="white"><Link to='/food'>Food</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default RequestCards;