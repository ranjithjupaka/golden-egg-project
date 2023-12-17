import { useContract, useContractRead } from '@thirdweb-dev/react'
import { useEffect } from 'react'

const Home = () => {
  const { contract } = useContract('0x42571ca6E3994629061de9e645bB722d9131c4a6')
  const { data, isLoading, error } = useContractRead(contract, 'name')
  

  return (
    <section className='text-white body-font'>
      <div className='container mx-auto flex md:flex-row flex-col items-center h-full'>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 px px-5 py-8'>
          <img
            className='object-cover object-center rounded w-full'
            alt='hero'
            src='/assets/dragon.png'
          />
        </div>
        <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white textstroke'>
            Hey Buddy Want Some Eggs ?
          </h1>
          <div className='flex justify-center'>
            <a
              className='inline-flex text-white bg-yellow-300 border-yellow-500 border-1 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg'
              href='/dragons'
            >
              BUY
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
