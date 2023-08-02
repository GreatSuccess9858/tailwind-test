import React from 'react'

const Error404 = () => {
  return (
    <div className=" w-full h-80 flex items-center justify-center">
      <div className='flex flex-col items-center gap-6'>
        <div className=' flex flex-col items-center' style={{ gap: '-50px' }}>
          <div className=' font-sans text-300 font-extrabold capitalize error_text'>
            404
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error404
