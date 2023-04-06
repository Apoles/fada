import Link from 'next/link';

export const Products = () => {
  return (
    <div
      className='hidden peer-hover:flex hover:flex  w-[300px] mt-0.5
flex-col bg-white drop-shadow-lg absolute  '
    >
      <Link prefetch={false} className='px-5 py-3 hover:bg-gray-200' href='#'>
        {"TRANSFER CART & AGV'S"}
      </Link>
      <Link prefetch={false} className='px-5 py-3 hover:bg-gray-200' href='#'>
        AUTOMATED STORAGE SYSTEMS (ASRS){' '}
      </Link>
      <Link prefetch={false} className='px-5 py-3 hover:bg-gray-200' href='#'>
        POSITIONERS AND ROTATING SOLUTIONS{' '}
      </Link>
      <Link prefetch={false} className='px-5 py-3 hover:bg-gray-200' href='#'>
        INTRALOGISTICS & CONVEYOR SOLUTIONS
      </Link>
      <Link prefetch={false} className='px-5 py-3 hover:bg-gray-200' href='#'>
        LIFTING & HANDLING EQUIPMENTS
      </Link>
      <Link prefetch={false} className='px-5 py-3 hover:bg-gray-200' href='#'>
        ERGONOMIC ACCESS PLATFORMS{' '}
      </Link>
      <Link prefetch={false} className='px-5 py-3 hover:bg-gray-200' href='#'>
        CUSTOM MACHINE SOLUTIONS{' '}
      </Link>
    </div>
  );
};
