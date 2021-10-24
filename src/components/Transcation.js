import React, { useContext } from "react";

import { GlobleContext } from "../context/GlobleState";

export const Transcation = ({transcation}) => {
    // console.log("====>",transcation.id);
    const sign = transcation.transcationAmount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobleContext);
    return (
        <div>
        <li className={transcation.transcationAmount < 0 ? 'minus' : 'plus'}>
            {transcation.description}
            <span>{sign}${Math.abs(transcation.transcationAmount)}</span>
            <button className="delete-btn"
               onClick={ () => deleteTransaction(transcation.id)} >x</button>
        </li>
    </div>
    )
}
