import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import React from 'react';
import { NewsCard } from '../Card/NewsCard';

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface Slide {
  id: string;
  imgUrl: string;
  title: string;
}

interface Props {
  slides: Slide[];
}

const ResponsiveSwiper: React.FC<Props> = ({ slides }) => {
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
      spaceBetween={100}
      slidesPerView={3}
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
          <NewsCard imageUrl={slide.imgUrl} title='dddd'></NewsCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ResponsiveSwiper;
