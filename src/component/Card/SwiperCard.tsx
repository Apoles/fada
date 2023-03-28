export const SwiperCard = () => {
  return (
    <div className='max-w-sm w-96 rounded overflow-hidden shadow-md bg-gray-700 opacity-75 '>
      <div className='px-6 py-3'>
        <p className='text-white text-base'>Ürün açıklaması buraya yazılabilir.</p>
      </div>
      <div className='px-6 py-2'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Teklif Al</button>
      </div>
    </div>
  );
};
