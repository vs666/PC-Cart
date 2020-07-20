import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import './Nav.css';
import SearchBar from './Search';
import axios from 'axios';
const Styles = styled.div`
    .navbar {
        background-color : rgb(20,20,4  0);
    }
    
    .navbar-brand, .navbar-nav, .nav-link{
        color : #bbb;
        $: hover{
            color: white;
        }
    }
`;

const logout = (event) => {

    event.preventDefault();

    const dict = { hash: sessionStorage.getItem('hash') }
    axios
        .post('http://192.168.0.105:5000/logout', dict)
        .then((response) => {
            console.log("Point1.");
            console.log(response);
            alert(response.data.log);
            console.log("Point 2.")
            if (response.data.log == "Success") {
                sessionStorage.removeItem('hash');
                alert("Sign out successful");
                window.location.href = '/';
            }

        })
        .catch(err => {
            console.log("ERROR");
            console.log(err);
        });
    // window.location.href = '/';

}

const Navigation = () => {
    return (
        <Styles>
            <Navbar raised={true} expand="lg" className="navbar a">
                <Navbar.Brand href="/"><img src={require("./logo.png")} alt="PC-Cart" height="64" width="64" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar -nav" className="navbar a">
                    <Nav className="mr-auto" style={{ color: '#bbb' }}>
                        <Nav.Link href="/" style={{ color: '#bbb' }}>Home</Nav.Link>
                        <Nav.Link href="/signup" style={{ color: '#bbb' }}>Sign Up</Nav.Link>
                        <Nav.Link href="/login" style={{ color: '#aaa' }}>Login</Nav.Link>
                        <Nav.Link onClick={logout} style={{ color: '#aaa' }}>Logout</Nav.Link>
                        <NavDropdown title={"Options"} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/find/processors">Processors</NavDropdown.Item>
                            <NavDropdown.Item href="/find/gpu" >Graphics Card</NavDropdown.Item>
                            <NavDropdown.Item href="/find/keyboards"> Keyboards</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/cart">My Cart</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <SearchBar style={{ alignItems: `right` }} />
            </Navbar>
        </Styles>
    );
}

export default Navigation;