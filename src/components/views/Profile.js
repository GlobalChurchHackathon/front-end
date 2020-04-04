import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, Container, ListGroup, Figure, Form, CardDeck } from 'react-bootstrap';
import '../assests/profile/profile.css';
import UpdateProfile from './UpdateProfile';
import personPlaceholder from '../assests/profile/personPlaceholder.png';
import needs from '../assests/about/about-needs.png'
import give from '../assests/about/about-give.png'

const profile = (props) => {

    return (
        <div className="profile-div">
            <Row className="divs justify-content-center">
                <Jumbotron-fluid className="text-center">
                    <h1 class="display-3">Welcome, {/*{props.firstName}*/}</h1>
                    <hr class="my-2"></hr>
                </Jumbotron-fluid>
            </Row>
            <Container style={{ borderRadius: "5%" }}>
                <Card className="profileInfo">
                    <Row>
                        <Col sm={3}>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src={personPlaceholder} roundedCircle />
                                <Figure.Caption>
                                    Upload your profile picture to we know who we're delivering to
                                   <div className="mb-2">
                                        <Form.File id="formcheck-api-regular">
                                            <Form.File.Label></Form.File.Label>
                                            <Form.File.Input />
                                        </Form.File>
                                    </div>
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col sm={9}>
                            <ListGroup>
                                <ListGroup.Item>First Name {/*{props.firstName}*/}</ListGroup.Item>
                                <ListGroup.Item>Last Name {/*{props.lastName}*/}</ListGroup.Item>
                                <ListGroup.Item>Email Address {/*{props.email}*/}</ListGroup.Item>
                                <ListGroup.Item>Street Address {/*{props.streetAddress}*/}</ListGroup.Item>
                                <ListGroup.Item>City {/*{props.city}*/}</ListGroup.Item>
                                <ListGroup.Item>State {/*{props.state}*/}</ListGroup.Item>
                                <ListGroup.Item>Phone Number {/*{props.phoneNumber}*/}</ListGroup.Item>
                                <UpdateProfile />
                            </ListGroup>
                        </Col>
                    </Row>
                </Card>
                
                {/* I have not figured out how to get these photos to align in the center on a small screen
                already tried style={{ textAlign: "center" }} everywhere.  */}
                
                <CardDeck style={{ marginBottom: "15em" }}>
                    <Row style={{ margin: "auto" }}>
                        <Link className="about-item" to='/requestHelpPage'>
                            <Card className="about-img" style={{ maxWidth: "300px", marginTop: "30px" }}>
                                <Card.Img variant="top" src={needs} />
                            </Card>
                        </Link>
                        <Link className="about-item" to='/give'>
                            <Card className="about-img" style={{ maxWidth: "300px", marginTop: "30px" }}>
                                <Card.Img variant="top" src={give} />
                            </Card>
                        </Link>
                    </Row>
                </CardDeck>
            </Container>
        </div>
    );
}

export default profile;
