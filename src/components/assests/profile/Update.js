import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';


const Update = (props) => {
    return (
        <>
            <div style={{ textAlign: 'center', marginBottom: '7%', marginTop: '8rem' }} >
                        <Form >
                            <Form.Row>
                                <Col>
                                    <Form.Control style={{ marginTop: '3%' }}
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        required />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Control style={{ marginTop: '3%' }}
                                        type="address"
                                        placeholder="Address"
                                        name="address"
                                        required />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Control style={{ marginTop: '3%' }}
                                        type="city"
                                        placeholder="City"
                                        name="city"
                                        required />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Control style={{ marginTop: '3%' }}
                                        type="state"
                                        placeholder="State"
                                        name="state"
                                        required />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Control style={{ marginTop: '3%' }}
                                        type="zip"
                                        placeholder="Zip"
                                        name="zip"
                                        required />
                                </Col>
                    </Form.Row>
                    <br></br>
                            <Form.Row className="justify-content-center">
                                <Button className="btn btn-dark large">Save Changes</Button>
                            </Form.Row>
                        </Form>
            </div>
        </>
    );
}
export default Update;