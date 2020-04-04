import React from 'react';
import { Col, Row, Card, Container, ListGroup } from 'react-bootstrap';
import '../assests/profile/profile.css';
import UpdateProfile from './UpdateProfile';

const profile = (props) => {

    return (
        <Container>
            <Row className="divs justify-content-center">
                <Jumbotron-fluid className="text-center">
                    <h1 class="display-3">Welcome, {/*{props.firstName}*/}</h1>
                    <hr class="my-2"></hr>
                </Jumbotron-fluid>
            </Row>
            <Container>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>First Name {/*{props.firstName}*/}</ListGroup.Item>
                            <ListGroup.Item>Last Name {/*{props.lastName}*/}</ListGroup.Item>
                            <ListGroup.Item>Email Address {/*{props.email}*/}</ListGroup.Item>
                            <ListGroup.Item>Street Address {/*{props.streetAddress}*/}</ListGroup.Item>
                            <ListGroup.Item>City {/*{props.city}*/}</ListGroup.Item>
                            <ListGroup.Item>State {/*{props.state}*/}</ListGroup.Item>
                            <ListGroup.Item>Phone Number {/*{props.phoneNumber}*/}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center"> Please make sure all of your information is up to date.
                                If you have made a request, the address above is where you items will be delivered.</Card.Title>
                            </Card.Body>
                            <UpdateProfile />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default profile;
