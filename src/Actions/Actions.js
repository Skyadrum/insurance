import React from 'react';

class Actions extends React.Component{

    createPolicy = (name, amount) => {
        //Action (poliza)
        return {
            type: 'CREATE_POLICY',
            payload: {
                name: name,
                amount: amount
            }
        }
    }

    deletePolicy = (name) => {
        return {
            type: 'DELETE_POLICY',
            payload: name
        }
    }

    claimPolicy = (name, amount) => {
        return {
            type: 'CREATE_CLAIM',
            payload: {
                name: name,
                amount: amount
            }
        }
    }
    
}
