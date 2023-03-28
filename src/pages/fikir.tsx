import ProductCard from '@/component/Card/ex';
import { NewsCard } from '@/component/Card/NewsCard';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className='progress-bar fixed top-0 left-0 right-0 h-3 origin-left	 bg-red-600  ' style={{ scaleX }} />
      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>
      <NewsCard
        imageUrl='https://www.fada.com.tr/yuklenen/webp/kucult.php?link=yuklenen/haberler/1650482458/k-1661945539.jpg'
        title='
              Training in coaching'
      ></NewsCard>{' '}
      <NewsCard
        imageUrl='https://www.fada.com.tr/yuklenen/webp/kucult.php?link=yuklenen/haberler/1650482458/k-1661945539.jpg'
        title='
              Training in coaching'
      ></NewsCard>
      <NewsCard
        imageUrl='https://www.fada.com.tr/yuklenen/webp/kucult.php?link=yuklenen/haberler/1650482458/k-1661945539.jpg'
        title='
              Training in coaching'
      ></NewsCard>
      <NewsCard
        imageUrl='https://www.fada.com.tr/yuklenen/webp/kucult.php?link=yuklenen/haberler/1650482458/k-1661945539.jpg'
        title='
              Training in coaching'
      ></NewsCard>
      <NewsCard
        imageUrl='https://www.fada.com.tr/yuklenen/webp/kucult.php?link=yuklenen/haberler/1650482458/k-1661945539.jpg'
        title='
              Training in coaching'
      ></NewsCard>
    </>
  );
}
