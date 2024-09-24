import React from 'react'

function Homepage() {
  return (
    <div className='h-screen flex justify-center items-center '>
    <div className='text-white text-3xl'>Hi,  Welcome!!
      <p className='text-3xl text-white'>I am  Rishabh Rathore</p>
      <p className='text-3xl text-white'>I  am  a  Software  Developer</p>
    </div>
    <div className='px-4 flex justify-center'>
      <img  className="rounded-full w-1/2 auto" src='cheems.jpg' alt='developer' />
    </div>
    </div>
  )
}

export default Homepage