import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen min-w-screen flex justify-center items-center'>
        <div className='border-2 border-red-600'>
            <form className='flex flex-col items-center justify-center'>
                <input type="email" placeholder='Enter your email' />
                <input type="password" placeholder='Password' />
            </form>
        </div>
        
    </div>
  )
}

export default Login