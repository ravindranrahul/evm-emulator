import React from 'react'

export const Card = ({children} : any) => {
  return (
    <div className='not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25 p-3'>
      {children} 
    </div>
  )
}
