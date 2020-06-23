import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import logo from './dmc.png'
import './Head.css'
import { BrowserRouter, Link } from 'react-router-dom'
import { Polices } from '../Polices/Polices'
import { Claims } from '../Claims/Claims'

function Head () {

    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand>
                    <img src={logo} alt="Devil May Cry" className='logo'/>
                    <span className="head">Insurance Carrier</span>
                </Navbar.Brand>
                <Nav className="ml-auto">
                  <BrowserRouter>
                    <div>
                      <Link to="/Polices">
                        <Button variant="outline-primary" className='btn' >Polices</Button>
                      </Link>

                      <Link to="/Claims">
                        <Button variant="outline-success" className='btn' >Claims</Button>
                      </Link>
                    </div>
                  </BrowserRouter>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Head
