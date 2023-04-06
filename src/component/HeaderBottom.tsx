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
        <Link href='/'>
          <Image src='/Fada Logo 1@4x.png' alt='me' width='150' height='150'></Image>
        </Link>

        <div className='flex items-center space-x-6 max-sm:hidden'>
          <div className=''>
            <Link href={'/company'}>
              <button className='peer text-xs font-bold  hover:text-[#960018] text-black'>COMPANY</button>
            </Link>
            <Company></Company>
          </div>

          <div>
            <Link href={'/product'}>
              <button className='peer text-xs font-bold  hover:text-[#960018] text-black'>PRODUCT</button>
            </Link>
            <Products></Products>
          </div>
          <div className='text-xs font-bold'>
            <Link href={'/news'}>
              <button className='peer text-xs font-bold  hover:text-[#960018] text-black'>NEWS</button>
            </Link>
          </div>

          <div className='w-24  rounded-full	text-xs p-1  border-[#960018] border-2	 text-center  hover:bg-[#960018] hover:text-white hover:duration-300	'>
            <Link href='/contact'>CONTACT</Link>
          </div>
        </div>
        <button
          className='sm:hidden '
          onClick={() => {
            setData(!data);
          }}
        >
          <FontAwesomeIcon icon={faEdit} style={{ width: '24px' }}></FontAwesomeIcon>
        </button>
      </div>
      {data ? (
        <p className='hidden    '></p>
      ) : (
        <div className='flex-col absolute top-0 left-0 p-8 h-full w-3/5 sm:hidden 	bg-white'>
          <h2>Company</h2>
          <a>About us</a>
          <hr></hr>
          <a>Contact us</a>
          <hr></hr>
          <a> Privacy Policy</a>
        </div>
      )}
      <motion.div
        className='progress-bar  top-0 left-0 right-0 h-0.5 origin-left sticky  z-30	 bg-[#960018] '
        style={{ scaleX }}
      />
    </div>
  );
};
