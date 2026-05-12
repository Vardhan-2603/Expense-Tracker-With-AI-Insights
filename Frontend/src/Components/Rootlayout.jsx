import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function Rootlayout() {
  return (
    <div className="min-h-screen flex flex-col">      
      <Header/>
      <div className="grow w-full">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Rootlayout