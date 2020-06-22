import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createPolicy, deletePolicy, claimPolicy } from '../../Actions/Actions'
import './Polices.css'


function Polices() {

    const nameRef = React.createRef()
    const amountRef = React.createRef()
    

    const handlerSubmit = (event) => {
        event.preventDefault()

        let policy = {
            name: nameRef.current.value,
            amount: amountRef.current.value
        }

        console.log('Poliza', policy)
        
    }

    
    return (
        <div className='cards'>
            <Card  border="primary">
            <Card.Header as="h5" className='card-header'>Create a New Policy</Card.Header>
                <Card.Body>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>Name</Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" ref={ nameRef } placeholder="Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>Amount</Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" placeholder="EX: $100.00" ref={ amountRef }/>
                        </Col>
                    </Form.Group>
                
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button onClick={handlerSubmit}>Create</Button>
                        </Col>
                    </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Polices
