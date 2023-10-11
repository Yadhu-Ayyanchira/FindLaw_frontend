import React from 'react'
import { RingLoader } from 'react-spinners';


function Loader() {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-opacity-30 bg-blue-gray-50'>
      <RingLoader color="#36d7b7" />
    </div>
  );
}

export default Loader