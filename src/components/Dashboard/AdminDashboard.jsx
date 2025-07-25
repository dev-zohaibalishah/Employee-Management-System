import React from 'react'
import Header from '../Header/Header'
import CreateTask from '../other/CreateTask'
import AllTasks from '../other/AllTasks'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header />
        <CreateTask />
        <AllTasks />
    </div>
  )
}

export default AdminDashboard