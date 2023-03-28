import DoubleBorderCard from '@/component/Card/AllProductCard';
import ImageCard from '@/component/Card/ImageCard';
import { DobuleTitle } from '@/component/DTittle';
import { Footer } from '@/component/footer/Footer';
import { Header } from '@/component/Header';
import { HeaderBottom } from '@/component/HeaderBottom';
import IimageSlider from '@/component/Swiper/ProductSwiper';
import NewsSwiper from '@/component/Swiper/ProductSwiper';
import { Titlee } from '@/component/Title';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Data = {
  id: string;
  desciription: string;
  title: string;
  imgUrl: string;
  url: string;
  product: [];
  certification: [];
};

const News = () => {
  const [data, setData] = useState<Data[]>([]);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3000/api/getProduct`)
        .then((response) => setData(response.data))
        .catch((error) => {
          console.log('error', error);
        });
    };

    fetchData().catch((e) => {
      console.log('eerror', e);
    });
  }, [id]);

  console.log(data);
  return (
    <>
      <Header></Header>
      <HeaderBottom></HeaderBottom>
      <div className='  pt-1  flex  justify-center items-start   bg-gray-200'>
        {' '}
        <div className='flex m-24    '>
          <div className='flex flex-col bg-white  gap-6  p-8 pr-12    rounded-xl '>
            <h1 className='text-xl font-semibold text-red-900 '>Categorys</h1>
            <Link href={``} className='hover:text-red-900'>
              <p>TRANSFER CART & AGV'S</p>
            </Link>
            <Link href={'/'} className='hover:text-red-900'>
              {' '}
              <p>CRANES / LIFTING & HANDLING EQUIPMENTS</p>
            </Link>
            <Link href='/' className='hover:text-red-900'>
              <p>INTRALOGISTICS & CONVEYOR SOLUTIONS</p>
            </Link>{' '}
            <Link href='/ ' className='hover:text-red-900'>
              <p>ERGONOMIC ACCESS PLATFORMS</p>
            </Link>{' '}
            <Link href='/' className='hover:text-red-900'>
              <p>AUTOMATED STORAGE SYSTEMS (ASRS)</p>
            </Link>{' '}
            <Link href='/' className='hover:text-red-900'>
              <p>POSITIONERS AND ROTATING SOLUTIONS</p>
            </Link>
          </div>
          <div className='container   rounded-xl flex flex-wrap  items-center justify-center gap-8 mx-auto '>
            {data ? (
              data.map((e) => (
                <DoubleBorderCard
                  url={`/product/${e.url}`}
                  imageUrl='https://www.fada.com.tr/yuklenen/kategoriler/1643095108/b-1643095108-16629865923039.jpg'
                  title={e.title}
                />
              ))
            ) : (
              <p>yok</p>
            )}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default News;
