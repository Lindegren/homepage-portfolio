import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuote, fetchQuote } from './quoteSlice';


export default function QuoteContainer() {
    const dispatch = useDispatch();
    const quote = useSelector(selectQuote);

    const quoteStatus = useSelector( state => state.quote.status);
    const error = useSelector(state => state.quote.error);

    useDispatch(() => {
      if (quoteStatus === 'idle'){
        dispatch(fetchQuote());
      }
    }, [quoteStatus, dispatch]);

    let content;

    if(quoteStatus === 'loading'){
      content = <p>We're loading...</p>
    } else if(quoteStatus === 'successful') {
      content = 
      <div className='Quote'>
        <p>{quote}</p>
        <button onClick={dispatch(fetchQuote())} >Generate new quote</button>
      </div>
    } else if(quoteStatus === 'failed'){
      content = <div>{error}</div>
    };
    
    return(
      <section className='QuoteSection'>
        {content}
      </section>
    )
  };
  
