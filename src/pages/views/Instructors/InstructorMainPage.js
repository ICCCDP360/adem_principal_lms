import React from 'react'
import InstructorContent from './InstructorContent'
import InstructorsHeader from './InstructorsHeader'

function InstructorMainPage() {
  return (
    <div style={{padding:'1%'}}>
        <InstructorsHeader/>
        <InstructorContent/>
    </div>
  )
}

export default InstructorMainPage