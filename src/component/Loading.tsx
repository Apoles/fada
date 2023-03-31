import { useState } from 'react';

const LogoSpinner = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className='flex items-center justify-center h-full'>
      {loading && (
        <div className='absolute flex items-center justify-center w-full h-full bg-white z-50'>
          <img
            src='https://www.freepnglogos.com/uploads/fenerbahce-logo-png/fenerbahce-spor-kulubu-1907-transparent-logo-png-0.png'
            className='h-16 w-16 animate-spin'
          />
        </div>
      )}
      <img className='w-32 h-32 object-contain' src='/logo.png' onLoad={() => setLoading(false)} alt='Logo' />
    </div>
  );
};

export default LogoSpinner;
