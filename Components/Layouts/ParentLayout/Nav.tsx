import React, { FC } from 'react'
import {FiTwitter }from "react-icons/fi"
import socialLinks from '../../../utils/socialLinks'
import { IconLink } from '../../GeneralComponents'




const Nav:FC = () => {
  return (
    <nav className="my-4 flex items-center justify-between">
        <span className='text-3xl font-bold'>
            <span className='inline-block px-[0.4rem] mr-1 bg-JE-blue text-white rounded-xl'>JE</span>
            Blog
        </span>
        <div className="flex items-center space-x-5 font-bold">
          {
            socialLinks.map(social=>
              <IconLink 
                link={social.link} 
                key={social.name}
                icon={social.icon}
              />
                
            )
          }
        </div>
    </nav>
  )
}

export default Nav