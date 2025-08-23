import React, { Suspense } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default Layout