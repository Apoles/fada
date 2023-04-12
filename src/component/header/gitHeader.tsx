import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Git() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let prevScrollY = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setIsScrollingDown(prevScrollY < currentScrollY);
      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrollingDown]);

  return (
    <div
      className='

      flex
      md:px-24
      md:py-6
      lg:px-32 
    
      sticky  backdrop:blur-lg  top-0 z-30 w-full
    
    '
    >
      <div
        className={`
          flex flex-wrap
          items-center
          max-md:justify-between
          max-md:m-0
          justify-evenly
          w-full
          h-20
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
          rounded-full
          backdrop-blur-sm bg-white/100    
          ${isScrollingDown ? 'hidden  duration-200' : 'bg-white shadow-xl '}    
        `}
      >
        <div>
          <Link prefetch={false} href='/'>
            <Image src='/Fada Logo 1@4x.png' alt='me' width='150' height='150'></Image>
          </Link>
        </div>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='menu-button'
            className='h-6 w-6 cursor-pointer  md:hidden block'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto`} id='menu'>
          <ul
            className='
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0'
          >
            <li>
              <Link className='md:p-4 py-2 block hover:text-purple-400' href='/Company'>
                Company
              </Link>
            </li>
            <li>
              <Link className='md:p-4 py-2 block hover:text-purple-400' href='/product'>
                Product
              </Link>
            </li>
            <li>
              <Link className='md:p-4 py-2 block hover:text-purple-400' href='/news'>
                Blog
              </Link>
            </li>
            <li>
              <Link className='md:p-4 py-2 block hover:text-purple-400 ' href='/contacy'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Git;
