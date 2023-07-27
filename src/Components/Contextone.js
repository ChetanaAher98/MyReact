import React,{useContext,useState} from 'react'
import { MySecondContext } from './AnotherUseContextDemo'
export default function Contextone() {
    const {name,setName,age,setAge,details,dob}=useContext(MySecondContext)
  return (
    <div className='mt-5'>
      <h1>{details[1].company}</h1>
      <h1>{dob}</h1>
    </div>
  )
}
