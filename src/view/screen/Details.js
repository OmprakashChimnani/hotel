import { Container, Row, Col, Figure, Button, Nav, NavDropdown, Navbar, Carousel, Card, CardGroup, Placeholder, Form } from 'react-bootstrap';
export default function Details() {
    return (
        <>
            <container>
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

            </container >
        </>
    )
}