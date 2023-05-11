import { handleSubmit, checkInDate, handleCheckInDateChange, checkOutDate, handleCheckOutDateChange, guests, handleGuestsChange, useState } from 'react';
import { Container, Row, Col, Figure, Button, Nav, NavDropdown, Navbar, Carousel, Card, CardGroup, Placeholder, Form } from 'react-bootstrap';
function About() {
    // const [checkInDate, setCheckInDate] = useState('');
    // const [checkOutDate, setCheckOutDate] = useState('');
    // const [guests, setGuests] = useState('');

    // const handleCheckInDateChange = (event) => {
    //     setCheckInDate(event.target.value);
    // };

    // const handleCheckOutDateChange = (event) => {
    //     setCheckOutDate(event.target.value);
    // };

    // const handleGuestsChange = (event) => {
    //     setGuests(event.target.value);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Code to handle form submission
    // };
    return (
        <Container>
            <section className="hotel-availability-check">
                <div className="container">
                    <h2>Check Availability</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="check-in-date">Check-In Date:</label>
                                <input type="date" id="check-in-date" value={checkInDate} onChange={handleCheckInDateChange} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="check-out-date">Check-Out Date:</label>
                                <input type="date" id="check-out-date" value={checkOutDate} onChange={handleCheckOutDateChange} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="guests">Guests:</label>
                                <select id="guests" value={guests} onChange={handleGuestsChange}>
                                    <option value="1">1 Guest</option>
                                    <option value="2">2 Guests</option>
                                    <option value="3">3 Guests</option>
                                    <option value="4">4 Guests</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Check Availability</button>
                    </form>
                </div>
            </section>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="img/d-1.jpg" />
                    <Card.Body>
                        <Card.Title>Junior Suite</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
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
                <Card className='click' onClick={() => Nav('/Details')}>
                    <Card.Img variant="top" src="img/d-2.jpg" />
                    <Card.Body>
                        <Card.Title>Executive Suite</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
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
                <Card>
                    <Card.Img variant="top" src="img/d-3.jpg" />
                    <Card.Body>
                        <Card.Title>Super Dulex</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
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
        </Container>
    )
}
export default About