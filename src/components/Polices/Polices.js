import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createPolicy, deletePolicy, claimPolicy } from '../../Actions/Actions'
import './Polices.css'


export default class Polices extends React.Component {

    handlerSubmit = (event) => {
        event.preventDefault()
        const name = event.target[0].value
        const amount = event.target[1].value

        this.props.onSend({ name, amount });
        console.log(name);

    }

    send = (data) => {
        console.log(data);
    }

    render() {

        return (
            <div className='cards'>
                <Card  border="primary">
                <Card.Header as="h5" className='card-header'>Create a New Policy</Card.Header>
                    <Card.Body>
                    <Form onSubmit={ this.handlerSubmit }>
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
                            <Button type="submit">Create</Button>
                            </Col>
                        </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
