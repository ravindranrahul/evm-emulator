import React from 'react'

export const Title = ({children} : {children:any}) => {
  return (
   <h3 className='font-semibold text-md inline-flex mb-2'>
      {children}
   </h3>
  )
}
