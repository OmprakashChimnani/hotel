import { Container, Row, Col, Button, Form, Card, CardGroup, Nav } from "react-bootstrap";
import { useState, handleInputChange } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const [formData, setFormData] = useState({
        phone: '',
        checkInDate: '',
        checkOutDate: ''
    });
    const nav = useNavigate()
    // const [file, setFile] = useState("");
    // const [fileName, setFileName] = useState("")

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Number, setNumber] = useState('');




    let submitregister = async () => {
        // console.log(file);
        // console.log(fileName);

        const formdata = new FormData();
        // formdata.append("file",file)
        // formdata.append("filename",fileName)
        let data = JSON.stringify(Object.fromEntries(formdata));

        console.log(data);
        let params = {
            username: name,
            email: email,
            password: password,
            // image:file
        }
        console.log(params);
        try {
            let res = await axios.post("register", params).catch(err => alert(err))
            console.log(res.data);
            let { success, message } = res.data
            if (success) {
                alert(message)
                nav("/Login")

            }
            else {
                alert(message)
            }
        } catch (error) {
            console.log("error==", error);
            alert(error)
        }
        setEmail("")
        setPassword("")
        setName("")
    }
    return (
        <>

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
                    <Card className='up'>
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
            <Container className="register">
                <Row>
                    <Col>
                        <h1>Sign Up</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter name" value={name} required onChange={(d) => setName(d.target.value)} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" value={email} required onChange={(d) => setEmail(d.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicpassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password " value={password} required onChange={(d) => setPassword(d.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicphone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="phone" placeholder="Enter Phone No. " value={Number} required onChange={(d) => setNumber(d.target.value)} />
                            </Form.Group>

                            <label>
                                Check-In Date:
                                <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleInputChange} />
                            </label>
                            <label>
                                Check-Out Date:
                                <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleInputChange} />
                            </label>
                            <Button variant="primary" onClick={submitregister}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Register;
