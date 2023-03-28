import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { animateScroll as scroll } from 'react-scroll';

interface Props {
  children: React.ReactNode;
}

const ScrollAnimation = ({ children }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    if (inView) {
      scroll.scrollToTop({
        duration: 100,
        smooth: 'easeInOut',
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className={`${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700	 `}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
