import React from 'react'
import Login from './components/Auth/Login'
import Header from './components/Header/Header'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

const App = () => {
  return (
    <>
      <AdminDashboard />
      {/* <EmployeeDashboard /> */}
      {/* <Login /> */}
    </>
  )
}

export default App