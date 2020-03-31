import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import logo from '../assests/nav-logo.png';

const Navigation = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to='/'><Image src={logo} style={{ maxWidth: "100%", width: "300px", height: "auto", marginBottom: "-5px", marginLeft: "-.5em" }}></Image></Link>
            </h1>
            <ul style={{marginTop: ".5em"}}> {/* This style vertically centers navigation links - Maria */}
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/registerUser'>Register</Link></li>
                <li><Link to='/requestHelpPage'>Need Help?</Link></li>
            </ul>
        </nav >
    );
}

export default Navigation;
