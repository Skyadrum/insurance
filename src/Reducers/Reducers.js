import React from 'react';
import { combineReducers } from 'redux'

const policies = (listPolicies = [], action) => {
    switch(action.type){
        case "CREATE_POLICY":
            return [...listPolicies, action.payload.name]
        case "DELETE_POLICY":
            return listPolicies.filter((name) => { return name !== action.payload } )
        default:
            return listPolicies
    }
}

const bank = (totalAmount = 0, action) => {
    switch(action.type){
        case "CREATE_POLICY":
            let newAmount = totalAmount + action.payload.amount
            return newAmount
        case "CREATE_CLAIM":
            return totalAmount - action.payload.amount
        default: 
            return totalAmount
    }
}

    const reducer = combineReducers({
        policiesReducer: policies,
        bankReducer: bank
    })

    export default reducer


