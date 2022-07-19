import React, { FC } from 'react'
import Button from '../../GeneralComponents/Button'
const Nav:FC = () => {
  return (
    <nav className="my-4 flex items-center justify-between">
        <span className='text-5xl font-bold'>
            <span className='inline-block px-[0.4rem] mr-1 bg-JE-blue text-white rounded-xl'>JE</span>
            Blog
        </span>
        <div className="flex items-center space-x-5 font-bold">
            <span>Home</span>
            <span>Blog</span>
            <span>Contact</span>
            <Button>Sign Up</Button>
        </div>
    </nav>
  )
}

export default Nav