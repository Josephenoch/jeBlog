import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick} className="hover:bg-JE-blue/90 active:bg-JE-blue inline-block px-8 py-4 mr-1 bg-JE-blue hover:scale-105 active:scale-[0.95] transition-all duration-200 text-white rounded-lg">{children}</button>
  )
}

export default Button