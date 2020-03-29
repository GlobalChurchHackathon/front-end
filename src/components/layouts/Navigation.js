import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to='/'><i className="fas fa-code" />In the Midst</Link>
            </h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/registerUser'>Register</Link></li>
            </ul>
        </nav >
    )
}

export default Navigation
