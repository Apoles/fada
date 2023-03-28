import { Button } from '@material-tailwind/react';

type Props = {
  image: string;
  title: string;

  children?: React.ReactNode;
};

export default function Dede() {
  return (
    <div className='max-w-sm w-80  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>
        <img
          className='rounded-t-lg p-5'
          src='https://www.fada.com.tr/yuklenen/webp/kucult.php?link=yuklenen/haberler/1643094810/k-1658831948.jpg'
          alt=''
        />
      </a>
      <div className='p-5'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Noteworthy technology acquisitions 2021
          </h5>
        </a>

        <br></br>
        <div className=' items-center w-24  rounded-full	 border-[#960018] border-2	 text-center  hover:bg-[#960018] hover:text-white hover:duration-300	'>
          <button>Daha fazla</button>
        </div>
      </div>
    </div>
  );
}
