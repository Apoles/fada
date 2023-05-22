import Image from 'next/image';
import { useState } from 'react';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

const OfferCard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // burada form verilerini sunucuya göndermek için gerekli işlemleri gerçekleştirebilirsiniz
    setFormValues(initialFormValues);
  };

  return (
    <div className='font-tilt'>
      {/* "Teklif Al" butonu */}
      <button onClick={handleButtonClick}>Teklif Al</button>

      {/* Modal (form içeren card) */}
      {showModal && (
        <div className='fixed inset-0    bg-gray-500 bg-opacity-75 flex items-center justify-center'>
          <div className=' p-8 rounded-lg'>
            {/* Form */}

            <div className=' w-full  flex items-center justify-center '>
              <div className='bg-blue-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden'>
                <div className='md:flex w-full'>
                  <Image
                    width={200}
                    height={200}
                    className='w-1/2'
                    alt='dde'
                    src='https://thumbs.dreamstime.com/b/businessman-write-transparent-board-contact-us-sunset-ov-over-city-background-sun-s-rays-falling-lens-90532373.jpg'
                  ></Image>
                  <form onSubmit={handleSubmit} className='relative w-full md:w-1/2 py-10 px-5 md:px-10'>
                    <button className=' absolute top-0 right-0 p-4' onClick={() => setShowModal(false)}>
                      Kapat
                    </button>
                    <div className='text-center mb-4'>
                      <h1 className='font-bold text-3xl text-gray-900'>Get an offer</h1>
                    </div>
                    <div>
                      <div className='flex -mx-3'>
                        <div className='w-1/2 px-3 mb-5'>
                          <div className='flex'>
                            <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                              <i className='mdi mdi-account-outline text-gray-400 text-lg'></i>
                            </div>
                            <input
                              type='text'
                              className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                              placeholder='First Name'
                              name='firstName'
                              id='firstName'
                              value={formValues.firstName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className='w-1/2 px-3 mb-5'>
                          <div className='flex'>
                            <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                              <i className='mdi mdi-account-outline text-gray-400 text-lg'></i>
                            </div>
                            <input
                              type='text'
                              className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                              placeholder='Last Name'
                              name='lastName'
                              id='lastName'
                              value={formValues.lastName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className='flex -mx-3'>
                        <div className='w-1/2 px-3 mb-5'>
                          <div className='flex'>
                            <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                              <i className='mdi mdi-account-outline text-gray-400 text-lg'></i>
                            </div>
                            <input
                              type='mail'
                              className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                              placeholder='E mail'
                              name='email'
                              id='email'
                              value={formValues.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className='w-1/2 px-3 mb-5'>
                          <div className='flex'>
                            <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                              <i className='mdi mdi-account-outline text-gray-400 text-lg'></i>
                            </div>
                            <input
                              type='number'
                              className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                              placeholder='Phone Number'
                              name='phone'
                              id='phone'
                              value={formValues.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className='flex -mx-3'>
                        <div className='w-full px-3 mb-12'>
                          <label htmlFor='' className='text-xs font-semibold px-1'></label>
                          <div className='flex'>
                            <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                              <i className='mdi mdi-lock-outline text-gray-400 text-lg'></i>
                            </div>
                            <textarea
                              className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                              placeholder='
                              Your Message (You can get information by typing the product name)'
                              rows={6}
                              name='message'
                              id='message'
                              value={formValues.message}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className='w-full flex flex-row '>
                        <div className='flex flex-row items-center justify-evenly'>
                          {' '}
                          <div className='flex items-center h-5'>
                            <input
                              id='terms'
                              type='checkbox'
                              value=''
                              className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                              required
                            />
                          </div>
                          <label htmlFor='terms' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                            I agree with the{' '}
                            <a href='#' className='text-blue-600 hover:underline dark:text-blue-500'>
                              terms and conditions
                            </a>
                          </label>
                        </div>

                        <button className=' absolute right-5 bottom-5 w-32  bg-red-800 hover:bg-red-900 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-normal'>
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferCard;
