import React, { useContext } from 'react'
import { ContextDemo } from './UseContextDemo'

export default function Component3() {

    const {person, names} = useContext(ContextDemo)

  return (
    <div>
      <h1>This is component 3</h1>
      <h1>{person.name}</h1>
    </div>
  )
}
