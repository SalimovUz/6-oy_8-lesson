import React from 'react'

const text = (prop) => {
  return (
    <div>
      <h1 className='text-sm text-blue-950 font-bold'>{prop.text}</h1>
      <p className=' text-xs text-gray-500 font-bold'>{prop.title}</p>
    </div>
  )
}

export default text