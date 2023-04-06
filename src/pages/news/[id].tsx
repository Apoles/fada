import ImageCard from '@/component/Card/ImageCard';
import { DobuleTitle } from '@/component/DTittle';
import { Footer } from '@/component/footer/Footer';
import { Header } from '@/component/Header';
import { HeaderBottom } from '@/component/HeaderBottom';
import LogoSpinner from '@/component/Loading';

import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Data = {
  id: string;
  description: string;
  title: string;
  imgUrl: string;
};

const Slidem = [
  {
    id: '0001',
    imgUrl: '/akilciHizmetler /cranes.jpg',
    title: 'SUBÜ GİRİŞİMCİLİK SEMİNERİNE KATILDIK',
  },
  {
    id: '0004',
    imgUrl: '/akilciHizmetler/dondurme.png',
    title: 'İFTARDA BİR ARAYA GELDİK',
  },
  {
    id: '0005',
    imgUrl: '/akilciHizmetler/prnomatik.png',
    title: 'ÖZEL TALEPLER ÖZEL ÇÖZÜMLER GEREKTİRİR.',
  },
  {
    id: '0006',
    imgUrl: '/akilciHizmetler/unileted.jpg',
    title: 'YENİ FABRİKAMIZLA HİZMETİNİZDEYİZ',
  },
];

const News = () => {
  const [data, setData] = useState<Data>();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3000/api/blog?id=${id}`)
        .then((response) => setData(response.data))
        .catch((error) => {});
    };

    fetchData().catch((e) => {});
  }, [id]);

  const bread = data?.title.toLowerCase();

  return data! ? (
    <>
      <Header></Header>
      <HeaderBottom></HeaderBottom>
      <div className='py3 my-3 mb-12 bg-white  '>
        <div className='container m-auto   px-6 text-gray-600 md:px-12 xl:px-44'>
          <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
            <div className='md:5/12 lg:w-5/12'>
              <img
                src={data?.imgUrl}
                alt='image'
                className='transition duration-300 ease-in-out hover:scale-105'
                loading='lazy'
                width='359px'
                height='357px'
              />
            </div>
            <div className='md:7/12 lg:w-6/12'>
              <h2 className='text-xl text-gray-900  md:text-xl'>{data?.title} </h2>
              <p className='mt-6 text-gray-600'>{data?.description}</p>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>
      <br></br>

      <DobuleTitle mainTitle='' title='Other News'></DobuleTitle>

      <div className='w-full flex flex-row justify-center items-center gap-6 my-12'>
        <ImageCard title='deneme' description='Deneme yapıyorız' imgUrl='/a/c.jpg'></ImageCard>
        <ImageCard title='deneme' description='Deneme yapıyorız' imgUrl='/a/c.jpg'></ImageCard>
        <ImageCard title='deneme' description='Deneme yapıyorız' imgUrl='/a/c.jpng'></ImageCard>
      </div>

      <Footer></Footer>
    </>
  ) : (
    <div>
      <LogoSpinner></LogoSpinner>
      <Footer></Footer>
    </div>
  );
};

export default News;
