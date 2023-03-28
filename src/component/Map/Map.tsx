import React from 'react';

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function SimpleMap() {
  return (
    // Important! Always set the container height explicitly
    <div className='w-full'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96338.75934193071!2d29.0947072!3d41.012428799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacfb2681faa8d%3A0x49b6e9b9911655b7!2s%C5%9Eehit%20Prof.%20Dr.%20%C4%B0lhan%20Varank%20Sancaktepe%20E%C4%9Fitim%20ve%20Ara%C5%9Ft%C4%B1rma%20Hastanesi!5e0!3m2!1str!2str!4v1678689439104!5m2!1str!2str'
        className='w-full'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
      ></iframe>
    </div>
  );
}
