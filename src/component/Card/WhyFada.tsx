import Link from 'next/link';
import { NumberUpCard } from './NumberCardMarchEight';

export const WhyFada = () => {
  return (
    <div className=' flex flex-col  space-y-14 items-center  justify-center  my-20  '>
      <div className='flex flex-col space-y-2 items-center justify-center  '>
        <p className='text-base font-sm font-tilt text-[#960018] '>WHO WE ARE</p>
        <p className='text-4xl font-extrabold font-tilt '>WHY FADA? </p>
      </div>

      <p className=' flex  w-1/2  text-sm text-gray-900  text-center  items-center justify-center '>
        Specialized in design, production and sales of many products such as Battery Powered Transfer Carts,
        Intralogistics and Automated Storage Solutions, Conveyor Systems, Positioners and Rotating Solutions, Lifting
        and Handling Equipments. FADA was established to produce special solutions for machinery and automation systems
        with its up to 15 years of experienced staff. FADA provides services in order to meet the demands of its
        customers in many different sectors, especially in the automotive sector, such as logistics, iron and steel,
        railway industry, energy and industrial automation.
      </p>
      <br></br>
      <br></br>

      <div className=' flex items-center space-x-24 justify-center w-full '>
        <NumberUpCard title='start' end={25} des='On the market'></NumberUpCard>
        <NumberUpCard end={45} des='Cooperating countries' title=''></NumberUpCard>
        <NumberUpCard end={9000} des='Analysed teams' title=' +'></NumberUpCard>
      </div>
      <Link prefetch={false} href={'/company'}>
        {' '}
        <button
          type='button'
          className='text-sm my-4 w-44 text-[#960018] hover:text-white border border-[#960018] hover:bg-[#960018] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full  px-5 py-2.5 text-center mr-2 mb-2 dark:border-[#960018] dark:text-[#960018] dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
        >
          More about us
        </button>
      </Link>
    </div>
  );
};
