import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends Component {
    render() {
        return (
            <div>
                <Form inline className="login-form">
                    <h1>Log In</h1>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="email" className="mr-sm-2">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="email" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="password" className="mr-sm-2">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password" />
                    </FormGroup>
                    <Button style={{background: "green"}}>Submit</Button>
                </Form>
            </div>
        )
    }
};
