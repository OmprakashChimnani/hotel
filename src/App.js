import Home from './view/screen/Home';
import About from './view/screen/About';
import Details from './view/screen/Details';
import Register from './view/screen/Register';
import Cart from './view/screen/Cart';
import Login from './view/screen/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Boot from './view/screen/Boot'
import { Container, Row, Col, Figure, Button, Nav, NavDropdown, Navbar, Form } from 'react-bootstrap';
import { IconName } from "react-icons/bi";
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
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
                <Nav.Link href="/Login">LOGIN</Nav.Link>
                <NavDropdown title="DETAILS" id="collasible-nav-dropdown">
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

              <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand href="/" style={{ fontSize: "50px", marginLeft: "30%", fontFamily: "cursive" }}>INFINITE HOTEL</Navbar.Brand>


                <Nav style={{ marginLeft: "50%" }}>

                  <div className='log'>
                    {
                      user ? <Nav.Link href="/Login" onClick={logout} >LOGOUT</Nav.Link> : null
                    }
                  </div>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row><Routes>


          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Boot" Component={<Boot />} />
          <Route path="/Cart" Component={<Cart />} />

        </Routes>
        <footer className="footer">
          <div className="row">
            <div className="col-md-4">
              <h1>About Us</h1>
              <h4>We are a luxury hotel located in the heart of the city. Our goal is to provide our guests with the best possible experience during their stay.</h4>
            </div>
            <div className="col-md-4">
              <h1>Contact Us</h1>
              <h4>123 Main Street<br />
                City, State 12345<br />
                Phone: (123) 456-7890<br />
                Email: info@hotel.com</h4>
            </div>
            <div className="col-md-4">
              <h1>Connect with Us</h1>
              <ul className="social-icons">
                <li style={{ color: "white" }}><a href="#!">Home</a></li>
                <li style={{ color: "white" }}><a href="#!">Shop</a></li>
                <li style={{ color: "white" }}><a href="#!">About Us</a></li>
                <li style={{ color: "white" }}><a href="#!">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className='last'>
            <div className='gg'>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item"><a href="/#https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569849%7Cb%7Cfacebook%20%27%7C&placement=&creative=589460569849&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D1007805%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiArY2fBhB9EiwAWqHK6tji_JMMUXizNbHmFGrr8278YF3K1IBkDasQeA6MsaDmg9qG2nDAqBoCkmwQAvD_BwE"><FaFacebookF /></a></li>
                <li className="list-inline-item"><a href="#!"><FaTwitter /></a></li>
                <li className="list-inline-item"><a href="#!"><FaInstagram /></a></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="footer-bottom">
                  <p>&copy; 2023 Hotel. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>

        </footer>
      </>


    </BrowserRouter >

  )



}
export default App;