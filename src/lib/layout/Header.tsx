import { ThemeToggle } from '@/lib/components/theme-toggle';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ConnectWallet } from '@thirdweb-dev/react'

const Header = () => {
  const location = useLocation()
  const currentRoute = location.pathname

  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center'>
        <a
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 transition-transform transform-gpu hover:scale-125 cursor-pointer'
          href='/'
        >
          <img
            src='/icon.png'
            alt=''
            style={{
              transform: 'rotate(10deg)',
            }}
            className='w-20 h-20'
          />
        </a>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center '>
          <a
            className={`mr-5 hover:text-gray-900 cursor-pointer ${
              currentRoute == '/dashboard' ? 'text-gray-900' : ''
            }`}
            href='/dashboard'
          >
            Dashboard
          </a>
          <a
            className={`mr-5 hover:text-gray-900 cursor-pointer ${
              currentRoute == '/eggs' ? 'text-gray-900' : ''
            }`}
            href='/eggs'
          >
            My Eggs
          </a>
          <a
            className={`mr-5 hover:text-gray-900 cursor-pointer ${
              currentRoute == '/buydragons' ? 'text-gray-900' : ''
            }`}
            href='/buydragons'
          >
            Buy Dragons
          </a>
          <div className='group relative mr-5 cursor-pointer'>
            <div className=' transition-opacity duration-300 hover:opacity-75'>
              Stakes
            </div>
            <div className='bottom-0 left-1/2 transform -translate-x-1/2 absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 delay-500'>
              <p className='text-white text-lg'>Coming Soon</p>
            </div>
          </div>
          {/* <a className='mr-5 hover:text-gray-900 cursor-pointer'>Stakes</a> */}
        </nav>
        {/* <button className='bg-yellow-300 border-b-4 border-r-5  border-yellow-500 text-gray-900 px-4 py-2 transition-transform transform-gpu hover:scale-105 hover:border-l-5'>
          Connect Wallet
        </button> */}
        <ConnectWallet
          switchToActiveChain
          modalSize='compact'
          className='bg-yellow-300 border-b-4 border-r-5  border-yellow-500 text-gray-900 px-4 py-2 transition-transform transform-gpu hover:scale-105 hover:border-l-5'
        />
      </div>
    </header>
  )
}

export default Header;
