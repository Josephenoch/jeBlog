import Image from 'next/image'
import React, { FC } from 'react'
import socialLinks from '../../../utils/socialLinks'
import { IconLink } from '../../GeneralComponents'


const Nav:FC = () => {
  return (
    <nav className="my-4 flex items-center justify-between">
        <div className="w-20 h-20 relative">
          <Image src="/logo.png" layout="fill"/>
        </div>
        <div className="flex items-center space-x-5 font-bold">
          {
            socialLinks.map(social=>
              <IconLink 
                link={social.link} 
                key={social.name}
                Icon={social.icon}
              />
                
            )
          }
        </div>
    </nav>
  )
}

export default Nav