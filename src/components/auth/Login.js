import React, { Fragment, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//function component w/hooks
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = async e => {
        e.preventDefault();
        console.log('success');
    }
    return (
        <Fragment>
            <Container fluid='sm'>
                <Row>
                    <Col>
                        <h1 className="large text-primary">Log In</h1>
                        <p className="lead">Log into you account</p>
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
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </form>
                        <p className="my-1">
                            {/* Already have an account? <Link to='/register'>Log In</Link> */}
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment >
    )
}
export default Login;
