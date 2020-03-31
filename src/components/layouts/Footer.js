import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assests/footer-logo.png';

export default function Footer() {
  return (
      <Card id="foot" className="text-center bg-dark footer">
        {/* <Card.Header>Featured</Card.Header> */}
        <Card.Body>
          <Card.Title className="footerTitle" >— In the Midst of trouble, we will unite and help one another —</Card.Title>
          <Card.Text>
            <Row>
             <Col>
                <Image src={logo} alt="" style={{maxWith: "100%", width: "150px", height: "auto", marginTop: "-2em"}}></Image>
              </Col>
              <Col>
                <ul>
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to='/registerUser'>Register</Link></li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='#!'>Share a need</Link></li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li><Link to='#!'>Our Mission</Link></li>
                  <li><Link to='#!'>Give</Link></li>
                </ul>
              </Col>
            </Row>
          </Card.Text>
          <Card.Footer className="blockquote-footer">
            "How good and pleasant it is when God's people live together in unity!" -Psalm 133:1</Card.Footer>
        </Card.Body>
      </Card>
  );
}
