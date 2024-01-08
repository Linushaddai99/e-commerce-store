import React from 'react'
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className='main'>
        <div className='dashboard'>
            <div className='display-area'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Layout
