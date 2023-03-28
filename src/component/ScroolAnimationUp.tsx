import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: React.ReactNode;
}

const FadeUpAnimation = ({ children }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const childRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref}>
      <div
        ref={childRef}
        className={`${inView ? 'animate-fadeUp opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
      >
        {children}
      </div>
    </div>
  );
};

export default FadeUpAnimation;
