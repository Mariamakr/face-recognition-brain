import React from 'react';

const FaceRecognition = ({imageUrl}) => {
   return(
   <div className='center ma'>
    <div className= 'absolute mt2'> 
     <img src={imageUrl} alt='sample' width='500px' heigh='auto'></img>
    </div>
   </div>
   );
   }

   export default FaceRecognition;