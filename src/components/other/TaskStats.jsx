import React from 'react'

const TaskStats = () => {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
      <div className='px-10 py-6 rounded-2xl w-[45%] bg-red-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      
      <div className='px-10 py-6 rounded-2xl w-[45%] bg-yellow-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='px-10 py-6 rounded-2xl w-[45%] bg-green-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='px-10 py-6 rounded-2xl w-[45%] bg-blue-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

    </div>
  )
}

export default TaskStats