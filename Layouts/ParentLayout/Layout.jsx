import React from 'react'
import Nav from '../../Components/Layouts/ParentLayout/Nav'
const Layout = ({children}) => {
  return (
    <div className=" w-full flex flex-col items-center font-roboto">
      <div className="w-[85%]">
        <Nav/>
        {children}
      </div>
    </div>
  )
}

export default Layout