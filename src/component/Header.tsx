import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Header = () => {
  return (
    <div className='flex justify-evenly w-full bg-gray-50 h-9 shadow  '>
      <div className='flex items-center mr-14 space-x-2.5'>
        <div className='w-3 '>
          <FontAwesomeIcon style={{ color: '#960018' }} icon={faPhone} size='xs'></FontAwesomeIcon>
        </div>
        <p className='text-xs'>+90 264 275 20 01</p>
        <div className='w-3 '>
          <FontAwesomeIcon style={{ color: '#960018' }} icon={faEnvelope} size='xs'></FontAwesomeIcon>
        </div>
        <p className='text-xs'>info@fada.com.tr</p>
      </div>
      <div className='flex items-center space-x-1.5 ml-14'>
        <FontAwesomeIcon style={{ color: '#960018', width: '14px' }} icon={faInstagram}></FontAwesomeIcon>
        <FontAwesomeIcon style={{ color: '#960018', width: '14px' }} icon={faLinkedin}></FontAwesomeIcon>
        <FontAwesomeIcon style={{ color: '#960018', width: '18px' }} icon={faYoutube}></FontAwesomeIcon>
        <FontAwesomeIcon style={{ color: '#960018', width: '16px' }} icon={faFacebook}></FontAwesomeIcon>
      </div>
    </div>
  );
};
