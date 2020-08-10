import React, { Component } from "react";

import { Nav, Navbar } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link>This is my footer.</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;
