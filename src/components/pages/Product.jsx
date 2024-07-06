import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import { Link } from 'react-router-dom'
function Product() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        callAPI();
    }, [])

    const callAPI = () => {
        fetch("http://localhost:8080/api/v1/products").then(
            (respone) => respone.json()
        ).then((data) => {
            console.log("Dư lieu", data);
            setProducts(data.content);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            {
                products.map((item) => {
                    return (
                        <Col lg={4} key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.productName}</Card.Title>
                                    <Card.Text>
                                        {item.image}
                                        <img src='http:localhost:8080/Screenshot (1).png' />
                                    </Card.Text>
                                    <Link to={'detail/' + item.id} className='btn btn-primary'>Xem ngay</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </>
    )
}

export default Product