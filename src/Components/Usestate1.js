import React, { useContext, useState } from 'react'
import { MySecondContext } from './AnotherUseContextDemo'


export default function Usestate1() {

  const { name, setName, age, setAge, details } = useContext(MySecondContext)

  return (
    <div>
      <button className='btn btn-primary mt-5 ms-5' onClick={() => {
        const fname = prompt("Enter your name")
        setName(fname)
      }}>Click Here to see your name</button>
      <button className='btn btn-info mt-5 ms-5' onClick={() => {
        const myAge = parseInt(prompt("Enter your age"))
        setAge(myAge)
      }}>Click Here to see your age</button>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </div>
  )
}
