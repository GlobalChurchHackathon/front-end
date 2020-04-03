import React from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'


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
            <div style={{ textAlign: 'center', marginBottom: '7%' }} >
                <Button onClick={() => { this.handleModal() }}>Donate</Button>
                <Modal show={this.state.show} onHide={() => this.handleModal()} >
                    <Modal.Header closeButton >Make your Donation!</Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Col>
                                <Row>
                                    <div className="form-group">
                                        <input type="text"
                                            placeholder="First Name"
                                            name="firstName"
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                            placeholder="Last Name"
                                            name="lastName"
                                            required/>
                                    </div>
                                    </Row>
                                    <Row>
                                    <div className="form-group">
                                        <input type="number"
                                            placeholder="Card Number"
                                            name=""
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number"
                                            placeholder="Expiration Month"
                                            name=""
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number"
                                            placeholder="Expiration Year"
                                            name=""
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number"
                                            placeholder="CVV"
                                            name=""
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email"
                                            placeholder="Email Address"
                                            name=""
                                            required/>
                                    </div>
                                    <div>
                                        <p>Thanks, we will send a receipt to your email for tax purposes!</p>
                                    </div>
                                    </Row>
                            </Col>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { this.handleModal() }}>
                            Submit Payment
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ModalGive;