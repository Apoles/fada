import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='  flex justify-around w-full bg-gray-50 h-9 shadow  '>
      <div className='max-md:mr-0  max-md:px-4  max-md:w-full flex items-center  space-x-2.5'>
        <div className='w-3 '>
          <FontAwesomeIcon style={{ color: '#960018' }} icon={faPhone} size='xs'></FontAwesomeIcon>
        </div>
        <p className=' max-md:text-xs max-md:w-full  text-xs'>+90 264 275 20 01</p>
        <div className='w-3 '>
          <FontAwesomeIcon style={{ color: '#960018' }} icon={faEnvelope} size='xs'></FontAwesomeIcon>
        </div>
        <p className='max-md:text-xs max-md:w-full  text-xs'>info@fada.com.tr</p>
      </div>
      <div className=' max-sm:hidden flex items-center space-x-1.5 ml-14'>
        <Link href='https://www.instagram.com/fadamuhendislik'>
          <FontAwesomeIcon style={{ color: '#960018', width: '14px' }} icon={faInstagram}></FontAwesomeIcon>
        </Link>

        <Link href='https://www.linkedin.com/company/fadamuhendislik/mycompany'>
          {' '}
          <FontAwesomeIcon style={{ color: '#960018', width: '14px' }} icon={faLinkedin}></FontAwesomeIcon>
        </Link>

        <Link href='https://www.youtube.com/channel/UCcS4wrCXgZHWfUqbwsr4xlg'>
          <FontAwesomeIcon style={{ color: '#960018', width: '18px' }} icon={faYoutube}></FontAwesomeIcon>
        </Link>

        <Link href='https://www.facebook.com/fadamuhendislik'>
          {' '}
          <FontAwesomeIcon style={{ color: '#960018', width: '16px' }} icon={faFacebook}></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};
