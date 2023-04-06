import Image from 'next/image';
import ProductItem from './ProductItem/ProductItem';

type Value = {
  title: string;
  des: string;
};

type Props = {
  title: string;
  Product: Value[];
};

export default function ProductPropertLeft(prop: Props) {
  return (
    <div className='flex flex-row items-start justify-between'>
      <Image
        width={200}
        height={200}
        className='w-1/2  brightness-100  h-full transition duration-300 ease-in-out hover:scale-110 max-w-2xl'
        src='/BE0-0003-0325.jpg'
        alt='alt'
      ></Image>{' '}
      <div className='w-1/2   bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <h5 className='mb-4 text-lg font-medium text-gray-700 dark:text-gray-400'>{prop.title}</h5>
        <div className='flex items-baseline text-gray-900 dark:text-white'>
          <span className='text-xl font-bold tracking-tight'>Genel Özellikler</span>
        </div>
        <ul role='list' className='space-y-5 my-7'>
          {prop.Product.map((e, index) => (
            <ProductItem key={index} title={e.title} des={e.des}></ProductItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
