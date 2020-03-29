import React from 'react';
import { Container, Jumbotron, Card, Col, Row } from 'react-bootstrap';

//conditional rendering needs to be implemented
//a guest will see less or different things than a logged in user will see

const Home = () => {
    return (
        <div id="home-body">
            <hr class="my-1"></hr>
            <Container>
                <Jumbotron id="jumbo">
                    <h1 class="display-3 text-center">IN|THE|MIDST</h1>
                    <p class="lead">Created to supply those in need with essential items through neighboring churches and communities </p>
                    <hr class="my-1"></hr>
                    <p>You can post new needs for yourself or someone you know, post supplies that you have available, or search for supplies that have already been made available.</p>
                    <p class="lead">
                    </p>
                </Jumbotron>
                <Row>
                    <Col md="6">
                        <Card className="card">
                            <Card.Img variant="top" src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                            <Card.Body>
                                <Card.Title>Giving During Hardship</Card.Title>
                                <Card.Text>
                                    In|The|Midst exists to enable churches and individuals to give to people in need in specific ways
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="card">
                            <Card.Img id="present" variant="top" src="https://images.pexels.com/photos/157879/gift-jeans-fashion-pack-157879.jpeg?auto=compress&cs=tinysrgb&h=750&w=940" />
                            <Card.Body>
                                <Card.Title>Receive without payment</Card.Title>
                                <Card.Text>
                                    We require no payment, any supplies received are free of charge
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
export default Home;


