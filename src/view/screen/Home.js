import '../style/style.css'
import 'react-awesome-slider/dist/styles.css';
import { Container, Row, Col, Figure, Button, Nav, NavDropdown, Navbar, Carousel, Card, CardGroup, Placeholder, Form } from 'react-bootstrap';
import 'react-awesome-slider/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { BiBorderRadius } from 'react-icons/bi';
import React, { useState, useCallback } from 'react';
import Calendar from 'react-calendar';
function Home() {
    const [value, setValue] = useState();

    const onChange = useCallback(
        (value) => {
            setValue(value);
        },
        [setValue],
    );

    return (
        <Container className='Op' fluid>
            <Row>
                <Col>

                    <Carousel variant="dark" className='op1'>
                        <Carousel.Item className='opp'>
                            <Carousel.Caption>
                                <div className="mb-2">
                                    <div className='nm1'>
                                        <h3 style={{ marginTop: "-49%", fontSize: "35px", color: "Background", fontFamily: "initial" }}>———LUXURY LIVING———</h3>
                                        <h1 style={{ marginTop: "14%", fontSize: "70px", color: "white", fontFamily: "cursive" }}>Discover A Brand</h1>
                                        <h1 style={{ fontSize: "80px", color: "white", fontFamily: "cursive" }}>Luxurious Hotel</h1>
                                    </div>
                                    <Button href="/About" variant="primary" size="lg" style={{ margintop: "50%", fontSize: "20px" }}>
                                        OUR ROOMS
                                    </Button>{' '}
                                    <Button href="/Register" variant="secondary" size="lg">
                                        BOOK ROOMS
                                    </Button>
                                </div>

                            </Carousel.Caption>

                            <img
                                className="d-block w-100"
                                src="img/carousel-1.jpg"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/carousel-2.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <div className='nm1'>
                                    <h3 style={{ marginTop: "-49%", fontSize: "35px", color: "Background", fontFamily: "initial" }}>———LUXURY LIVING———</h3>
                                    <h1 style={{ marginTop: "14%", fontSize: "70px", color: "white", fontFamily: "cursive" }}>Discover A Brand</h1>
                                    <h1 style={{ fontSize: "80px", color: "white", fontFamily: "cursive" }}>Luxurious Hotel</h1>
                                </div>
                                <Button variant="primary" size="lg" href="/About">
                                    OUR ROOMS
                                </Button>
                                <Button variant="secondary" size="lg" href="/Register">
                                    BOOK ROOMS
                                </Button>

                            </Carousel.Caption>

                        </Carousel.Item>

                    </Carousel>

                    <div className='head2'>
                        <input type="text" id="Check In" name="Check In" placeholder='Check In' >


                        </input>
                        <input type="text" id="Check In" name="Check In" placeholder='Check Out'></input>
                        <input type="text" list='Adult' placeholder='Adult' />
                        <datalist id='Adult'>
                            <option>Adult 1</option>
                            <option>Adult 2</option>
                            <option>Adult 3</option>
                        </datalist>
                        <input type="text" list='Child' placeholder='Child' />
                        <datalist id='Child'>
                            <option>Child 1</option>
                            <option>Child 2</option>
                            <option>Child 3</option>
                        </datalist>
                        <button style={{ backgroundColor: "gold", fontSize: "40px", fontFamily: "fantasy", borderRadius: "20%" }}>SUBMIT</button>
                    </div>

                    {/* <div className='b2'>
                        <div>
                            <center>  <h2 style={{ fontFamily: "fantasy", marginTop: "5%", color: "black", fontSize: "40px", marginRight: "16%" }}>About US——</h2>
                                <h1 style={{ fontSize: "40px", fontFamily: "cursive" }}>WelCome To INFINITE HOTEL </h1>
                                <p style={{ fontSize: "20px" }}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.</p>
                                <p style={{ fontSize: "20px" }}>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,</p>
                                <p style={{ fontSize: "20px" }}>sed stet lorem sit clita duo justo magna dolore erat amet</p> </center>
                        </div>
                    </div>

                    <div className='hp'>
                        <div className='img1'>
                            <img src='img/s-6.jpg' />
                        </div>
                    </div> */}




                    <Card>
                        <div className='b2'>
                            <div className='title'>
                                <center>  <h2 style={{ fontFamily: "fantasy", marginTop: "6%", color: "black", fontSize: "40px", marginRight: "16%" }}>INFINITE HOTEL——</h2>
                                    <h1 style={{ fontSize: "40px", fontFamily: "cursive" }}>With classic art-deco interiors that exemplify timelessness, the elegantly</h1>
                                    <p style={{ fontSize: "20px" }}>designed Luxury Rooms are adorned with elements of heritage aesthetics.</p>
                                    <p style={{ fontSize: "20px" }}>Contemporary comforts amidst an old-world charm make these the perfect</p>
                                    <p style={{ fontSize: "20px" }}>palatial retreat.</p> </center>
                                <Button href="/Login" variant="secondary" size="lg" style={{ marginLeft: "25%" }}>
                                    Explore More ➡️
                                </Button>
                            </div>
                            <Card.Img variant="left" src="img/s-6.jpg"
                                style={{ marginLeft: "49%", width: "50%", height: "600px", marginTop: "-21%", borderRadius: "7%" }} />
                        </div>
                    </Card>
                    <Card>
                        <div className='b3'>
                            <div className='title1'>
                                <center>  <h2 style={{ fontFamily: "fantasy", marginTop: "6%", color: "black", fontSize: "40px", marginRight: "16%" }}>NFINITE HOTEL——</h2>
                                    <h1 style={{ fontSize: "40px", fontFamily: "cursive" }}>Where Tranquility Meets Exquisite Escapes</h1>
                                    <p style={{ fontSize: "20px" }}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.</p>
                                    <p style={{ fontSize: "20px" }}>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,</p>
                                    <p style={{ fontSize: "20px" }}>sed stet lorem sit clita duo justo magna dolore erat amet</p> </center>
                                <Button href="/Login" variant="secondary" size="lg" style={{ marginLeft: "25%", marginTop: "10%" }}>
                                    ⬅️ Explore More
                                </Button>
                            </div>
                            <Card.Img variant="left" src="img/s-3.png"
                                style={{ marginLeft: "1%", width: "50%", height: "600px", marginTop: "0%", borderRadius: "7%" }} />
                        </div>
                    </Card>
                    <div className='b2'>
                        <div className='title'>
                            <center>  <h2 style={{ fontFamily: "fantasy", marginTop: "6%", color: "black", fontSize: "40px", marginRight: "16%" }}>INFINITE HOTEL——</h2>
                                <h1 style={{ fontSize: "40px", fontFamily: "cursive" }}>Where Indulgence Meets Sophistication </h1>
                                <p style={{ fontSize: "20px" }}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.</p>
                                <p style={{ fontSize: "20px" }}>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,</p>
                                <p style={{ fontSize: "20px" }}>sed stet lorem sit clita duo justo magna dolore erat amet</p> </center>
                            <Button href="/Login" variant="secondary" size="lg" style={{ marginLeft: "25%", marginTop: "10%" }}>
                                Explore More ➡️
                            </Button>
                        </div>
                        <Card.Img variant="left" src="img/s-2.jpg"
                            style={{ marginLeft: "49%", width: "50%", height: "600px", marginTop: "-21%", borderRadius: "7%" }} />
                    </div>
                    <Card>
                        <div className='b3'>
                            <div className='title1'>
                                <center>  <h2 style={{ fontFamily: "fantasy", marginTop: "6%", color: "black", fontSize: "40px", marginRight: "16%" }}>NFINITE HOTEL——</h2>
                                    <h1 style={{ fontSize: "40px", fontFamily: "cursive" }}>Where Tranquility Meets Exquisite Escapes</h1>
                                    <p style={{ fontSize: "20px" }}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.</p>
                                    <p style={{ fontSize: "20px" }}>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,</p>
                                    <p style={{ fontSize: "20px" }}>sed stet lorem sit clita duo justo magna dolore erat amet</p> </center>
                                <Button href="/Login" variant="secondary" size="lg" style={{ marginLeft: "25%", marginTop: "10%" }}>
                                    ⬅️ Explore More
                                </Button>
                            </div>
                            <Card.Img variant="left" src="img/s-4.jpg"
                                style={{ marginLeft: "1%", width: "50%", height: "600px", marginTop: "0%", borderRadius: "7%" }} />
                        </div>
                    </Card>
                    <div className="pp">
                        <h1>———ROOMS & SUITES————</h1>

                        <CardGroup>
                            <Card className='up'>
                                <Card.Img variant="top" src="img/o-2.jpg" style={{ height: "420px" }} />
                                <Card.Body>
                                    <Card.Title>Junior Suite
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <p>Starting Rate/Night
                                            ₹ 16,000 *</p>
                                    </Card.Title>
                                    <div className='j'>
                                        🛌 3 Bed ‖ 🛀2 Bath ‖ 📶Wi-fi
                                    </div>
                                    <Card.Text>
                                        The richly decorated rooms offer air-conditioning, flat-screen satellite TV and seating area. Each room includes a mini-bar and a safety deposit box. The attached bathrooms are equipped with a bathtub, hairdryer and free toiletries.
                                    </Card.Text>
                                    <Button variant="primary" size="lg" href="/Details">
                                        View Details
                                    </Button>{' '}
                                    <Button variant="secondary" size="lg" href="/Register">
                                        BOOK Now
                                    </Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card className='up' onClick={() => Nav('/Details')}>
                                <Card.Img variant="top" src="img/o-3.jpg" style={{ height: "420px" }} />
                                <Card.Body>
                                    <Card.Title>Executive Suite
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <p>Starting Rate/Night
                                            ₹ 26,000 *</p>
                                    </Card.Title>
                                    <div className='j'>
                                        🛌 3 Bed ‖ 🛀2 Bath ‖ 📶Wi-fi
                                    </div>
                                    <Card.Text>
                                        The richly decorated rooms offer air-conditioning, flat-screen satellite TV and seating area. Each room includes a mini-bar and a safety deposit box. The attached bathrooms are equipped with a bathtub, hairdryer and free toiletries.{' '}
                                    </Card.Text>
                                    <Button variant="primary" size="lg" href="/Details">
                                        View Details
                                    </Button>{' '}
                                    <Button variant="secondary" size="lg" href="/Register">
                                        BOOK Now
                                    </Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card className='up'>
                                <Card.Img variant="top" src="img/o-1.jpg" style={{ height: "420px" }} />
                                <Card.Body>
                                    <Card.Title>Super Dulex
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <p>Starting Rate/Night
                                            ₹ 36,000 *</p>
                                    </Card.Title>
                                    <div className='j'>
                                        🛌 3 Bed ‖ 🛀2 Bath ‖ 📶Wi-fi
                                    </div>
                                    <Card.Text>
                                        The richly decorated rooms offer air-conditioning, flat-screen satellite TV and seating area. Each room includes a mini-bar and a safety deposit box. The attached bathrooms are equipped with a bathtub, hairdryer and free toiletries.
                                    </Card.Text>
                                    <Button variant="primary" size="lg" href="/Details">
                                        View Details
                                    </Button>{' '}
                                    <Button variant="secondary" size="lg" href="/Register">
                                        BOOK Now
                                    </Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </div>


                    <div className="pp">
                        <h1>———ROOMS & SUITES————</h1>

                        <CardGroup>
                            <Card className='up'>
                                <Card.Img variant="top" className='zm' src="img/g-1.jpg" style={{ height: "420px" }} />
                                <Card.Body>
                                    <Card.Title>Spa & Fitness
                                        <p>⭐⭐⭐⭐⭐</p>

                                    </Card.Title>
                                    <div className='j'>
                                        📶Wi-fi
                                    </div>
                                    <Card.Text>
                                        The richly decorated rooms offer air-conditioning, flat-screen satellite TV and seating area. Each room includes a mini-bar and a safety deposit box. The attached bathrooms are equipped with a bathtub, hairdryer and free toiletries.
                                    </Card.Text>
                                    <Button variant="primary" size="lg" href="/Details">
                                        View Details
                                    </Button>{' '}
                                    <Button variant="secondary" size="lg" href="/Register">
                                        BOOK Now
                                    </Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card className='up' onClick={() => Nav('/Details')}>
                                <Card.Img variant="top" className='zm' src="img/f-1.jpg" style={{ height: "420px" }} />
                                <Card.Body>
                                    <Card.Title>Food & Restaurant</Card.Title>
                                    <p>⭐⭐⭐⭐⭐</p>
                                    <div className='j'>
                                        📶Wi-fi
                                    </div>
                                    <Card.Text>
                                        The richly decorated rooms offer air-conditioning, flat-screen satellite TV and seating area. Each room includes a mini-bar and a safety deposit box. The attached bathrooms are equipped with a bathtub, hairdryer and free toiletries.{' '}
                                    </Card.Text>
                                    <Button variant="primary" size="lg" href="/Details">
                                        View Details
                                    </Button>{' '}
                                    <Button variant="secondary" size="lg" href="/Register">
                                        BOOK Now
                                    </Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card className='up'>
                                <Card.Img variant="top" className='zm' src="img/g-2.jpg" style={{ height: "420px" }} />
                                <Card.Body>
                                    <Card.Title>Sports & Gaming</Card.Title>
                                    <p>⭐⭐⭐⭐⭐</p>
                                    <div className='j'>
                                        📶Wi-fi
                                    </div>
                                    <Card.Text>
                                        The richly decorated rooms offer air-conditioning, flat-screen satellite TV and seating area. Each room includes a mini-bar and a safety deposit box. The attached bathrooms are equipped with a bathtub, hairdryer and free toiletries.
                                    </Card.Text>
                                    <Button variant="primary" size="lg" href="/Details">
                                        View Details
                                    </Button>{' '}
                                    <Button variant="secondary" size="lg" href="/Register">
                                        BOOK Now
                                    </Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </div>
                </Col>



                {/* <div className='as'>
                    <img src='./img/s-1.jpg' style={{ width: "80%", height: "700px" }} />
                </div> */}
            </Row>

        </Container >

    )
}

export default Home;