import React, { Component } from "react";

import { Nav, Navbar } from "react-bootstrap";

class AppNav extends Component {
  render() {
    return (
      <Navbar classname="navbar" bg="dark" variant="dark">
        <Navbar.Brand href="/">Brian Powell</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>
    );
  }
}

export default AppNav;
