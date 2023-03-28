import React from 'react';
import SwiperComponent from './Swiper/Swiper';

const images = [
  'https://via.placeholder.com/150/000000/FFFFFF/?text=Slide%201',
  'https://via.placeholder.com/150/FF0000/FFFFFF/?text=Slide%202',
  'https://via.placeholder.com/150/00FF00/FFFFFF/?text=Slide%203',
  'https://via.placeholder.com/150/0000FF/FFFFFF/?text=Slide%204',
];

const IndexPage = () => {
  return (
    <div className='flex flex-col h-screen'>
      <header className='bg-gray-800 text-white p-4'>Swiper Example</header>
      <main className='flex-grow'>
        <SwiperComponent images={images} />
      </main>
      <footer className='bg-gray-800 text-white p-4'>© 2022 My Awesome Company</footer>
    </div>
  );
};

export default IndexPage;
