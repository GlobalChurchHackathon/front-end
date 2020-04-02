import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Navbar, Nav } from 'react-bootstrap';
import logo from '../assests/nav-logo.png';

const Navigation = () => {
    return (
        <Navbar expand="lg" bg="dark" varient="dark">
            <Navbar.Brand>
                <Link to='/'>
                    <Image src={logo} style={{ maxWidth: "100%", width: "300px", height: "auto", marginLeft: "-.5em" }}></Image>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: "white" }} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/registerUser">Register</Link>
                    <Link to="/requestHelpPage">Need Help?</Link>
                    <Link to="/churchRequestBoard">Requests Board</Link>
                    <Link to="/give">Give</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
