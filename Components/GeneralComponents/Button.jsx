import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick} className="inline-block px-8 py-4 mr-1 bg-JE-blue text-white rounded-lg">{children}</button>
  )
}

export default Button