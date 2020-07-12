import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
 

export default class Login extends Component {
 
    constructor(props) {
        super(props);
        this.state = {   
            email: '',
            password: ''
        }
    }
 
 
 
    login = (event) => {
 
        event.preventDefault();

        const email = this.state.email;
        const pass = this.state.password;
        console.log(email, pass);
        var data = { username: email.toString(), password: pass.toString() };
        console.log(data);
        axios
            .post('http://192.168.0.105:5000/loginTrial', data)
            .then((response) => {
                
                console.log(response);
                if (response.data.stat.toString() == 'Failed') {
                    alert("Login failed because : " + response.data.reason);
                }
                else {
                    alert("Login Successful.");
                    console.log(localStorage.getItem('curr_user'))
                    localStorage.setItem('curr_user',email.toString());
                    console.log(localStorage.getItem('curr_user'));
                    // window.location.href = 'localhost:3000/'; // add the website url here
                }
            })
            .catch(err => {
                console.log(err);
            });
 
        console.log(email, pass);//, errors);
    }
 
    handleChange = (event) => {
        const target = event.target;
        const field =  target.name;
        const value = target.value
 
        // const errors = runValidationRules(target, this.state.errors);
 
        // this.setState({
        //     errors: errors
        // });
 
        this.setState({
            [field]:  value
        });
    }
 
    render() {
        return (
            <div className="container">
                <Form id="loginForm" method="post" onSubmit={this.login}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="text"
                            validations={['required','isEmail']}
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            id="email"
                            placeholder="Enter your email address."
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
                    <Button>login</Button>
                </Form>
            </div>
        );
    }
}
 