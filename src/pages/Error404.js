import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className=" w-full h-80 flex items-center justify-center">
      <div className='flex flex-col items-center gap-6'>
        <div className=' flex flex-col items-center' style={{ gap: '-50px' }}>
          <div className=' font-sans text-300 font-extrabold capitalize error_text'>
            404
          </div>
          <div className=' font-sans font-extrabold capitalize error_msg text-black'>
            Page Not Found
          </div>
          <div className=' font-sans text-gray-700 text-xl font-normal error_content'>
            The page you are looking for doesn't exist or has been moved.
          </div>
          <Link to="/">
            <div className='go_home_btn text-white flex items-center justify-between space-x-3' >
              Go To Home
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none" className=' ml-3'>
                <path d="M8.53846 1L15 7L8.53846 13M14.1026 7H1" stroke="#29A0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error404
