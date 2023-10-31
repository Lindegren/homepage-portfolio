import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectImageUrls, selectImageDescription, fetchImage } from './imageSlice';

export default function Image() {
    const dispatch = useDispatch();
    const imageUrls = useSelector(selectImageUrls);
    const imageDescription = useSelector(selectImageDescription);

    const imageStatus = useSelector(state => state.image.status);
    const error = useSelector(state => state.image.error);

    useEffect(() => {
      if(imageStatus === 'idle'){
        dispatch(fetchImage());
      }
    }, [imageStatus, dispatch]);

    const onClick = () => {
      dispatch(fetchImage());
    }

    let content;

    if (imageStatus === 'loading'){
      content = <p>We're loading a photo...</p>
    } else if (imageStatus === 'succeeded'){
      content = 
        <div className='Image'>
          <img src={imageUrls.regular} alt={imageDescription} width="300px" />
          <button onClick={onClick} >Generate new image</button>
        </div>;
    } else if (imageStatus === 'failed'){
      content = <div>{error}</div>
    }


    return (
      <section className='ImageSection'>
        {content}
      </section>
    )
  }