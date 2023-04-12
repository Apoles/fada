import Image from 'next/image';
import ScrollAnimationWrapper from '../Animation/ScroolAnimation';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import getScrollLeftAnimation from '@/utils/LeftAnimateScrool';
import getScrollRightAnimation from '@/utils/RightAnimateScrool';

export const WeServices = () => {
  const leftscrollAnimation = useMemo(() => getScrollLeftAnimation(), []);
  const rightscrollAnimation = useMemo(() => getScrollRightAnimation(), []);

  return (
    <div className='bg-cover    bg-center w-full h-full flex  justify-center items-center '>
      <div className='    w-max mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6'>
        <div className='  p-12  flex flex-col lg:flex-row justify-center   items-center space-x-24   '>
          <div className='lg:w-1/3 space-y-5 '>
            <ScrollAnimationWrapper>
              <motion.div
                variants={leftscrollAnimation}
                className=' '
                whileHover={{
                  scale: 1.0,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <p className='text-lg font-sm font-tilt text-[#960018] '>WHO WE ARE</p>
                <h1 className='text-5xl font-extrabold font-tilt '>What we specialise in </h1>
                <button
                  type='button'
                  className='my-4 w-full text-[#960018] hover:text-white border border-[#960018] hover:bg-[#960018] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-base px-5 py-2.5 text-center mr-2 mb-2 dark:border-[#960018] dark:text-[#960018] dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
                >
                  Find out more about our services{' '}
                </button>{' '}
              </motion.div>
            </ScrollAnimationWrapper>
          </div>

          <div className='lg:w-3/5 lg:pl-8 ml-12   space-y-5  flex-col flex items-center   '>
            <ScrollAnimationWrapper>
              <motion.div
                variants={rightscrollAnimation}
                className=' '
                whileHover={{
                  scale: 1.0,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className=' flex items-center justify-center gap-4  max-w-lg p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                  <Image alt='denemes' width={58} height={100} src={'/icon/worker.png'}></Image>
                  <div className='flex flex-col'>
                    <h5 className='mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
                      Custom solutions
                    </h5>
                    <p className='font-normal text-sm text-gray-700 dark:text-gray-400'>
                      It offers high quality smart special solutions suitable for your processes for your special
                      machine needs.{' '}
                    </p>
                  </div>
                </div>
                <div className='flex items-center justify-center gap-4 max-w-lg p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                  <Image alt='denemes' width={58} height={100} src={'/icon/handshake.png'}></Image>
                  <div className='flex flex-col'>
                    <h5 className='mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
                      Contract manufacturing
                    </h5>
                    <p className='font-normal text-sm text-gray-700 dark:text-gray-400'>
                      Building of teams and teamwork, high performing teams, leadership development, conflict and
                      problem solving.{' '}
                    </p>
                  </div>
                </div>
                <div className=' max-w-lg p-6 flex items-center justify-center gap-4 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                  <Image alt='denemes' width={58} height={100} src={'/icon/assortment.png'}></Image>

                  <div className='flex flex-col'>
                    <h5 className='mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
                      Organisation and company development{' '}
                    </h5>
                    <p className='font-normal text-sm text-gray-700 dark:text-gray-400'>
                      Organisational development and change management, corporate culture, engagement and mental health
                      of employees, talent programmes, assessment centres.{' '}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};
