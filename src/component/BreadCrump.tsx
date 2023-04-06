import Link from 'next/link';
import { useRouter } from 'next/router';

interface BreadcrumbProps {
  separator?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ separator = '›' }) => {
  const router = useRouter();
  const segments = router.asPath.split('/').filter((segment) => segment !== '');

  return (
    <nav
      className='flex items-center justify-center mt-8 max-w-md   rounded-2xl shadow-md  m-auto bg-gray-100 p-2 '
      aria-label='Breadcrumb'
    >
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        <li className='inline-flex items-center'>
          <Link
            prefetch={false}
            href='/'
            className='  inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
          >
            <svg
              aria-hidden='true'
              className='w-4 h-4 mr-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
            </svg>
            Home
          </Link>
        </li>
        {segments.map((segment, index) => (
          <li key={index}>
            <div className='flex items-center'>
              <svg
                aria-hidden='true'
                className='w-6 h-6 text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <Link
                prefetch={false}
                className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
                href={`/${segments.slice(0, index + 1).join('/')}`}
              >
                <p>{segment}</p>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

/* import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type BreadcrumbProps = {
  routes: { name: string; path: string }[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ routes }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
 
  );
};

export default Breadcrumb;
*/
/*
const BreadCrump = () => {
  return (
    <nav className='flex' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        <li className='inline-flex items-center'>
          <a
            href='#'
            className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
          >
            <svg
              aria-hidden='true'
              className='w-4 h-4 mr-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
            </svg>
            Home
          </a>
        </li>
        <li>
          <div className='flex items-center'>
            <svg
              aria-hidden='true'
              className='w-6 h-6 text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
            <a
              href='#'
              className='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
            >
              Projects
            </a>
          </div>
        </li>
        <li aria-current='page'>
          <div className='flex items-center'>
            <svg
              aria-hidden='true'
              className='w-6 h-6 text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
            <span className='ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400'>Flowbite</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrump;
*/
