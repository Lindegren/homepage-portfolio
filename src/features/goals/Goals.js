import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoals } from './goalsSlice';
import Goal from './Goal';

export default function Goals(){
    const goals = useSelector(selectGoals);


    return (
      <div className='Goals'>
        {Object.keys(goals).map((goal) => <Goal text={goals[goal].text} id={goals[goal].id} />)}
      </div>
    )

    //
  };