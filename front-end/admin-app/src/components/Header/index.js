import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
          <Link to="/" className="navbar-brand">
            Admin Dashboard
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
              {/* <Nav.Link eventKey={2} href="#memes">
                Signin
              </Nav.Link> */}
              <li className="nav-item">
                <NavLink to="Signin" className="nav-link">
                  Signin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="Signup" className="nav-link">
                  Signup
                </NavLink>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
