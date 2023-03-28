import Image from 'next/image';
import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const s = [
  'https://images.unsplash.com/photo-1602520396913-f28a06961f5d',
  'https://images.unsplash.com/photo-1603124048498-365cfb7c98af',
  'https://images.unsplash.com/photo-1593642532459-2a9f0a2391b8',
  'https://images.unsplash.com/photo-1622037159208-79cf5220a5ce',
  'https://images.unsplash.com/photo-1620863724712-24c96dc33d91',
];

const images = [
  {
    src: '/akilciHizmetler/cranes.jpg',
    alt: 'Image 1',
  },
  {
    src: '/akilciHizmetler/dondurme.png',
    alt: 'Image 1',
  },
  {
    src: '/akilciHizmetler/otomatikDepolama.png',
    alt: 'Image 1',
  },
  {
    src: '/akilciHizmetler/prnomatik.png',
    alt: 'Image 1',
  },
  {
    src: '/akilciHizmetler/unileted.jpg',
    alt: 'Image 1',
  },
];

const IimageSlider: React.FC = () => {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 5000 }} loop={true}>
      {' '}
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className='flex flex-col  my-12 items-center justify-center'>
            <div className=' mx-auto w-1/2  h-max  '>
              <Image className='w-max' src={image.src} alt={image.alt} />
            </div>
            <h1>TESLİMATLARIMIZ DEVAM EDİYOR</h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default IimageSlider;
