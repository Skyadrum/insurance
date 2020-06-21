import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import logo from './dmc.png'
import './Head.css'

export default class Head extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Navbar.Brand>
                        <img src={logo} alt="Devil May Cry" className='logo'/>
                        <span className="head">Insurance Carrier</span>
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        {/* <Nav.Link >Pólizas</Nav.Link>
                        <Nav.Link >Reclamos</Nav.Link> */}
                        {/* <Button variant="outline-primary" className='btn' >Polices</Button>
                        <Button variant="outline-success" className='btn'>Claims</Button>
                        <Button variant="outline-warning" className='btn'>DMC Info</Button> */}
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
