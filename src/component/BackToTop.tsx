import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button
          className=' animate-bounce     fixed bottom-4 right-4 p-4 rounded-full bg-gray-700 text-white shadow-lg transition-colors duration-300 hover:bg-gray-600'
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faArrowCircleUp}></FontAwesomeIcon>
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
