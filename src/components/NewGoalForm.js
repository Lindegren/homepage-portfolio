import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addGoal } from "../features/goals/goalsSlice";

export default function NewGoalForm() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addGoal({text: input, id: uuidv4()}));
        setInput("");
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <section>
            <form className='TaskInputForm' onSubmit={handleSubmit}>
                <input  className='TaskInputField' 
                        type="text" 
                        placeholder="Input your next goal" 
                        value={input}
                        onChange={handleChange}
                />
            </form>
        </section>
    )
}