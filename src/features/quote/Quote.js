import React, { useDebugValue } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuote, generateQuote } from './quoteSlice';


export default function QuoteContainer() {
    const quote = useSelector(selectQuote);
    const dispatch = useDispatch();
    
    return(
      <div className='Quote'>
        <p>{quote}</p>
        <button onClick={dispatch(generateQuote)} >Generate new quote</button>
      </div>
    )
  };
  
