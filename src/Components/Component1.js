import React, { useContext } from 'react'
import { ContextDemo } from './UseContextDemo'
import Component2 from './Component2'

export default function Component1() {

   const {person, names} = useContext(ContextDemo)

  return (
    <div>
      <h1>This is component 1</h1>
      <h1>{person.city}</h1>
      {/* <div className='mt-5'>
        <Component2/>
      </div> */}
    </div>
  )
}
