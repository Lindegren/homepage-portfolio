import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuote, fetchQuote } from './quoteSlice';


export default function QuoteContainer() {
    const dispatch = useDispatch();
    const quote = useSelector(selectQuote);

    const quoteStatus = useSelector( state => state.quote.status);
    const error = useSelector(state => state.quote.error);

    useEffect(() => {
      if (quoteStatus === 'idle'){
        dispatch(fetchQuote());
      }
    }, [quoteStatus, dispatch]);

    const onClick = () => {
      dispatch(fetchQuote());
    }

    let content;

    if(quoteStatus === 'loading'){
      content = <p>We're loading...</p>
    } else if(quoteStatus === 'succeeded') {
      content = 
      <div className='Quote'>
        <p className='QuoteContent'>{quote.quote.content}</p>
        <p className='QuoteAuthor'>{quote.quote.author}</p>
        <button onClick={onClick} >Generate new quote</button>
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
  
