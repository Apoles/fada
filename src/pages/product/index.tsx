import Breadcrumb from '@/component/BreadCrump';
import DoubleBorderCard from '@/component/Card/AllProductCard';

import { Footer } from '@/component/footer/Footer';
import { Header } from '@/component/Header';
import { HeaderBottom } from '@/component/HeaderBottom';

import axios from 'axios';
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
  TechnicialSpecifications: [];
  Design: [];
};

const Category = () => {
  const [data, setData] = useState<Data[]>([]);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3000/api/getProduct`)
        .then((response) => setData(response.data))
        .catch((error) => {});
    };

    fetchData().catch((e) => {});
  }, [id]);

  return (
    <>
      <Header></Header>
      <HeaderBottom></HeaderBottom>

      <br></br>
      <Breadcrumb></Breadcrumb>

      <div className='  pt-1  flex  justify-center items-start    mt-24 mb-24  '>
        <div className='gap-8  max-md:grid-cols-1 max-sm:mt-0  max-sm:mb-0  max-sm:items-center  border grid grid-cols-3  justify rounded-xl     '>
          {data ? (
            data.map((e, key) => (
              <DoubleBorderCard key={key} url={`/product/${e.url}`} imageUrl={e.imgUrl} title={e.title} />
            ))
          ) : (
            <p>yok</p>
          )}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Category;
