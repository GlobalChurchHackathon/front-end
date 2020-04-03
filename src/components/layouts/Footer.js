import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assests/footer-logo.png';

export default function Footer() {
  return (
    <Container id="foot" className="text-center bg-dark footer" fluid>
      <Row>
        <Col className="footerTitle" >
          <h5>— In the Midst of chaos, we will unite and help one another —</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to='/'><Image src={logo} alt="" style={{ maxWidth: "100%", width: "150px", height: "auto", marginTop: "-2em" }}></Image></Link>
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
            <li><Link to='/about'>About</Link></li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li><Link to='/requestHelpPage'>Needs</Link></li>
            <li><Link to='#!'>Give</Link></li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="blockquote-footer" style={{marginTop: "1em"}}>
            “Carry each other’s burdens, and in this way you will fulfill the law of Christ” -Galatians 6:2
          </p>
        </Col>
      </Row>
    </Container>
  );
}
