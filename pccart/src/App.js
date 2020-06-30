import React, { Component } from 'react';
import Table from './Table';
import DisplayCart from './Cart'
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import { Nav, Navbar, NavDropdown, Form, Col, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) 
  {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navbar style={{ fontSize: 3 + 'vh', flex: 1, color: 'rgb(200,200,200)', backgroundColor: '#afcfdd' }} raised={true} expand="lg">
          <Navbar.Brand href="#home">PC-Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar -nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Checkout">Link</Nav.Link>
              <NavDropdown title="Options" id="basic-nav-dropdown">
                <NavDropdown.Item href="/find/processors" >Processors</NavDropdown.Item>
                <NavDropdown.Item href="/find/gpu">Graphics Card</NavDropdown.Item>
                <NavDropdown.Item href="/find/monitors"> Display Screen</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/show/mycart">My Cart</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="ml-0 pl-0">
          <BrowserRouter>
            <Route path="/find/processors"><Table index={0} /></Route>
            <Route path="/find/gpu"><Table index={1} /></Route>
            <Route path="/find/processors"><Table index={2} /></Route>
            <Route path="/show/mycart"><DisplayCart /></Route>
          </BrowserRouter>
        </div>
        <div>
          <BrowserRouter>
            <Route path="//localhost:3000/checkout">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>

                <Form  Group id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form>

                <Button variant="primary" type="submit">
                  Submit
            </Button>
              </Form>
            </Route>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;