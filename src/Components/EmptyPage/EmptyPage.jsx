import React from 'react'
 import emptyDataImage from '../../Assets/Images/empty.jpeg'; // Replace with your image file

function EmptyPage() {
    return (
    <div className='flex justify-center align-middle self-center  h-96'>
    <img src={emptyDataImage} alt="" />
    </div>
  );
}

export default EmptyPage