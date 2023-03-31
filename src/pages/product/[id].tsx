import DoubleBorderCard from '@/component/Card/AllProductCard';
import ImageCard from '@/component/Card/ImageCard';
import { DobuleTitle } from '@/component/DTittle';
import { Footer } from '@/component/footer/Footer';
import { Header } from '@/component/Header';
import { HeaderBottom } from '@/component/HeaderBottom';
import { Titlee } from '@/component/Title';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faCheckCircle, faMessage, faFilePdf, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { NotFound } from '@/component/404';
import Image from 'next/image';
import Breadcrumb from '@/component/BreadCrump';
import YouVideoCard from '@/component/Card/YoutbeCard';
import LogoSpinner from '@/component/Loading';
import BackToTopButton from '@/component/BackToTop';

type Data = {
  id: string;
  description: string;
  title: string;
  imgUrl: string;
  url: string;
  product: Product[];
};

type Product = {
  id: string;
  description: string;
  imgUrl: string;
  title: string;
  propert: [];
  type: string;
  certification: [];
  options: [];
};

const News = () => {
  const [data, setData] = useState<Data>();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3000/api/product?id=${id}`)
        .then((response) => setData(response.data))
        .catch((error) => {
          console.log('error', error);
        });
    };

    fetchData().catch((e) => {
      console.log('eerror', e);
    });
  }, [id]);

  return (
    <>
      <Header></Header>
      <HeaderBottom></HeaderBottom>
      <Breadcrumb></Breadcrumb>

      {data ? (
        <div className='space-y-12 font-tilt flex flex-col items-center justify-center   '>
          <br></br>

          <DobuleTitle mainTitle={data.title}></DobuleTitle>
          <br></br>
          <br></br>

          {data.product.map((e, key) => (
            <div className='flex flex-col    items-center justify-center' key={key}>
              <div className='flex flex-row items-start justify-center gap-8 '>
                <div className='relative overflow-hidden rounded-3xl'>
                  <Image
                    className='object-cover   transition duration-300 hover:scale-105 '
                    src={e.imgUrl}
                    style={{ width: 544, height: 420 }}
                    alt='alt'
                    width={544}
                    height={320}
                  ></Image>
                </div>

                <div className='w-1/3 space-y-3 '>
                  <h2 className='text-xl font-semibold'>{e.title.toUpperCase()}</h2>
                  <p className='text-gray-600 text-sm'>{e.description}</p>
                  <div className='flex flex-row items-center justify-start '>
                    <button
                      type='button'
                      className='text-gray-800 bg-white border-2 border-transparent duration-700 hover:border-wine-red  focus:ring-4 focus:outline-none focus:ring-wine-red font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 '
                    >
                      <FontAwesomeIcon className='w-4 h-4 mr-1 -ml-1' size='1x' icon={faMessage}></FontAwesomeIcon>
                      Teklif Al
                    </button>
                    <button
                      type='button'
                      className='text-gray-800 bg-white border-2 border-transparent duration-700 hover:border-wine-red focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                      <FontAwesomeIcon className='w-4 h-4 mr-1 -ml-1' size='1x' icon={faFilePdf}></FontAwesomeIcon>
                      Katalog
                    </button>

                    <FontAwesomeIcon style={{ color: '#960018' }} size='lg' icon={faYoutube}></FontAwesomeIcon>
                  </div>
                </div>
              </div>

              <div>
                <br></br>
                <Titlee title='Özellikler'></Titlee>
                <br></br>
                <div className='max-w-4xl m-auto  rounded-3xl p-8 bg-gradient-to-b from-gray-50 to-white '>
                  <p className='mt-4 '> {e.description} </p>
                  <br></br>
                  {e.propert.map((c, key) => (
                    <div className='' key={key}>
                      <ul className='max-w-md space-y-2 text-gray-600 list-inside dark:text-gray-400'>
                        <li className='flex items-center gap-3 '>
                          <FontAwesomeIcon
                            className=''
                            color='#960018'
                            size='1x'
                            icon={faCheckCircle}
                          ></FontAwesomeIcon>
                          {c}
                        </li>
                      </ul>
                    </div>
                  ))}

                  {e.certification ? (
                    <div className='flex flex-col mt-1'>
                      <div className='flex items-center '>
                        <FontAwesomeIcon className='' color='#960018' size='1x' icon={faCheckCircle}></FontAwesomeIcon>
                        <p className='ml-3  text-gray-600'>Certification:</p>
                      </div>

                      {e.certification.map((cert, key) => (
                        <p className='max-w-md space-y-2 text-gray-600 ' key={key}>
                          - {cert}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {e.options ? (
                    <div className='flex flex-col mt-1'>
                      <div className='flex items-center '>
                        <FontAwesomeIcon className='' color='#960018' size='1x' icon={faCheckCircle}></FontAwesomeIcon>
                        <p className='ml-3  text-gray-600'>Options:</p>
                      </div>
                      <div>
                        {e.options.map((cert, key) => (
                          <p className='max-w-md space-y-2 text-gray-600 ' key={key}>
                            - {cert}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <YouVideoCard></YouVideoCard>

          <BackToTopButton></BackToTopButton>

          <Footer></Footer>
        </div>
      ) : (
        <LogoSpinner></LogoSpinner>
      )}
    </>
  );
};

export default News;

/*
{e.propert.map((c, key) => null)}
*/
