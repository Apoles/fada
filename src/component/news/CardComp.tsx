import Link from 'next/link';
import Image from '../image';

type Props = {
  imgUrl: string;
  title: string;
};

export const CardComp = (props: Props) => {
  return (
    <div className='  w-1/2 max-md:w-4/5 max-md:bg-red-200   flex flex-col items-start justify-center  rounded-md shadow-md '>
      <Link href={`http://localhost:3000/news${props.title}`}>
        <div className='w-full h-72 relative rounded-lg '>
          <Image
            width={200}
            className='rounded-t-lg mx-auto '
            src={props.imgUrl}
            alt={props.title}
            placeholder='blur'
            blurDataURL={props.imgUrl}
          />
        </div>
      </Link>
      <h2 className='mb-5 text-xs   font-bold leading-tight text-gray-900 dark:text-white'>
        <a href={`http://localhost:3000/news${props.title}`}>{props.title}</a>
      </h2>
    </div>
  );
};
