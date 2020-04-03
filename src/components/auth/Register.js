import React, { Fragment, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
// import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';


//function component w/hooks
const Register = ({ setAlert, register, isAthenticated }) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    });

    const { firstName, lastName, email, password, password2 } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('passwords do not match', 'danger')
        } else {
            // Removed below because it's now located in the actions/auth.js
            // console.log(formData);
            // const newUser = {
            //     firstName,
            //     lastName,
            //     email,
            //     password,
            // }
            // try {
            //     const config = {
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     }

            //     const body = JSON.stringify(newUser);

            //     const res = await axios.post('/api/users', body, config);
            //     console.log(res.data);
            // } catch (err) {
            //     console.error(err.response.data);
            // }
            register({ firstName, lastName, email, password });
        }

    }

    // Redirects user to home page once registered
    if (isAthenticated) {
        return <Redirect to='/' />
    }

    return (

        <Fragment>
            <Container fluid='sm' className="registerBody" >
                {/* added className to the container to make a page height in App.css */}
                <Row>
                    <Col>
                        <h1 className="large text-primary">Sign Up</h1>
                        <p className="lead">Create Your Account</p>
                        <form className="form" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={firstName}
                                    onChange={e => onChange(e)}
                                    onFocus={(e) => e.target.placeholder = ""}
                                    onBlur={(e) => e.target.placeholder = "First Name"}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={lastName}
                                    onChange={e => onChange(e)}
                                    onFocus={(e) => e.target.placeholder = ""}
                                    onBlur={(e) => e.target.placeholder = "Last Name"}
                                    required
                                />
                            </div>
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
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="password2"
                                    value={password2}
                                    onChange={e => onChange(e)}
                                    minLength="8"
                                    onFocus={(e) => e.target.placeholder = ""}
                                    onBlur={(e) => e.target.placeholder = "Confirm Password"}
                                    required
                                />
                            </div>
                            <input type="submit" className="btn btn-primary" value="Register" />
                        </form>
                        <p className="my-1">
                            Already have an account? <a href="/login">Sign In</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment >
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAthenticated: state.auth.isAthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);