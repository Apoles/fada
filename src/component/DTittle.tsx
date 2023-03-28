type Prop = {
  title?: string;
  mainTitle: string;
};

export const DobuleTitle = (prop: Prop) => {
  return (
    <div className='flex flex-col space-y-2 items-center justify-center'>
      <p className='text-base font-sm font-tilt text-[#960018] '>{prop.title}</p>
      <h1 className='text-4xl font-extrabold font-tilt '>{prop.mainTitle} </h1>
    </div>
  );
};
