import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

interface CounterProps {
  end: number;
}

const Counter: React.FC<CounterProps> = ({ end }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return <CountUp end={end} duration={3} start={startAnimation ? undefined : 0} suffix='+' separator=',' />;
};

export default Counter;
