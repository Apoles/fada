type CardProps = {
  imageUrl: string;
  title: string;
};

export const NewsCard = (props: CardProps) => {
  return (
    <div className='bg-white   rounded-lg shadow-md overflow-hidden sm:w-1/2 lg:w-1/3'>
      <img style={{ width: 360, height: 220 }} className=' object-fill' src={props.imageUrl} alt='your-image-alt' />
      <div className='p-6 text-center '>
        <h2 className='text-lg font-medium mb-2'>{props.title}</h2>
      </div>
    </div>
  );
};
