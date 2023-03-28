type Props = {
  title: string;
};

export const Titlee = (porops: Props) => {
  return (
    <div className='flex body-font  mt-6  flex-col items-center text-left  divide-x-8 divide-[#960018]  '>
      {' '}
      <h1 className='font-semibold text-2xl text-center text-[#960018]'>{porops.title}</h1>
      <hr className='w-full '></hr>
    </div>
  );
};
