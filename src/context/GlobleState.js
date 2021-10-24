import React, { createContext, useReducer } from "react";
//Importing AppReducer

import AppReducer from './AppReducer';

//Create the initial state

const initialState = {
    transcation: [
        {
            id: 1,
            description: "income 01",
            transcationAmount: 130
        },
        {
            id: 2,
            description: "expence 01",
            transcationAmount: -10
        },
        {
            id: 3,
            description: "income 02",
            transcationAmount: 150
        }
    ]
}

//Create the Globle Context
export const GlobleContext = createContext(initialState);

// Create a Provider for Globle Context
export const GloableProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); 

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transcation){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transcation
        });
    // console.log("213",typeof transcation)
    }

    return (
        <GlobleContext.Provider value={
            {
                transcation: state.transcation,
                deleteTransaction,
                addTransaction
            }
            
        }>
            {children}
        </GlobleContext.Provider>
    )

}