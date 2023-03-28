import CountUp from 'react-countup';

type CounterProps = {
  title: string;
  end: number;
  des: string;
};

export const NumberUpCard = (props: CounterProps) => {
  return (
    <div className='rounded-full bg-gradient-to-tr from-[#960018] to-black h-56 w-56 flex items-center justify-center'>
      <div className='text-center space-y-3 '>
        <CountUp
          // style={{ fontSize: 36 }}

          enableScrollSpy={true}
          duration={3}
          end={props.end}
          suffix={` ${props.title}`}
          className='text-white text-4xl font-bold'
        ></CountUp>
        <p className='text-white text-sm'>{props.des}</p>
      </div>
    </div>
  );
};
