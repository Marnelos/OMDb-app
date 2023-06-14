import React from 'react'

interface Props{
  children: string
}

const Button = ({children}:Props) => {

  return (
    <button className="btn btn-light">{children}</button> 
  )
}

export default Button
