const Home = () => {
  return (
    <section className='text-white body-font'>
      <div className='container mx-auto flex px-5 md:flex-row flex-col items-center'>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src='/assets/dragon2.png'
          />
        </div>
        <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center animate__animated animate__slideInRight animate__slow'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white textstroke'>
            Hey Buddy Want Some Golden Eggs ?
          </h1>
          <div className='flex justify-center'>
            <a
              className='inline-flex text-white bg-yellow-300 border-yellow-500 border-1 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg'
              href='/eggs'
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
