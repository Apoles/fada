import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  image: string;
  title: string;
  url: string;

  children?: React.ReactNode;
};

const ProductCard = (props: Props) => {
  return (
    <div className=' hover:border-red-500 duration-500 hover:shadow-2xl  pl-2 pr-2 pt-2 pb-2 w-72  justify-center  flex p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
      <Link href={`/${props.url}`}>
        <div className='  m-0 p-0     w-full  items-center justify-center   '>
          <Image
            width={200}
            height={200}
            className='w-full  brightness-100  h-36 transition duration-300 ease-in-out hover:scale-110 max-w-xs'
            src={props.image}
            alt='alt'
          ></Image>
          <div className=''>
            <br></br>
            <h2 className=' text-lg text-center  text font-medium text-gray-600 '> {props.title}</h2>

            <button></button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
