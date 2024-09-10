import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
      <div className='grid-background'>
          AppLayout
          <Outlet/>
    </div>
  )
}

export default AppLayout