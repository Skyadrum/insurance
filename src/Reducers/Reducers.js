import React from 'react';

class Reducers extends React.Component{
    policies = (listPolicies = [], action) => {
        switch(action.type){
            case "CREATE_POLICY":
                return [...listPolicies, action.payload.name]
            case "DELETE_POLICY":
                return listPolicies.filter((name) => { return name !== action.payload } )
            default:
                return listPolicies
        }
    }

    bank = (totalAmount = 0, action) => {
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

}