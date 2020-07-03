import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import './Nav.css';
const Styles = styled.div`
    .navbar {
        background-color : #222;
    }
    
    .navbar-brand, .navbar-nav, .nav-link{
        color : #bbb;
        $: hover{
            color: white;
        }
    }
`;


const Navigation = () => {
    return (
        <Styles>
            <Navbar raised={true} expand="lg" className="navbar a">
                <Navbar.Brand href="#home">PC-Cart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar -nav" className="navbar a">
                    <Nav className="mr-auto" style={{color:'#bbb'}}>
                        <Nav.Link href="/" style={{color:'#bbb'}}>Home</Nav.Link>
                        <Nav.Link href="/Checkout" style={{color:'#aaa'}}>Link</Nav.Link>
                        <NavDropdown  title={"Options"} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/find/processors">Processors</NavDropdown.Item>
                            <NavDropdown.Item href="/find/gpu" >Graphics Card</NavDropdown.Item>
                            <NavDropdown.Item href="/find/monitors"> Display Screen</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/show/mycart">My Cart</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}

export default Navigation;