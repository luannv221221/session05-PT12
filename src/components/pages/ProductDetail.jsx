import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { products } from '../../data/product';

function ProductDetail() {
    const params = useParams();
    let id = params.id;
    let product = products.find((pro) => pro.id == id);

    return (
        <>
            <Col lg={6}>
                <Image className='w-100' src={product.image}></Image>
            </Col>
            <Col lg={6}>
                <h1>{product.name}</h1>
            </Col>

        </>
    )
}

export default ProductDetail