import React, { useContext } from "react";

import { GlobleContext } from "../context/GlobleState";

import { Transcation } from "./Transcation";

export const TransactionHistory = () => {
    const { transcation } = useContext(GlobleContext);
    // console.log("=====",transcation.transcationAmount)
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transcation.map(transcation =>(
                    <Transcation key={transcation.id} transcation={transcation}/>
                ))}
            </ul>
        </div>
    )
}