import React from 'react'
import { Button, Modal, Form, Col, Container } from 'react-bootstrap'


class UpdateProfile extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <Container>
                <div style={{ textAlign: 'center', marginBottom: '7%' }} >
                    <Button onClick={() => { this.handleModal() }}>Update Profile Information</Button>
                    <Modal show={this.state.show} onHide={() => this.handleModal()} >
                        <Modal.Header closeButton >Update your profile information here!</Modal.Header>
                        <Modal.Body>
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
                                <div>
                                    <p>Thanks! This is the address we will use to drop off your requested items.</p>
                                </div>
                                <br></br>

                                <Form.Row className="justify-content-center">
                                    <Button onClick={() => { this.handleModal() }} className="btn btn-dark large">Save Changes</Button>
                                </Form.Row>

                            </Form>
                        </Modal.Body>
                        {/* <Modal.Footer>
                            <Button onClick={() => { this.handleModal() }}>
                                Submit Payment
                        </Button>
                        </Modal.Footer> */}
                    </Modal>
                </div>
            </Container>
        );
    }
}

export default UpdateProfile;