import React,{ FC, ReactNode } from 'react'
import { IconType } from 'react-icons/lib'

interface Props{
    Icon:IconType,
    link:string
}


const IconLink:FC<Props> = ({Icon, link}) => {
  return (
    <a href={link} target="_blank" rel="noopener" className="w-7 h-7 cursor-pointer flex items-center justify-center rounded-full hover:scale-105 bg-gray-100 active:scale-90 transition-all duration-150 ease-linear">
        {<Icon/>}
    </a>
  )
}

export default IconLink