import React  from 'react';
import { Card, CardGroup, Button, ListGroup } from 'react-bootstrap'

import './Dash.css'

function Dash () {
    
    
        return ( 
            <div>
                <CardGroup>
                    <Card className="cards" border="primary">
                    <Card.Header as="h5" className='header-polices'>Polices</Card.Header>
                        <Card.Body>
                        <Card.Title>Description</Card.Title>
                        <Card.Text>
                            You can create a <b>new policy</b> in this section.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button type="button" size="lg" block className='header-polices'>Show Polices</Button>
                        </Card.Footer>
                    </Card>

                    <Card className="cards" border="success">
                    <Card.Header as="h5" className='header-claims'>Claims</Card.Header>
                        <Card.Body>
                        <Card.Title>Description</Card.Title>
                        <Card.Text>
                            You can create a <b>new claim</b> in this section.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button type="button" size="lg" block className='header-claims'>Show Claims</Button>
                        </Card.Footer>
                    </Card>

                    <Card className="cards" border="warning">
                    <Card.Header as="h5" className='header-info'>General Info</Card.Header>
                        <Card.Body>
                        <Card.Title>Pick One</Card.Title>
                        <ListGroup>
                            <ListGroup.Item> <a>Show Polices</a> </ListGroup.Item>
                            <ListGroup.Item> <a>Show Claims</a> </ListGroup.Item>
                            <ListGroup.Item> <a>Insurance Info</a> </ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                        {/* <Card.Footer>
                        <Button type="button" size="lg" block className='header-info'>Show Info</Button>
                        </Card.Footer> */}
                    </Card>
                    </CardGroup>
            </div>
         );
}
 
export default Dash;