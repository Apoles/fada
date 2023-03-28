import React from 'react';
import FadeUpAnimation from './ScroolAnimationUp';

const CompanyDes: React.FC<{ imageSrc: string; heading: string; description: string; buttonText: string }> = ({
  imageSrc,
  heading,
  description,
  buttonText,
}) => {
  return (
    <div className='flex flex-col md:flex-row items-start mt-12 justify-center h-screen  font-tilt w-full bg-[url("/firma.jpg")] bg-no-repeat bg-cover bg-center '>
      <div className='w-full md:w-1/2 p-6'></div>
      <div className='w-full md:w-1/2 p-6 space-y-8    '>
        <h1 className='text-5xl font-bold mb-4'>{heading}</h1>
        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>
          {buttonText}
        </button>
        <p className='text-gray-700 mb-4 text-xl '>{description}</p>
      </div>
    </div>
  );
};

export default CompanyDes;
