import React from 'react';
import YouTube from 'react-youtube';

type VideoCardProps = {
  videoUrl: string;
};

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl }) => {
  const opts = {
    height: '260',
    width: '260',
    playerVars: {
      autoplay: 0,
    },
  };

  const videoId = videoUrl.split('v=')[1];

  return (
    <div className='max-w-xs rounded object-cover shadow-lg'>
      <div className='relative'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

const YouVideoCard: React.FC = () => {
  const videoUrls = [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=2ZIpFytCSVc',
    'https://www.youtube.com/watch?v=Bey4XXJAqS8',
  ];

  return (
    <div className='grid grid-cols-3 gap-4'>
      {videoUrls.map((url, index) => (
        <VideoCard key={index} videoUrl={url} />
      ))}
    </div>
  );
};

export default YouVideoCard;
