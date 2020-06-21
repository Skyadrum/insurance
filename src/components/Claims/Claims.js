import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import './Claims.css'

export default class Claims extends React.Component {
    render() {
        return (
            <div>
                <Card className='cards' border="primary">
                <Card.Header as="h5" className='card-header'>New Claim</Card.Header>
                    <Card.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>Name</Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" placeholder="Name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>Amount</Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" placeholder="EX: $100.00" />
                            </Col>
                        </Form.Group>
                    
                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Request Claim</Button>
                            </Col>
                        </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
