import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { products } from '../../data/product'
import { Link } from 'react-router-dom'
function Product() {
    return (
        <>
            {
                products.map((item) => {
                    return (
                        <Col lg={4} key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
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