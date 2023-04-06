import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  url: string;
}

const DoubleBorderCard: React.FC<CardProps> = ({ imageUrl, title, url }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Link className='' href={url}>
        {' '}
        <div className='flex   rounded-2xl  max-w-sm  justify-center items-center '>
          <div
            className={`border-2  rounded-2xl  hover:text-red-500 hover:border-red-500 border-gray-300 p-4 duration-500  cursor-pointer`}
          >
            <div className='relative  overflow-hidden w-80 h-44'>
              <Image
                width={1000}
                height={1000}
                src={imageUrl}
                alt='resim'
                className='absolute   top-0 left-0 w-full h-full  transition duration-300 hover:scale-110'
              />
            </div>
            <h3 className={`text-base mt-2 ml-2 hover:text-red-500 text-gray-700}`}>{title}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DoubleBorderCard;
