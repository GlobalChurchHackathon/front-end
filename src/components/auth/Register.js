import React, { Fragment, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';

//function component w/hooks
const Register = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
    });

    const { firstName, lastName, email, password, password2 } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('passwords do not match')
        } else {
            console.log(formData);
            const newUser = {
                firstName,
                lastName,
                email,
                password
            }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(newUser);

                const res = await axios.post('/api/users', body, config);
                console.log(res.data);
            } catch (err) {
                console.error(err.response.data);
            }
        }

    }
    return (

        <Fragment>
            <Container fluid='sm' >
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
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={lastName}
                                    onChange={e => onChange(e)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={email}
                                    onChange={e => onChange(e)}
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

export default Register;