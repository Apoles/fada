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

const Home: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/hello')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(data);
  return (
    <>
      <div>
        <Header></Header>
        <HeaderBottom></HeaderBottom>
        <br></br>

        <Cardd></Cardd>

        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;

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
