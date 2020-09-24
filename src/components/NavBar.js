import React, { Component } from 'react';
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
 
                <Navbar bg="dark" variant="dark">
                    <NavLink style={{color:"white", marginRight: "3%", fontSize:"18px"}} to="/">PROFILE</NavLink>
                    <Nav className="mr-auto">
                    <NavLink style={{color:"white"}} to="/forms">Forms</NavLink>
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