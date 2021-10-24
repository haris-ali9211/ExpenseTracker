import React, { useState, useContext } from "react";
import { GlobleContext } from "../context/GlobleState";

export const AddTranscation = () => {
    const [description, setDescription] = useState('');
    const [transcation, setTranscation] = useState(0);
    console.log("alkd",transcation)
    const { addTransaction } = useContext(GlobleContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTranscation = {
            id: Math.floor(Math.random() * 100000000),
            description,
            transcation: 4
        }
        addTransaction(newTranscation);
    }

    return (
        <div>
            <h3>Add New Add Transcation</h3>
            <form onSubmit={onSubmit}>
                <div className="form-contrl">
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input type="text"
                        id="description"
                        placeholder="Detail of Transcation"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-contrl">
                    <label htmlFor='transcationAmount'>
                        Transcation Amount
                    </label>
                    <input type="text"
                        id="transcationAmount"
                        placeholder="Enter Trancation Amount"
                        value={transcation}
                        onChange={(e) => setTranscation(e.target.value)}
                    />
                </div>
                <button className="btn"> Add Transcation</button>
            </form>
        </div>
    )
}