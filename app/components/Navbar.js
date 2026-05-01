
import React from 'react'

function Navbar() {

  return (
    <>
      <div className='pt-4 sticky top-0 box-border backdrop-blur-sm z-50 selection:bg-transparent '>
        <nav className='flex justify-around border-b border-gray-300/20 px-30 pb-4'>
          <div className='flex gap-2 justify-center items-center'>
            <div width={45} height={45} className='rounded-full'><img src="./codinglogo.jpg" alt="Logo" width={45} height={45} className='rounded-full' /></div>
            <ul>
              <li className="text-white font-bold text-xl">Vimal Kumar</li>
              <li className="text-white font-thin">Front-End Web Developer</li>
            </ul> 
          </div>
          <ul className='flex p-1 border-2 border-gray-300/30 rounded-full group cursor-pointer *:hover:bg-gray-300/30 transition ease-in *:flex *:gap-2 *:text-sm *:justify-center *:items-center *:rounded-full *:px-6 *:py-2 *:text-gray-300 '>
            <li className="">
              <svg className="text-gray-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg> <span>Home</span>
            </li>
            <li className="">
              <svg className="text-gray-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>About</span>
            </li>
            <li className="">
              <svg className="text-gray-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span>Skills</span>
            </li>
            <li className="">
              <svg className="text-gray-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
              <span>Projects</span>
            </li>
            <li className="">
              <svg className="text-gray-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar