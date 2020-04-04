import React from 'react';
import { Col, Row, Card, Container, ListGroup } from 'react-bootstrap';
import '../assests/profile/profile.css';
import UpdateProfile from './UpdateProfile';

const profile = (props) => {

    return (
        <>
            <Row className="divs justify-content-center">

                <Jumbotron-fluid className="text-center">
                    <h1 class="display-3">Welcome, {/*{this.props.firstName}*/}</h1>
                    <hr class="my-2"></hr>
                </Jumbotron-fluid>
            </Row>

            <Container>
                <Row>
                    <Col>

                        <ListGroup>
                            <ListGroup.Item>First Name {/*{this.props.firstName}*/}</ListGroup.Item>
                            <ListGroup.Item>Last Name {/*{this.props.lastName}*/}</ListGroup.Item>
                            <ListGroup.Item>Email Address {/*{this.props.email}*/}</ListGroup.Item>
                            <ListGroup.Item>Street Address {/*{this.props.streetAddress}*/}</ListGroup.Item>
                            <ListGroup.Item>City {/*{this.props.city}*/}</ListGroup.Item>
                            <ListGroup.Item>State {/*{this.props.state}*/}</ListGroup.Item>
                            <ListGroup.Item>Phone Number {/*{this.props.phoneNumber}*/}</ListGroup.Item>
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
        </>
    );
}
export default profile;
