import React, { FC, ReactNode } from 'react'
import Nav from '../../components/Layouts/ParentLayout/Nav'

interface Props{
  children:ReactNode
}

const Layout:FC<Props> = ({children}) => {
  return (
    <div className=" w-full flex flex-col items-center font-roboto">
      <main className="w-[85%] space-y-10">
        <Nav/>
        {children}
      </main>
    </div>
  )
}

export default Layout