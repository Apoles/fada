import Head from 'next/head';
import '@/styles/Home.module.css';
import { Header } from '@/component/Header';
import { HeaderBottom } from '@/component/HeaderBottom';
import ProductCard from '@/component/Card/ex';
import SwiperComponent from '@/component/Swiper/Swiper';

import { NewsCard } from '@/component/Card/NewsCard';

import { WeServices } from '@/component/Card/WeServices';
import { Footer } from '@/component/footer/Footer';
import { WhyFada } from '@/component/Card/WhyFada';
import { DobuleTitle } from '@/component/DTittle';
import SimpleMap from '@/component/Map/Map';
import FadeAnimate from '@/component/Animation/FadeAnimate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

import BackToTopButton from '@/component/BackToTop';
import Git from '@/component/header/gitHeader';

const data = [
  {
    id: 1,
    imageUrl: '/slider/araba.png',
    title: 'deenemee',
    description: 'asdasdasdasd',
  },
  {
    id: 5,
    imageUrl: '/slider/one.png',
    title: 'deenemee',
    description: 'asdasdasdasd',
  },
  {
    id: 2,
    imageUrl: '/slider/two.png',
    title: 'deenemee',
    description: 'asdasdasdasd',
  },
  {
    id: 3,
    imageUrl: '/slider/tree.png',
    title: 'deenemee',
    description: 'asdasdasdasd',
  },
  {
    id: 3,
    imageUrl: '/slider/five.png',
    title: 'deenemee',
    description: 'asdasdasdasd',
  },
];

