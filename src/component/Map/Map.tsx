import React from 'react';

export default function SimpleMap() {
  return (
    // Important! Always set the container height explicitly
    <div className='w-full'>
      <iframe
        className='w-full'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6052.0953335546355!2d30.35661798282531!3d40.67291867064166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb343df644d99%3A0xea58b5ab7657ddb9!2sFADA%20M%C3%BChendislik!5e0!3m2!1str!2str!4v1680677556598!5m2!1str!2str'
        style={{ border: 0 }}
        allowFullScreen={false}
        height={450}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
}
