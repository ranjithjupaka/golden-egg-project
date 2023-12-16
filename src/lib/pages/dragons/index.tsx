import { useState } from 'react'

const Dragons = () => {
  const connected = true
  return (
    <>
      <section className='text-white body-font'>
        {connected ? (
          <div className='container mx-auto flex md:flex-row flex-col items-start'>
            <div className='w-2/3 '>
              <div className='container mx-auto'>
                <div className='flex justify-between text-center w-full mb-10 textstroke'>
                  <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
                    Your Dragons
                  </h1>
                  <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
                    0/2000
                  </h1>
                </div>
                <div className='flex flex-wrap -m-4'>
                  <div className='lg:w-1/3 sm:w-1/2 p-4'>
                    <div className='flex relative'>
                      <img
                        alt='gallery'
                        className='absolute inset-0 w-full h-full object-cover object-center'
                        src='/assets/golden-egg.png'
                      />
                      <div className='px-12 py-24 relative z-10 w-full bg-yellow-300 opacity-0 hover:opacity-100 border-2 border-white cursor-pointer'>
                        <h1 className='title-font text-lg font-medium text-white mb-3 text-center  '>
                          Golden Eggs
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className='lg:w-1/3 sm:w-1/2 p-4'>
                    <div className='flex relative'>
                      <img
                        alt='gallery'
                        className='absolute inset-0 w-full h-full object-cover object-center'
                        src='/assets/golden-egg.png'
                      />
                      <div className='px-12 py-24 relative z-10 w-full bg-yellow-300 opacity-0 hover:opacity-100 border-2 border-white cursor-pointer'>
                        <h1 className='title-font text-lg font-medium text-white mb-3 text-center  '>
                          Golden Eggs
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className='lg:w-1/3 sm:w-1/2 p-4'>
                    <div className='flex relative'>
                      <img
                        alt='gallery'
                        className='absolute inset-0 w-full h-full object-cover object-center'
                        src='/assets/golden-egg.png'
                      />
                      <div className='px-12 py-24 relative z-10 w-full bg-yellow-300 opacity-0 hover:opacity-100 border-2 border-white cursor-pointer'>
                        <h1 className='title-font text-lg font-medium text-white mb-3 text-center'>
                          Golden Eggs
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className='lg:w-1/3 sm:w-1/2 p-4'>
                    <div className='flex relative'>
                      <img
                        alt='gallery'
                        className='absolute inset-0 w-full h-full object-cover object-center'
                        src='/assets/golden-egg.png'
                      />
                      <div className='px-12 py-24 relative z-10 w-full bg-yellow-300 opacity-0 hover:opacity-100 border-2 border-white cursor-pointer'>
                        <h1 className='title-font text-lg font-medium text-white mb-3 text-center  '>
                          Golden Eggs
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className='lg:w-1/3 sm:w-1/2 p-4'>
                    <div className='flex relative'>
                      <img
                        alt='gallery'
                        className='absolute inset-0 w-full h-full object-cover object-center'
                        src='/assets/golden-egg.png'
                      />
                      <div className='px-12 py-24 relative z-10 w-full bg-yellow-300 opacity-0 hover:opacity-100 border-2 border-white cursor-pointer'>
                        <h1 className='title-font text-lg font-medium text-white mb-3 text-center  '>
                          Golden Eggs
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className='lg:w-1/3 sm:w-1/2 p-4'>
                    <div className='flex relative'>
                      <img
                        alt='gallery'
                        className='absolute inset-0 w-full h-full object-cover object-center'
                        src='/assets/golden-egg.png'
                      />
                      <div className='px-12 py-24 relative z-10 w-full bg-yellow-300 opacity-0 hover:opacity-100 border-2 border-white cursor-pointer'>
                        <h1 className='title-font text-lg font-medium text-white mb-3 text-center  '>
                          Golden Eggs
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/3 flex flex-col justify-center text-center'>
              <h1 className='mb-8'>Reward Per Egg</h1>
              <h1 className='text-3xl text-yellow-200 textstroke2'>
                6 Golden Eggs / Day =
              </h1>
              <h1 className='mb-5 text-3xl textstroke2'>1 USD</h1>
              <h1 className='mb-5 text-2xl'>Currently Earning</h1>
              <h1 className='mb-5 text-2xl textstroke2'>0.00 USD Per Day</h1>
              <h1 className='mb-5 text-3xl'>Your Rewards</h1>
              <h1 className='mb-5 text-3xl text-yellow-200 textstroke2'>
                0 Golden Eggs =
              </h1>
              <h1 className='mb-8 text-3xl textstroke2'>0.00 USD</h1>
              <button className='bg-yellow-300 border-b-4 border-r-5 border-l-5 border-yellow-500 text-white px-4 py-2 transition-transform transform-gpu scale-115 hover:border-l-5 mb-5'>
                Claim Golden Eggs
              </button>
              <button className='bg-yellow-300 border-b-4 border-r-5 border-l-5 border-yellow-500 text-white px-4 py-2 transition-transform transform-gpu scale-115 hover:border-l-5 mb-5'>
                Compound
              </button>
            </div>
          </div>
        ) : (
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
            Connect your Wallet!
          </h1>
        )}
      </section>
    </>
  )
}

export default Dragons

{
  /* <div className='container mx-auto flex px-5 md:flex-row flex-col items-center'>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
              <h1 classNameName='title-font sm:text-4xl text-3xl mb-4 font-medium text-white textstroke'>
                Your Eggs
              </h1>
              <img
                className='object-cover object-center rounded'
                alt='hero'
                src='/assets/dragons.png'
              />
            </div>
            <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-start text-center'>
              <h1 className='title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900'>
                Before they sold out
                <br className='hidden lg:inline-block' />
                readymade gluten
              </h1>
              <div className='flex justify-center'>
                <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                  Button
                </button>
                <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                  Button
                </button>
              </div>
            </div>
          </div> */
}
