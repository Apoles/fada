import Image from 'next/image';
import React from 'react';

interface CardProps {
  imgUrl: string;
  title: string;
  description: string;
}

const ImageCard: React.FC<CardProps> = ({ imgUrl, title, description }) => {
  return (
    <>
      <div className='flex flex-col items-start justify-center   rounded-md  '>
        {' '}
        <div className='bg-white rounded-2xl overflow-hidden border-white border-2 shadow-lg'>
          <div className='relative'>
            <Image
              width={200}
              height={200}
              className='w-52 h-52 transition duration-300 ease-in-out hover:scale-105'
              src={imgUrl}
              alt={title}
            />
          </div>
        </div>
        <div className='py-3 px-3'>
          <p className='text-gray-700'>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
