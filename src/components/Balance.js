import React, {useContext} from 'react';

import { GlobleContext } from "../context/GlobleState";

export const Balance = () => {

    const { transcation } = useContext(GlobleContext);
    const transcationAmount = transcation.map(transcation =>transcation.transcationAmount);
    const balance = transcationAmount.reduce((acc,item) => (acc += item), 0).toFixed(2);
    console.log("55",transcationAmount)
    return(
        <div>
            <h4>
                Current Balance
            </h4>
            <h1>
                ${balance}
            </h1>
        </div>
    )
}