import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
// import axios from 'axios';

//function component w/hooks
const Login = ({ login, isAthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        e.preventDefault();
        console.log('success');
        login(email, password);
    };

    // Redirect user to home page if logged in
    if (isAthenticated) {
        return <Redirect to='/' />
    }

    return (
        <Fragment>
            <Container fluid='sm' className="loginBody" style={{ marginTop: "1.5em" }}>
                {/* added className to the container to make a page height in App.css */}
                <Row>
                    <Col>
                        <h2 className="large text-primary">Log In</h2>
                        <form className="form" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={email}
                                    onChange={e => onChange(e)}
                                    onFocus={(e) => e.target.placeholder = ""}
                                    onBlur={(e) => e.target.placeholder = "Email Address"}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={e => onChange(e)}
                                    minLength="8"
                                    onFocus={(e) => e.target.placeholder = ""}
                                    onBlur={(e) => e.target.placeholder = "Password"}
                                    required
                                />
                            </div>
                            <Link to='/profile'><input type="submit" className="btn btn-primary" value="Login" /></Link>
                        </form>
                        <p className="my-1">
                            Don't have an account? <Link to='/registerUser'>Sign up</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment >
    );
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAthenticated: state.auth.isAthenticated
});

export default connect(mapStateToProps, { login })(Login);
