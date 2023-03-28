import NextImage, { ImageLoader, ImageProps } from 'next/image';

const dummyLoader: ImageLoader = (args) => {
  return args.src;
};

type Props = ImageProps;

const Image: React.FC<Props> = ({ loader = dummyLoader, ...props }) => {
  return <NextImage unoptimized {...props} loader={loader} />;
};

export default Image;
