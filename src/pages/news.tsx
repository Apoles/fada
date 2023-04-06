import Breadcrumb from '@/component/BreadCrump';
import DoubleBorderCard from '@/component/Card/AllProductCard';
import { DobuleTitle } from '@/component/DTittle';
import { Footer } from '@/component/footer/Footer';
import { Header } from '@/component/Header';
import { HeaderBottom } from '@/component/HeaderBottom';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Data {
  id: string;
  description: string;
  title: string;
  imgUrl: string;
}

const News: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/hello`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));

    document.title = 'News';
  }, []);

  return (
    <>
      <div>
        <Header></Header>
        <HeaderBottom></HeaderBottom>
        <br></br>
        <Breadcrumb></Breadcrumb>
        <br></br>
        <br></br>

        <DobuleTitle mainTitle="WHAT'S NEW" title='NEWS'></DobuleTitle>

        <div className='flex flex-col items-center justify-center '>
          <div className='   grid grid-cols-3 p-4   justify rounded-xl  '>
            {data.map((e, key) => (
              <div key={key} className=' mt-4'>
                <DoubleBorderCard
                  title={e.title}
                  imageUrl={e.imgUrl}
                  url={`/news/${e.title.toLowerCase().replace(/[ ]/g, '-')}`}
                ></DoubleBorderCard>
              </div>
            ))}
          </div>

          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default News;

/*
      <div className='flex flex-row items-center justify-center  gap-3   '>
          <CardComp title={} ></CardComp>
          <CardComp></CardComp>
          <CardComp></CardComp>
        </div>
        <div className='flex flex-row items-center justify-center  gap-3   '>
          <CardComp></CardComp>
          <CardComp></CardComp>
          <CardComp></CardComp>
        </div>{' '}
        <div className='flex flex-row items-center justify-center  gap-3   '>
          <CardComp></CardComp>
          <CardComp></CardComp>
          <CardComp></CardComp>
        </div>
*/
