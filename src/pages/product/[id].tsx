import DoubleBorderCard from '@/component/Card/AllProductCard';
import ImageCard from '@/component/Card/ImageCard';
import { DobuleTitle } from '@/component/DTittle';
import { Footer } from '@/component/footer/Footer';
import { Header } from '@/component/Header';
import { HeaderBottom } from '@/component/HeaderBottom';
import { Titlee } from '@/component/Title';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faMessage, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Breadcrumb from '@/component/BreadCrump';
import LogoSpinner from '@/component/Loading';
import BackToTopButton from '@/component/BackToTop';
import OfferCard from '@/component/Card/OfferCard';

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
  TechnicialSpecifications: [];
  Design: [];
};

const News = () => {
  const [data, setData] = useState<Data>();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3000/api/product?id=${id}` && `https://fada-one.vercel.app/api/product?id=${id}`)
        .then((response) => setData(response.data))
        .catch((error) => {});
    };

    fetchData().catch((e) => {});
  }, [id]);

  return (
    <>
      <Header></Header>
      <HeaderBottom></HeaderBottom>
      <Breadcrumb></Breadcrumb>

      {data ? (
        <div className='space-y-12 font-tilt flex flex-col items-center justify-center  '>
          <br></br>

          <DobuleTitle mainTitle={data.title}></DobuleTitle>
          <br></br>
          <br></br>

          {data.product.map((e, key) => (
            <div
              className='flex flex-col w-max p-16 rounded-2xl  bg-white shadow-2xl      items-center justify-center'
              key={key}
            >
              <div className='flex flex-row  max-md:flex-col  items-start justify-center gap-8 '>
                <div className='relative  rounded-3xl'>
                  <Image
                    className='object-cover   transition duration-300 hover:scale-105 '
                    src={e.imgUrl}
                    style={{ width: 444, height: 320 }}
                    alt='alt'
                    width={1000}
                    height={1000}
                  ></Image>
                </div>

                <div style={{ width: '472px' }} className='  flex flex-col justify-center items-start space-y-3  '>
                  <h2 className='text-xl font-semibold'>{e.title.toUpperCase()}</h2>
                  <p className='text-gray-600 text-sm  '>{e.description}</p>
                  <div className='flex flex-row items-center justify-start '>
                    <button
                      type='button'
                      className='text-gray-800 bg-white border-2 border-transparent duration-700 hover:border-wine-red  focus:ring-4 focus:outline-none focus:ring-wine-red font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 '
                    >
                      <FontAwesomeIcon className='w-4 h-4 mr-1 -ml-1' size='1x' icon={faMessage}></FontAwesomeIcon>
                      <OfferCard></OfferCard>
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

              <div className=''>
                <br></br>
                <Titlee title='Özellikler'></Titlee>
                <br></br>
                <div className='max-w-4xl m-auto w-4/5  rounded-3xl p-8 bg-gradient-to-b from-gray-50 to-white '>
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
                  {e.Design ? (
                    <div className='flex flex-col mt-1'>
                      <div className='flex items-center '>
                        <FontAwesomeIcon className='' color='#960018' size='1x' icon={faCheckCircle}></FontAwesomeIcon>
                        <p className='ml-3  text-gray-600'>Design:</p>
                      </div>
                      <div>
                        {e.Design.map((cert, key) => (
                          <p className='max-w-md space-y-2 text-gray-600 ' key={key}>
                            - {cert}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {e.TechnicialSpecifications ? (
                    <div className='flex flex-col mt-1'>
                      <div className='flex items-center '>
                        <FontAwesomeIcon className='' color='#960018' size='1x' icon={faCheckCircle}></FontAwesomeIcon>
                        <p className='ml-3  text-gray-600'>TechnicialSpecifications:</p>
                      </div>
                      <div>
                        {e.TechnicialSpecifications.map((cert, key) => (
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

          <BackToTopButton></BackToTopButton>

          <Footer></Footer>
        </div>
      ) : (
        <div>
          {' '}
          <LogoSpinner></LogoSpinner>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default News;

/*
{e.propert.map((c, key) => null)}
*/
