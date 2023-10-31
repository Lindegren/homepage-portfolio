import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCompleted, removeGoal, checkCompleted } from './goalsSlice';

export default function Goal({text, id}) {

    const dispatch = useDispatch();

    let content; 

    const completed = useSelector(checkCompleted(id));

    const markCompleted = () => {
        // const goalCard = document.getElementById(id);
        // goalCard.style.backgroundColor = 'green';
        dispatch(toggleCompleted({id: id}))
    }

    const remove = () => {
        dispatch(removeGoal({id: id}));
    }

    if (completed) {
      const date = new Date();
      content = 
        <>
          <div className="CompletedGoal">
            <p> {text} </p>
            <p>This goal was completed on {date.toDateString()}</p>
            <button onClick={remove} >Remove goal</button>
            <button onClick={markCompleted} >Mark uncompleted</button>
          </div>
        </>
    } else {
      content = 
        <>
          <div className="Goal" id={id} >
            <p> {text} </p>
            <button onClick={remove} >Remove goal</button>
            <button onClick={markCompleted} >Mark completed</button>
          </div>
        </>
    }

    return (
      <section className='GoalTable'>
        {content}
      </section>
    )
  };

