import Image from 'next/image';
import { DobuleTitle } from '../DTittle';
import { Titlee } from '../Title';

type Props = {
  mainTitle: string;
  title: string;
  titleT: string;
  desT: string;
  des: string[];
  img: string;
};

export const ContactT = (props: Props) => {
  return (
    <div className=' m-auto w-3/5 flex flex-col items-start  '>
      <div className=''>
        {' '}
        <Titlee title={props.mainTitle}></Titlee>
        <br></br>
      </div>
      <div className='flex flex-col lg:flex-row justify-between gap-32   '>
        <div className='w-full lg:w-3/6 flex flex-col   justify-center'>
          <h1 className='text-lg lg:text-lg font-bold leading-9 text-gray-800 dark:text-white pb-4'>{props.title}</h1>
          {props.des.map((e, key) => (
            <div key={key} className='space-y-12'>
              <p className='  font-light text-xs leading-6 text-black dark:text-white'>{e}</p>
            </div>
          ))}
          <br></br>
          <div className='w-full lg:w-3/6 flex flex-col   justify-center'>
            <h1 className='text-lg lg:text-lg font-bold leading-9 text-gray-800 dark:text-white pb-4'>
              {props.titleT}
            </h1>
            <p className='  font-light text-xs leading-6 text-black dark:text-white'>{props.desT}</p>
            <div className='flex flex-row space-x-5 mt-3'>
              <p className='text-xs '>E-mail:</p>
              <p className='text-xs '>info@fada.com.tr</p>
            </div>
          </div>
        </div>

        <div className=''>
          <Image
            width={200}
            height={200}
            src={props.img}
            className='max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800'
            alt='...'
          />
        </div>
      </div>
    </div>
  );
};
