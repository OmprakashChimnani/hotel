// import { Container, Row, Col } from "react-bootstrap";
// import '../style/style.css'
// import { useEffect, useState } from "react";
// import axios from "axios";
// export default function Addtocart() {
//     const [cartdata, setCart] = useState('')
//     useEffect(() => {
//         async function show() {
//             let res = await axios.post('showtocart', {})
//             console.log(res.data);
//             setCart(res.data)
//         }
//         show()
//     }, [])

//     console.log(cartdata);
//     return (
//         <Container>
//             <Row>
//                 <Col className="col-lg-12">
//                     <div class="tm-list border mt-5">
//                         <div class="tm-list-item d-flex">
//                             <img src="img/c-1.png" alt="Image" class="tm-list-item-img" height={200} />
//                             <div class="tm-black-bg tm-list-item-text mx-5">
//                                 <h3 class="tm-list-item-name">Iced Americano<span class="tm-list-item-price">$10.25</span></h3>
//                                 <p class="tm-list-item-description">Here is a short description for the first item. Wave Cafe Template is provided by Tooplate.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }
