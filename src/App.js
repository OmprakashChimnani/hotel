import Home from './view/screen/Home';
import About from './view/screen/About';
import Details from './view/screen/Details';
import Register from './view/screen/Register';
import Login from './view/screen/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Boot from './view/screen/Boot'
import { Container, Row, Col, Figure, Button, Nav, NavDropdown, Navbar, Form } from 'react-bootstrap';
import { IconName } from "react-icons/bi";
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { First } from 'react-bootstrap/esm/PageItem';
import { useState } from "react";


function App() {
  const [user, setuser] = useState(localStorage.getItem('user'));
  console.log(localStorage.getItem('user'));
  function logout() {
    alert('logout')
    localStorage.setItem('user', false)
    setuser(false)
  }
  return (

    < BrowserRouter >
      <><Row>
        <Col>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ height: "120px" }}>
            <Container className='op'>
              <Nav className="me-auto" style={{ marginLeft: "-27%" }}>
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/About">ABOUT</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
                <NavDropdown title="Details" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/Details">Available Rooms</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Dulex Rooms
                  </NavDropdown.Item>
                  {
                    user ? <NavDropdown.Item href="/Login" onClick={logout}>LOG OUT</NavDropdown.Item> : null
                  }<NavDropdown.Divider />
                  <NavDropdown.Item href="/Register">
                    BOOK ROOMS
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <li className="list-inline-item"><a href="#!"><FaFacebookF /></a></li>
              <li className="list-inline-item"><a href="#!"><FaTwitter /></a></li>
              <li className="list-inline-item"><a href="#!"><FaInstagram /></a></li>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand href="/" style={{ fontSize: "50px", marginLeft: "30%", fontFamily: "cursive" }}>INFINITE HOTEL</Navbar.Brand>


                <Nav style={{ marginLeft: "50%" }}>


                  <Nav.Link href="/Details">SHOP</Nav.Link>
                  <Nav.Link eventKey={2} href="/Login">
                    Sign up
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* {
            user ? null : <>
              <Nav.Link style={{ color: "blue" }} href="/Register">Register</Nav.Link>
              <Nav.Link style={{ color: "blue" }} href="/Login">Login</Nav.Link>
            </>
          } */}
        </Col>
      </Row><Routes>


          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Boot" Component={<Boot />} />

        </Routes><footer>
          <div>
            <footer className="bg-black mt-5">
              <Container>
                <Row>
                  <Col md={4}>
                    <h5 style={{ color: "white" }}>Contact Us</h5>
                    <p style={{ color: "white" }}>123 Main Street<br />New York, NY 10001<br />Phone: (123) 456-7890<br />Email: info@example.com</p>
                    <ul className="list-unstyled list-inline">
                      <li className="list-inline-item"><a href="#!"><FaFacebookF /></a></li>
                      <li className="list-inline-item"><a href="#!"><FaTwitter /></a></li>
                      <li className="list-inline-item"><a href="#!"><FaInstagram /></a></li>
                    </ul>
                  </Col>
                  <Col md={4}>
                    <h5 style={{ color: "white" }}>Quick Links</h5>
                    <ul className="list-unstyled">
                      <li style={{ color: "white" }}><a href="#!">Home</a></li>
                      <li style={{ color: "white" }}><a href="#!">Shop</a></li>
                      <li style={{ color: "white" }}><a href="#!">About Us</a></li>
                      <li style={{ color: "white" }}><a href="#!">Contact Us</a></li>
                    </ul>
                  </Col>
                  <Col md={4}>
                    <h5 style={{ color: "white" }}>Newsletter</h5>
                    <p style={{ color: "white" }}>Subscribe to our newsletter to receive exclusive offers and the latest news on our products.</p>
                    <form>
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Address" />
                      </div>
                      <button type="submit" className="btn btn-primary btn-block">Subscribe</button>
                    </form>
                  </Col>
                </Row>
                <hr />
                <p className="text-muted text-center" style={{ color: "white" }}>Copyright © {new Date().getFullYear()}
                  {' '}
                  <a href="#!" style={{ color: "white" }}>Your Company</a>
                  {' '}
                  All rights reserved.</p>
              </Container>
            </footer>

          </div>
        </footer></>


    </BrowserRouter >

  )



}
export default App;