import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Image, Navbar, Nav } from 'react-bootstrap';
import logo from '../assests/nav-logo.png';

const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {
    // This navbar shows up if user IS logged in
    const authLinks = (
        <Fragment>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: "white" }} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/">Home</Link>
                    <Link to="/requestHelpPage">Get Help</Link>
                    <Link to="/give">Give</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/about">About</Link>
                    <a onClick={logout} href='#!'>
                        <span>Logout</span>
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Fragment>
    );

    // This navbar shows up if user is NOT logged in
    const guestLinks = (
        <Fragment>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: "white" }} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/">Home</Link>
                    <Link to="/requestHelpPage">Get Help</Link>
                    <Link to="/give">Give</Link>
                    <Link to="/about">About</Link>
                    <Link to="/registerUser">Register</Link>
                    <Link to="/login">Login</Link>
                </Nav>
            </Navbar.Collapse>
        </Fragment>
    );
    return (
        // Conditional Navigation rendering
        <Navbar expand="lg" bg="dark" varient="dark">
            <Navbar.Brand className="navbarLogo">
                <Link to='/'>
                    <Image src={logo} style={{ maxWidth: "100%", width: "300px", height: "auto", marginLeft: "-.5em" }}></Image>
                </Link>
            </Navbar.Brand>
            { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </Navbar>
    );
}

Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navigation);
