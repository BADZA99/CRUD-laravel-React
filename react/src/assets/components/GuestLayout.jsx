import React from 'react'
import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (
    <div>
        {/* outlet is where child routes will be rendered */}
      <Outlet/>
    </div>
  )
}