const productProperty = [
  {
    title: 'Kapasite',
    description: '1 tondan 200 tona kadar',
  },
  {
    title: 'Hız',
    description: '60 m/dk’ya kadar',
  },
  {
    title: 'Tekerlek',
    description: 'Çelik / döküm teker',
  },
  {
    title: 'Kontrol',
    description: ' Uzaktan kumandalı / Otonom',
  },
  {
    title: 'Güç Kaynağı ',
    description: 'Yaylı tambur, Bus-Bar, Kablo taşıyıcı, Akü, Dizel',
  },
  {
    title: 'Motorlar',
    description: 'AC / DC elektrik motoru, Hidrolik / Pnömatik aktüatör',
  },
  {
    title: 'Yükleme Tablası',
    description: 'İsteğe özel ebatlar',
  },
  {
    title: 'Güvenlik',
    description: 'Lazer ve ultrasonik sensör, tampon',
  },
  {
    title: 'Boyutlar',
    description: 'İsteğe özel ebatlar',
  },
  {
    title: 'Belgelendirme',
    description: 'ayar çek',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Fada Engineer</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/fadaLogoEng.png' />
      </Head>

      <main className='  flex flex-col items-center justify-center font-manrope font-normal	leading-relaxed	'>
        <Header></Header>
        <Git></Git>

        <div className='w-full h-full '>
          <SwiperComponent slides={data}></SwiperComponent>
        </div>

        <div className='space-y-6 flex flex-col items-center justify-center'>
          <h1 className='mt-12  font-light text-xs text-black'> SCROOL DOWN </h1>
          <Link className='cursor-pointer duration-500' to='main' smooth={true}>
            <svg className=' transition-duration-500  animate-bounce w-6 h-6 ...'>
              <FontAwesomeIcon icon={faArrowDown} size={'xs'}></FontAwesomeIcon>
            </svg>
          </Link>
        </div>

        <div id='main'>
          <FadeAnimate>
            {' '}
            <WhyFada></WhyFada>{' '}
          </FadeAnimate>
        </div>

        <div className='flex   flex-col items-center justify-start  w-full  py-16 '>
          <DobuleTitle title='WHAT WE DO' mainTitle='SMART SOLUTIONS'></DobuleTitle>
          <FadeAnimate>
            <div className='p-3  space-x-7  mt-12 flex '>
              <ProductCard
                url='/product/transfer-cart-agv'
                image='/akilciHizmetler/TRANSFER ARABALARI2.png'
                title="TRANSFER CART & AGV'S"
              ></ProductCard>
              <ProductCard
                url='/product/positioners-and-rotating-solutions'
                image='/akilciHizmetler/dondurme.png'
                title='POSITIONERS AND ROTATING SOLUTIONS'
              ></ProductCard>
              <ProductCard
                url='/product/automated-stroge-systems'
                image='/akilciHizmetler/otomatikDepolama.png'
                title='AUTOMATED STORAGE SYSTEMS (ASRS)'
              ></ProductCard>
            </div>
            <div className='p-3 space-x-7 mb-24  object-cover  flex   '>
              <ProductCard
                url='/product/ergonomic-access-platforms'
                image='/akilciHizmetler/prnomatik.png'
                title='ERGONOMIC ACCESS PLATFORMS'
              ></ProductCard>
              <ProductCard
                url='/product/intralogistics-and-conveyor-solutions'
                image='/akilciHizmetler/unileted.jpg'
                title='INTRALOGISTICS & CONVEYOR SOLUTIONS'
              ></ProductCard>
              <ProductCard
                url='product/cranes-lifting-and-handling-equiments'
                image='/akilciHizmetler/cranes.jpg'
                title='CRANES / LIFTING & HANDLING EQUIPMENTS'
              ></ProductCard>
            </div>
          </FadeAnimate>
        </div>

        <div className='w-full '>
          <WeServices></WeServices>
        </div>

        <div className='mt-24 mb-24 flex items-center justify-center h-48  object-cover overflow-hidden'>
          <img src='/hizmetAnlayisimiz/akisSema.png' className='w-3/4  '></img>
        </div>

        <div className='flex p-5 shadow-xl  flex-col items-center justify-start  w-full  space-y-5 py-12'>
          <DobuleTitle title='WHAT IS NEW' mainTitle='NEWS '></DobuleTitle>
          <br></br>

          <div className='  flex  items-center justify-center space-x-5  '>
            <NewsCard
              title='
            Psychology for managers
            '
              imageUrl='/a/e.jpg'
            ></NewsCard>
            <NewsCard title='Sociomapping in schools' imageUrl='/a/f.jpg'></NewsCard>
            <NewsCard
              imageUrl='/a/c.jpg'
              title='
              Training in coaching'
            ></NewsCard>
          </div>
          <br></br>
          <button
            type='button'
            className='my-4 w-40 text-[#960018] hover:text-white border border-[#960018] hover:bg-[#960018] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-base px-5 py-2.5 text-center mr-2 mb-2 dark:border-[#960018] dark:text-[#960018] dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
          >
            All news
          </button>
        </div>

        <SimpleMap></SimpleMap>

        <BackToTopButton></BackToTopButton>

        <Footer></Footer>
      </main>
    </>
  );
}

/*
  <div className='flex    flex-col items-center justify-start  w-full  space-y-4 py-12 '>
          <Titlee title='BLOG'></Titlee>
          <br></br>
          <div className='  flex  items-center justify-center space-x-5  '>
            <NewsCard
              imageUrl='https://www.fada.com.tr/yuklenen/webp/kucult.php?link=yuklenen/haberler/1650482458/k-1661945539.jpg'
              title='
              Training in coaching'
            ></NewsCard>
            <NewsCard
              title='Sociomapping in schools'
              imageUrl='https://qedgroup-cz.s3.eu-central-1.amazonaws.com/pexels_cottonbro_studio_4101143_758d09b507.jpg'
            ></NewsCard>
            <NewsCard
              title='
            Psychology for managers
            '
              imageUrl='https://qedgroup-cz.s3.eu-central-1.amazonaws.com/pexels_andrea_piacquadio_3771097_32eb686abb.jpg'
            ></NewsCard>
          </div>
          <br></br>
          <a href='/allNews'>
            {' '}
            <button
              type='button'
              className='my-4 w-40 text-[#960018] hover:text-white border border-[#960018] hover:bg-[#960018] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-base px-5 py-2.5 text-center mr-2 mb-2 dark:border-[#960018] dark:text-[#960018] dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
            >
              All blogs
            </button>
          </a>
        </div>

*/
