import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(to right, #4CAF50, #e0f7fa)",
        fontSize: "1.5rem",
        padding: "1.5rem",
        fontWeight: "bold",
      }}
    > 
      <Container>
        <Navbar.Brand href="/home" className="d-flex align-items-center">
          <FaStore style={{ marginRight: "10px", fontSize: "3rem" }} />
          Best Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* NavLink with dynamic active style */}
            <Nav.Link
              as={NavLink}
              to="/home"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? "#388e3c" : "transparent",
                borderRadius: "5px",
                padding: "5px 10px",
                textDecoration: "none",
              })}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/Products"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? "#388e3c" : "transparent",
                borderRadius: "5px",
                padding: "5px 10px",
                textDecoration: "none",
              })}
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? "#388e3c" : "transparent",
                borderRadius: "5px",
                padding: "5px 10px",
                textDecoration: "none",
              })}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Team5" id="user-dropdown">
              <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
