import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
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
                        <Nav.Link >Pólizas</Nav.Link>
                        <Nav.Link >Reclamos</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
