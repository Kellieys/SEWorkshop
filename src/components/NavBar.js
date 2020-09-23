import React, { Component } from 'react';
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap';
 
export default class NavBar extends Component {
    render() {
        return (
            <div>
 
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">PROFILE</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#view">Form</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
 
            </div>
        )
    }
}
