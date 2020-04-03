import React from 'react';
import { Container, Jumbotron, Card, CardDeck, Row } from 'react-bootstrap';
import '../assests/about/about.css';
import giveTen from '../assests/give/ten.png'
import giveFifty from '../assests/give/fifty.png'
import giveOneHundred from '../assests/give/oneHundred.png'
import giveFiveHundred from '../assests/give/fiveHundred.png'
import ModalGive from './modalGive';


const Give = () => {
    return (
        <div id="give-body">
            <Container style={{marginBottom: '0'}}>
                <Jumbotron style={{ background: "white", opacity: "70%", marginBottom: '0' }}>
                    <h1 className="display-2 text-center">In the Midst</h1>
                    <h1 className="display-3 text-center">...give to those in need</h1>
                    <p style={{margin: '5%'}}>
                        We the people are the Church, and that is why we have committed to help those in need.
                        Jesus said "Love your neighbor as yourself. There is no greater commandment than this" -Mark 12:31.
                        It is our greatest honor to bless our neighbors, especially during pressing times like these. COVID19
                        has effected so many people on a multitude of levels and it's hard to see it as we're sitting at home
                        watching Disney+. Dads are loosing their jobs. Moms are not working so they can watch and teach their
                        kids at home. Many kids are not getting free lunches at school which puts more stress on the family.
                        There is an answer... We will rise together as a church and take care of one another. Donate today
                        to help your neighbor.
                    </p>
                    <p className="text-center">
                        "Carry each other's burdens, and in this way you will fulfill the law of Christ"
                        -Galatians 6:2
                    </p>

                </Jumbotron>
            </Container>
            <CardDeck>
                <Row>
                    <Card>
                        <Card.Img variant="top" src={giveTen} />
                        <Card.Body>
                            <Card.Title>Give Safely</Card.Title>
                        </Card.Body>
                        <ModalGive />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={giveFifty} />
                        <Card.Body>
                            <Card.Title>Give Generously</Card.Title>
                        </Card.Body>
                        <ModalGive />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={giveOneHundred} />
                        <Card.Body>
                            <Card.Title>Give Humbly</Card.Title>
                        </Card.Body>
                        <ModalGive />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={giveFiveHundred} />
                        <Card.Body>
                            <Card.Title>Give Jesus</Card.Title>
                        </Card.Body>
                        <ModalGive />
                    </Card>
                </Row>
            </CardDeck>
            {/* still need to add some padding above this text */}
            {/* id added to padd bottom */}
            <h1 className="display-5 text-center" id="lowerwords" style={{ margin: '3%' }}>Your donation goes to the local Church and will help supply the needs of your neighbors.</h1>
        </div>
    );
}

export default Give;
