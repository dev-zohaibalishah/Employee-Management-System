import React from 'react'
import Header from '../Header/Header'
import TaskStats from '../other/TaskStats'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10'>
        <Header />
        <TaskStats />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard