import { Container, Row, Col, Figure, Button, Nav, NavDropdown, Navbar, Carousel, Card, CardGroup, Placeholder, Form } from 'react-bootstrap';
import React, { useState, useCallback, rooms } from 'react';
export default function Details() {
    return (
        <>
            <container>
                {/* <section className="room-list">
                    <div className="container">
                        <h2>Rooms</h2>
                        <div className="row">
                            {rooms.map(room => (
                                <div className="col-md-4" key={room.id}>
                                    <div className="card">
                                        <img className="card-img-top" src={room.image} alt={room.name} />
                                        <div className="card-body">
                                            <h3 className="card-title">{room.name}</h3>
                                            <p className="card-text">{room.description}</p>
                                            <p className="card-price">${room.price} / night</p>
                                            <a href={`/rooms/${room.id}`} className="btn btn-primary">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}
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