import React from'react';
import'./ImageLinForm.css';

const ImageLinForm = ({onInputChange, onButtonSubmit}) => {
  return(
    <div>
        <p className='f3'>
          {'This Magic Brain will detect faces in your pictures. Give it a try!'}
        </p>
        <div className='center'>
          <div className='form center pa4  br3 shadow-5'>
              <input className=' f4 pa2 w-70 center' type='text' 
              onChange={onInputChange} />
              <button className=' w-50 grow f4 link ph3 pv2 dib white bg-light-purple center' 
              onClick={onButtonSubmit} text='Detect' > </button>
          </div>
        </div> 
    </div>
  );
}

export default ImageLinForm;