import React, { useContext } from 'react'
import { MySecondContext } from './AnotherUseContextDemo'

export default function Contextfile() {
    const {name,setName,age,setAge,details}=useContext(MySecondContext)
  return (
    <div>
      <h1>{details[1]}</h1>
    </div>
  )
}
