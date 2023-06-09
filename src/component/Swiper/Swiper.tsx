import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import React from 'react';
import Image from 'next/image';

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
          <div className='relative h-full flex items-center justify-center brightness-150	max-sm:h-72'>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40'></div>
            <Image className='h-full w-full    ' width={3000} height={200} src={slide.imageUrl} alt={slide.title} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSwiper;
