import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br /><span className='text-4xl font-semibold'>Zohaib 👋🏻 </span></h1>
        <button className='py-2 px-5 rounded-sm text-lg font-medium outline-none bg-red-600 cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header