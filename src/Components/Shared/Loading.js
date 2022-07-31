import React from 'react';
import loading from '../Shared/Loading';

const Loading = () => {
  return (
    <div className='flex items-center justify-center'>
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;