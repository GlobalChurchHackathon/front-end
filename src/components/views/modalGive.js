import React from 'react'
import { Button, Modal, Form, Col } from 'react-bootstrap'


class ModalGive extends React.Component {
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
            <>
            <div style={{ textAlign: 'center', marginBottom: '7%' }} >
                <Button onClick={() => { this.handleModal() }}>Donate</Button>
                    <Modal show={this.state.show} onHide={() => this.handleModal()} >
                        <Modal.Header closeButton >Make your Donation!</Modal.Header>
                    <Modal.Body>
                        <Form >
                            <Form.Row>
                               <Col>
                                <Form.Control
                                        placeholder="First name"
                                        type="text"
                                        name="firstName"
                                        required />
                                </Col>
                                <Col>
                                    <Form.Control
                                        placeholder="Last name"
                                        type="text"
                                        name="lastName"
                                        required />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Control style={{ marginTop: '3%' }}
                                        type="text"
                                        placeholder="Card Number"
                                        name=""
                                        required />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Control style={{ marginTop: '3%' }}
                                        id="month" 
                                        as="select" 
                                        required>
                                        <option selected>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                <Form.Control style={{ marginTop: '3%' }}
                                        placeholder="Exp year"
                                        id="year" 
                                        as="select" 
                                        required>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                        <option>2025</option>
                                        <option>2026</option>
                                        <option>2027</option>
                                        <option>2028</option>
                                        <option>2029</option>
                                        <option>2030</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Control style={{ marginTop: '3%' }}
                                        type="number"
                                        placeholder="CVV"
                                        name=""
                                        required />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Control style={{ marginTop: '3%' }}
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        required />
                                </Col>
                            </Form.Row>
                            <Form.Group>
                                <Form.Check style={{ marginTop: '3%' }}
                                    type="switch"
                                    id="custom-switch"
                                    label="Agree to terms and conditions"
                                />
                            </Form.Group>
                            <div>
                                <p>Thanks, we will send a receipt to your email for your records!</p>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { this.handleModal() }}>
                            Submit Payment
                        </Button>
                    </Modal.Footer>
                </Modal>
                </div>
            </>
        );
    }
}

export default ModalGive;