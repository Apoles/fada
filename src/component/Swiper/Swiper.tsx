import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import React from 'react';
import { SwiperCard } from '../Card/SwiperCard';

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface Slide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface Props {
  slides: Slide[];
}

const MainSwiper: React.FC<Props> = ({ slides }) => {
  return (
    <Swiper
      style={{
        '--swiper-pagination-color': '#960018',
        '--swiper-pagination-bullet-inactive-color': '#999999',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-size': '16px',
        '--swiper-pagination-bullet-horizontal-gap': '6px',
      }}
      modules={[EffectFade]}
      effect='fade'
      spaceBetween={10}
      slidesPerView={1}
      speed={1500}
      centeredSlides={true}
      pagination={{
        clickable: true,

        bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
      }}
      autoplay={{ delay: 4000, disableOnInteraction: true }}
      className='mySwiper brightness-90	'
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className='relative h-full flex items-center justify-center brightness-150	'>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40'></div>
            <img className='h-full w-full object-cover ' src={slide.imageUrl} alt={slide.title} />
            <div className='absolute top-40 left-2/3  h-full flex flex-col items-center justify-center text-white'>
              <SwiperCard></SwiperCard>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSwiper;
