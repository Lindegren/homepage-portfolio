import React, { useDebugValue } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectImageUrl } from './imageSlice';
import { generateNewImage } from './imageSlice';

export default function Image() {
    const imageUrl = useSelector(selectImageUrl);
    const dispatch = useDispatch();

    return (
      <div className='Image'>
        <img src={imageUrl} width="300px" />
        <button onClick={dispatch(generateNewImage())} >Generate new image</button>
      </div>
    )
  }