import '../style/style.css'
import 'react-awesome-slider/dist/styles.css';
import { Container, Row, Col, ButtonGroup, Figure, Button, Nav, NavDropdown, Navbar, Carousel, Card, CardGroup, Placeholder, Form } from 'react-bootstrap';
import 'react-awesome-slider/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { BiBorderRadius } from 'react-icons/bi';
// import React, { useState, useCallback } from 'react';
import { handleSubmit, useCallback, checkInDate, handleCheckInDateChange, checkOutDate, handleCheckOutDateChange, guests, handleGuestsChange, useState } from 'react';
import Calendar from 'react-calendar';
import { DateRange } from 'react-date-range';
import { FaBeer } from 'react-icons/fa';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { FaBed, FaBath, FaDollarSign, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import { product } from '../data/data'
function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBooking = () => {
        setIsOpen(!isOpen);
    };

    const [value, setValue] = useState();
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

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

                    <section className="hotel-availability-check">
                        <div className="container1">
                            {/* <h2>Check Availability</h2> */}
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="check-in-date"><h3>Check-In Date:</h3></label>
                                        <input type="date" id="check-in-date" value={checkInDate} onChange={handleCheckInDateChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="check-out-date"><h3>Check-Out Date:</h3></label>
                                        <input type="date" className='in' id="check-out-date" value={checkOutDate} onChange={handleCheckOutDateChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="guests"><h3>Guests:</h3></label>
                                        <select id="guests" value={guests} onChange={handleGuestsChange}>
                                            <option value="1">1 Guest</option>
                                            <option value="2">2 Guests</option>
                                            <option value="3">3 Guests</option>
                                            <option value="4">4 Guests</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary"><h3>Check Availability</h3></button>
                            </form>
                        </div>
                    </section>
                    <div className='detail'>
                        <div className='names'>
                            <h3>SINCE 1994</h3>
                            <h1>  <br />Situated In Prime Position At<br /> The Foot Of The Slopes Of <br />Courchevel Moriond.</h1>
                            <section className='im'>
                                <Card className='c1' style={{ width: '18rem' }}>


                                    <Card.Body>
                                        <button><Card.Img src="img/c-1.png" alt="Card image" /></button>
                                        <Card.Text style={{ textAlign: "center" }}>
                                            <h2>DINNER</h2>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className='c2' style={{ width: '18rem' }}>


                                    <Card.Body>
                                        <Card.Title><button><Card.Img src="img/c-2.png" alt="Card image" /></button></Card.Title>
                                        <Card.Text style={{ textAlign: "center" }}>
                                            <h2> ITALIAN</h2>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className='c3' style={{ width: '18rem' }}>


                                    <Card.Body>
                                        <Card.Title><button><Card.Img src="img/c-3.jpg" alt="Card image" /></button></Card.Title>
                                        <Card.Text style={{ textAlign: "center" }}>
                                            <h2>  COFFEE</h2>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className='c4' style={{ width: '18rem' }}>


                                    <Card.Body>
                                        <Card.Title><button><Card.Img src="img/c-4.avif" alt="Card image" /></button></Card.Title>
                                        <Card.Text style={{ textAlign: "center" }}>
                                            <h2>  BAKE CAKE</h2>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className='c5' style={{ width: '18rem' }}>


                                    <Card.Body>
                                        <Card.Title><button><Card.Img src="img/c-5.jpg" alt="Card image" /></button></Card.Title>
                                        <Card.Text style={{ textAlign: "center" }}>
                                            <h2>COOKIES</h2>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </section>
                        </div>
                    </div>

                    <Row>
                        <div className="pp">
                            <h1>———ROOMS & SUITES————</h1>
                        </div>
                        <CardGroup>
                            <Card className='up'>
                                <div className='bl'>
                                    <Card.Img variant="top" src="img/o-2.jpg" style={{ height: "420px" }} />
                                </div>
                                <Card.Body>
                                    <Card.Title><h1>Junior Suite</h1>
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
                            <Card className='up' >
                                <div className='bl'>
                                    <Card.Img variant="top" src="img/o-3.jpg" style={{ height: "420px" }} />
                                </div>
                                <Card.Body>
                                    <h1> Executive Suite</h1>
                                    <p>⭐⭐⭐⭐⭐</p>
                                    <p>Starting Rate/Night
                                        ₹ 26,000 *</p>

                                    <div className='j'>
                                        🛌 3 Bed ‖ 🛀2 Bath ‖ 📶Wi-fi
                                    </div>
                                    <Card.Text>
                                        The richly decorated rooms offer air-conditioning, flat-screen satellite TV and seating area. Each room includes a mini-bar and a safety deposit box. The attached bathrooms are equipped with a bathtub, hairdryer and free toiletries.{' '}
                                    </Card.Text>
                                    <div className='bl'>
                                        <Button variant="primary" size="lg" href="/Details">
                                            View Details
                                        </Button>{' '}
                                        <Button variant="secondary" size="lg" href="/Register">
                                            BOOK Now
                                        </Button>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card className='up'>
                                <div className='bl'>
                                    <Card.Img variant="top" src="img/o-1.jpg" style={{ height: "420px" }} />
                                </div>
                                <Card.Body>
                                    <h1> Super Dulex</h1>
                                    <p>⭐⭐⭐⭐⭐</p>
                                    <p>Starting Rate/Night
                                        ₹ 36,000 *</p>

                                    <div className='j'>
                                        🛌 3 Bed ‖ 🛀2 Bath ‖ 📶Wi-fi
                                    </div>
                                    <Card.Text>
                                        The richly decorated rooms offer air-conditioning, flat-screen satellite TV and seating area. Each room includes a mini-bar and a safety deposit box. The attached bathrooms are equipped with a bathtub, hairdryer and free toiletries.
                                    </Card.Text>
                                    <div className='bl'>
                                        <Button variant="primary" size="lg" href="/Details">
                                            View Details
                                        </Button>{' '}
                                        <Button variant="secondary" size="lg" href="/Register">
                                            BOOK Now
                                        </Button>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Row>


                    <div className="pp">
                        <h1>———Our Services————</h1>

                        <CardGroup>
                            <Card className='up'>
                                <div className='bl'>
                                    <Card.Img variant="top" className='zm' src="img/g-1.jpg" style={{ height: "420px" }} />
                                </div>
                                <Card.Body>
                                    <h1> Spa & Fitness</h1>
                                    <p>⭐⭐⭐⭐⭐</p>


                                    <div className='j'>
                                        📶Wi-fi
                                    </div>
                                    <Card.Text>
                                        The richly decorated rooms offer air-conditioning, flat-screen satellite TV and seating area. Each room includes a mini-bar and a safety deposit box. The attached bathrooms are equipped with a bathtub, hairdryer and free toiletries.
                                    </Card.Text>
                                    <div className='bl'>
                                        <Button variant="primary" size="lg" href="/Details">
                                            View Details
                                        </Button>{' '}
                                        <Button variant="secondary" size="lg" href="/Register">
                                            BOOK Now
                                        </Button>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card className='up' onClick={() => Nav('/Details')} >
                                <div className='bl'>
                                    <Card.Img variant="top" className='zm' src="img/f-1.jpg" style={{ height: "420px" }} />
                                </div>
                                <Card.Body>
                                    <h1>Food & Restaurant</h1>
                                    <p>⭐⭐⭐⭐⭐</p>
                                    <div className='j'>
                                        📶Wi-fi
                                    </div>
                                    <Card.Text>
                                        The richly decorated rooms offer air-conditioning, flat-screen satellite TV and seating area. Each room includes a mini-bar and a safety deposit box. The attached bathrooms are equipped with a bathtub, hairdryer and free toiletries.{' '}
                                    </Card.Text>
                                    <div className='bl'>
                                        <Button variant="primary" size="lg" href="/Details">
                                            View Details
                                        </Button>{' '}
                                        <Button variant="secondary" size="lg" href="/Register">
                                            BOOK Now
                                        </Button>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card className='up'>
                                <div className='bl'>
                                    <Card.Img variant="top" className='zm' src="img/g-2.jpg" style={{ height: "420px" }} />
                                </div>
                                <Card.Body>
                                    <h1>Sports & Gaming</h1>
                                    <p>⭐⭐⭐⭐⭐</p>
                                    <div className='j'>
                                        📶Wi-fi
                                    </div>
                                    <Card.Text>
                                        The richly decorated rooms offer air-conditioning, flat-screen satellite TV and seating area. Each room includes a mini-bar and a safety deposit box. The attached bathrooms are equipped with a bathtub, hairdryer and free toiletries.
                                    </Card.Text>
                                    <div className='bl'>
                                        <Button variant="primary" size="lg" href="/Details">
                                            View Details
                                        </Button>{' '}
                                        <Button variant="secondary" size="lg" href="/Register">
                                            BOOK Now
                                        </Button>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </div>
                </Col>

                <div style={{ width: "100%" }}><iframe style={{ width: "50%", height: "600px" }}
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.maps.ie/distance-area-calculator.html">
                        measure acres/hectares on map</a></iframe>
                </div>




            </Row >

            <div className={`room-booking ${isOpen ? 'open' : ''}`}>
                <Button variant="primary" size="lg" className="booking-button" onClick={toggleBooking}>
                    Book Now <FaCalendarAlt className="calendar-icon" />
                </Button>
                <div className="booking-form">
                    <h3>Book Your Room</h3>
                    <form>
                        <label htmlFor="check-in-date">Check-In Date:</label>
                        <input type="date" id="check-in-date" name="check-in-date" required />
                        <label htmlFor="check-out-date">Check-Out Date:</label>
                        <input type="date" id="check-out-date" name="check-out-date" required />
                        <Button variant="primary" size="lg" type="submit" href='/about'>Submit</Button>
                    </form>
                    <button className="close-button" onClick={toggleBooking}>
                        <FaChevronRight className="close-icon" />
                    </button>
                </div>
            </div>
        </Container >


    )
}

export default Home;