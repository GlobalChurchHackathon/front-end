import React from 'react';
import { Nav, Card } from 'react-bootstrap';


//will need to import Link to for navigation and router

export default function Navigation() {
    return (
        //color themes can alway be changed later
        <div >
            <Card border="dark" >
                <Card.Body>
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Sign up</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Find a Church?</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Body>
            </Card>
        </div>
    );
}