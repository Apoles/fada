import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Company } from './HeaderStuff/Company';
import { Products } from './HeaderStuff/Product';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

export const HeaderBottom = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 150) {
        setTimeout(() => {
          setAnimateHeader(true);
        }, 1000);
      } else
        setTimeout(() => {
          setAnimateHeader(true);
        }, 1000);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);
  const [data, setData] = useState(true);

  return (
    <div
      className={`sticky  backdrop:blur-lg  top-0 z-30 w-full bg-white ${
        animateHeader
          ? ''
          : 'backdrop-filter  backdrop-blur-sm bg-white fixed z-10 trasition ease-in-out duration-5s00s'
      }`}
    >
      <motion.div className='progress-bar' style={{ scaleX }} />

      <div className='flex justify-evenly items-center   p-6 '>
        <Link prefetch={false} href='/'>
          <Image src='/Fada Logo 1@4x.png' alt='me' width='150' height='150'></Image>
        </Link>

        <div className='flex items-center space-x-6 max-sm:hidden'>
          <div className=''>
            <Link prefetch={false} href={'/company'}>
              <button className='peer text-xs font-bold  hover:text-[#960018] text-black'>COMPANY</button>
            </Link>
            <Company></Company>
          </div>

          <div>
            <Link prefetch={false} href={'/product'}>
              <button className='peer text-xs font-bold  hover:text-[#960018] text-black'>PRODUCT</button>
            </Link>
            <Products></Products>
          </div>
          <div className='text-xs font-bold'>
            <Link prefetch={false} href={'/news'}>
              <button className='peer text-xs font-bold  hover:text-[#960018] text-black'>NEWS</button>
            </Link>
          </div>

          <div className='w-24  rounded-full	text-xs p-1  border-[#960018] border-2	 text-center  hover:bg-[#960018] hover:text-white hover:duration-300	'>
            <Link prefetch={false} href='/contact'>
              CONTACT
            </Link>
          </div>
        </div>
        <button
          className='sm:hidden '
          onClick={() => {
            setData(!data);
          }}
        >
          <svg
            className={`fill-current h-3 w-3 ${data ? 'hidden' : 'block'}`}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${data ? 'block' : 'hidden'}`}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
          </svg>{' '}
        </button>
      </div>
      {data ? (
        <p className='hidden    '></p>
      ) : (
        <nav className='sm:hidden bg-white border-gray-200 dark:bg-gray-900'>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <div className='  w-full md:block md:w-auto' id='navbar-default'>
              <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                <li>
                  <Link href='/company'>
                    {' '}
                    <a className='block py-2 pl-3 pr-4 text-black rounded md:bg-transparent ' aria-current='page'>
                      Company
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/product'>
                    {' '}
                    <a className='block py-2 pl-3 pr-4 text-black' aria-current='page'>
                      Product
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/news'>
                    {' '}
                    <a className='block py-2 pl-3 pr-4 text-black ' aria-current='page'>
                      News
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href='contact'>
                    {' '}
                    <a className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
      <motion.div
        className='progress-bar  top-0 left-0 right-0 h-0.5 origin-left sticky  z-30	 bg-[#960018] '
        style={{ scaleX }}
      />
    </div>
  );
};
