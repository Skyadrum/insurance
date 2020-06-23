import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Head/Head'
import Polices from '../Polices/Polices'
import Claims from '../Claims/Claims'
import Dash from '../Dash/Dash'
// import { createPolicy, deletePolicy, claimPolicy } from './Actions/Actions'

import './App.css'


function App() {

    return (
        <div className="main-container">
            <Header/>
            <Dash/>
        </div>
    );
}

export default App
