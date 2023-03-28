type Props = {
  title: string;
  des: string;
};

const ProductItem = (props: Props) => {
  return (
    <li className='flex space-x-3'>
      <svg
        aria-hidden='true'
        className='flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <title>Check icon</title>
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
          clipRule='evenodd'
        ></path>
      </svg>
      <div>
        <span className=' text-sm font-semibold leading-tight text-black dark:text-gray-400'>{props.title}: </span>
        <span className='text-sm font-normal leading-tight text-gray-700 dark:text-gray-400'>{props.des}</span>
      </div>
    </li>
  );
};

export default ProductItem;
