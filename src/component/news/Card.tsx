import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { env } from 'process';

interface Data {
  id: string;
  description: string;
  title: string;
  imgUrl: string;
}

export const Cardd = () => {
  const [data, setData] = useState<Data[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.VERCEL_URL}/api/hello`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto max-w-7x1'>
        <div className='flex flex-wrap w-full mb-4 p-4'>
          <div className='w-full mb-6 lg:mb-0'>
            <h1 className='sm:text-4xl text-5xl font-medium  title-font mb-2 text-gray-900'>News</h1>
            <div className='h-1 w-20 bg-indigo-500 rounded'></div>
          </div>
        </div>
        <div className='flex flex-wrap -m-4  '>
          {data.map((e, key) => (
            <div key={key} className='xl:w-4/12  md:w-1/2 p-4  '>
              <Link href={`/news/${e.title.toLowerCase().replace(/[ ]/g, '-')}`}>
                <div className='bg-white p-6 rounded-lg'>
                  <div className=' hover:absolute hover:w-52 hover:h-52 hover:left-1/2 hover:top-1/2 hover:bg-red-200'></div>
                  <Image
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className='lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full max-w-xs  object-center mb-6'
                    src={e.imgUrl}
                    alt='Image Size 720x400'
                    width={250}
                    height={250}
                  />

                  <h3 className='text-lg text-gray-900 font-medium title-font mb-4'>{e.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
/*
 <div className='xl:w-1/3 md:w-1/2 p-4'>
            <div className='bg-white p-6 rounded-lg'>
              <img
                className='lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6'
                src='https://wisatamuda.com/wp-content/uploads/2019/02/1-Golden-Gate-Bridge-Gambar-dan-Foto-Tempat-Wisata-Terbaik-di-San-Fransisco-USA.jpg'
                alt='Image Size 720x400'
              />
              <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>SUBTITLE</h3>
              <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>San Francisco</h2>
              <p className='leading-relaxed text-base'>
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
*/
