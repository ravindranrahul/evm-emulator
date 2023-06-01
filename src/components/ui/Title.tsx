import React from 'react'

export const Title = ({children} : {children:any}) => {
  return (
   <h3 className='font-semibold text-md hidden xl:inline-flex mb-2'>
      {children}
   </h3>
  )
}
