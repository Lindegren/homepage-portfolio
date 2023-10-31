import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markGoalCompleted, removeGoal } from './goalsSlice';

export default function Goal({text, id}) {

    const dispatch = useDispatch();

    const markCompleted = () => {
        const goalCard = document.getElementById(id);
        goalCard.style.backgroundColor = 'green';
        dispatch(markGoalCompleted({id: id}))
    }

    const remove = () => {
        dispatch(removeGoal({id: id}));
    }

    return (
      <div className="Goal" id={id} >
        <p> {text} </p>
        <button onClick={remove} >Remove task</button>
        <button onClick={markCompleted} >Mark completed</button>
      </div>
    )
  };

