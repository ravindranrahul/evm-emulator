import React from 'react'
import { GrMemory } from 'react-icons/gr'
import { Card } from './ui/Card'
import { Title } from './ui/Title'

export const Memory = (props : {}) => {
  return (
    <Card>
     <Title> 
        <GrMemory size={20} className="mr-1" /> Memory
      </Title> 
    </Card>
  )
}
