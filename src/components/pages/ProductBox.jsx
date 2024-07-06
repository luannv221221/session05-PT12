import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function ProductBox() {
    return (
        <Container className='mt-5'>
            <Row>
                <Col lg={3}>
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col lg={9}>
                    <Row>
                        <Outlet></Outlet>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductBox