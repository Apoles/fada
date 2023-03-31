import Breadcrumb from '@/component/BreadCrump';
import { Footer } from '@/component/footer/Footer';
import { Header } from '@/component/Header';
import { HeaderBottom } from '@/component/HeaderBottom';
import { Cardd } from '@/component/news/Card';
import { CardComp } from '@/component/news/CardComp';
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

  console.log(data, '==============>');
  return (
    <>
      <div>
        <Header></Header>
        <HeaderBottom></HeaderBottom>
        <br></br>
        <Breadcrumb></Breadcrumb>

        <div className='flex flex-col items-center justify-center'>
          <Cardd></Cardd>
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
