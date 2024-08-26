import React from 'react'
import SectionWrapper from './SectionWrapper'
export default function Workout(props) {
  
  const {workout} = props
  return (
       <SectionWrapper header={"Welcome to"} title=
      {['The', 'DANGER','zone']}></SectionWrapper>
  )
}
