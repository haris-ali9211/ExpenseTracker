import React, {useContext} from "react";

import { GlobleContext } from "../context/GlobleState";

export const AccountSummary = () => {

    const { transcation } = useContext(GlobleContext);
    const transcationAmount = transcation.map(transcation =>transcation.transcationAmount);

    const Income = transcationAmount
        .filter(transcation => transcation > 0)
        .reduce((acc, transcation) =>(acc += transcation), 0)
        .toFixed(2);

    const Expanse = transcationAmount
        .filter(transcation => transcation < 0)
        .reduce((acc, transcation) =>(acc += transcation), 0)
        .toFixed(2);
    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    ${Income}
                </p>
            </div>
            <div>
                <h4>Expanse</h4>
                <p className="money minus">
                    ${Expanse}
                </p>
            </div>
        </div>
    )
}