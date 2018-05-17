import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class RegisterForm extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleLogin = this.handleLogin.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.state = {
          login: '',
          password: ''
        };
    }

    handleLogin(e) {
        this.setState({ login: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <FormGroup 
                        controlId="nameField" 
                    >
                        <ControlLabel>Login</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="passwordField">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button className="submit-btn" type="submit">Submit</Button>
                </form>
            </div>
        );
    }
}

export default RegisterForm;