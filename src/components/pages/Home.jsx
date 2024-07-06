import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'

function Home() {
    return (
        <>

            <Container>
                <Row>
                    <Card className="text-center">
                        <Card.Header>Home Page</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default Home