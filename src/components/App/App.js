import React from 'react'
import Header from '../Head/Head'
import Polices from '../Polices/Polices'
import Claims from '../Claims/Claims'

import './App.css'


export default class App extends React.Component {
    render() {
        return (
            <div className="main-container">
                <Header/>
                {/* <Polices/> */}
                <Claims/>
            </div>
        )
    }
}
