import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 1 },
};

interface Props {
  children: React.ReactNode;
}

const FadeAnimate = ({ children }: Props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div className='box' ref={ref} variants={boxVariant} initial='hidden' animate={control}>
      {children}
    </motion.div>
  );
};

export default FadeAnimate;
