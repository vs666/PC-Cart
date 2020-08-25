import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmpassword: '',
            name: ''
        }
    }



    login = (event) => {

        event.preventDefault();

        const email = this.state.email;
        const pass = this.state.password;
        const name_ = this.state.name;
        const con_pass = this.state.confirmpassword;
        console.log(email, pass);
        if(con_pass != pass)
        {
            alert('Passwords donot match');
            return;
        }
        var data = { username: email.toString(), password: pass.toString(), name: name_.toString() };
        console.log(data);
        axios
            .post('http://192.168.0.105:5000/createAccount', data)
            .then((response) => {

                console.log(response);
                if (response.data.stat.toString() == 'Failed') {
                    alert("Account creation failed because : " + response.data.reason);
                }
                else {
                    alert("Account Created.");
                }
            })
            .catch(err => {
                console.log(err);
            });

        console.log(email, pass);//, errors);
    }

    handleChange = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.value
        // const errors = runValidationRules(target, this.state.errors);

        // this.setState({
        //     errors: errors
        // });

        this.setState({
            [field]: value
        });
    }

    render() {
        return (
            <div className="container">
                <Form id="loginForm" method="post" onSubmit={this.login}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            type="text"
                            validations={['required']}
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            id="name"
                            placeholder="Enter your name."
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">UserID</Label>
                        <Input
                            type="text"
                            validations={['required', 'isEmail']}
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            id="email"
                            placeholder="Enter your userId."
                        />
                        {/* <FromValidationError field={this.state.errors.email} /> */}
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            validations={['required']}
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            id="password"
                            placeholder="Enter your password."
                        />
                        {/* <FromValidationError field={this.state.errors.password} /> */}
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmpassword">Confirm Password</Label>
                        <Input
                            type="password"
                            validations={['required']}
                            name="confirmpassword"
                            value={this.state.confirmpassword}
                            onChange={this.handleChange}
                            id="confirmpassword"
                            placeholder="Re-enter your password."
                        />
                        {/* <FromValidationError field={this.state.errors.password} /> */}
                    </FormGroup>
                    <Button>Create Account</Button>
                </Form>
            </div>
        );
    }
}

