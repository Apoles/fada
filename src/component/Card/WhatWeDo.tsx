import { useState, useEffect } from 'react';

export const WhatWeDo = () => {
  return (
    <div
      className='w-full h-full flex flex-col items-center  text-black bg-white p-12  
       '
    >
      <p className=' w-4/6  text-2xl font-light text-gray-500'>
        We help businesses and individuals around the world to bring their products to life. We can pick up your project
        practically at any stage. Here is what we do:
      </p>
      <div></div>
      <div className='group text-sm   cursor-pointer p-6'>
        <h1 className='text-6xl'>PRODUCT CONCEPT</h1>
        <p
          className=' 
        transition-all transform
        translate-y-8 opacity-0
        group-hover:opacity-100
        group-hover:translate-y-0 
        duration-700
       
       font-light text-gray-600
       text-2xl 
       '
        >
          Hover on me and watch me change
        </p>
      </div>
      <div className='group  cursor-pointer p-6'>
        <h1 className='text-6xl'>DESIGN AND USER EXPERIENCE</h1>
        <p
          className=' 
        transition-all transform
        translate-y-8 opacity-0
        group-hover:opacity-100
        group-hover:translate-y-0 
        duration-700
        font-light text-gray-600
        text-2xl '
        >
          Hover on me and watch me change
        </p>
      </div>
      <div className='group  cursor-pointer p-6'>
        <h1 className='text-6xl'>MANUFACTURING</h1>
        <p
          className=' 
        transition-all transform
        translate-y-8 opacity-0
        group-hover:opacity-100
        group-hover:translate-y-0 
        duration-700
        font-light text-gray-600 
        text-2xl'
        >
          Hover on me and watch me change
        </p>
      </div>
      <div className='group  cursor-pointer p-6'>
        <h1 className='text-6xl'>SMART SOLUTIONS</h1>
        <p
          className=' 
        transition-all transform
        translate-y-8 opacity-0
        group-hover:opacity-100
        group-hover:translate-y-0 
        duration-700
        font-light text-gray-600 
        text-2xl'
        >
          Hover on me and watch me change
        </p>
      </div>
    </div>
  );
};
