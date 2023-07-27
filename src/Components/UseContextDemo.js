import React, { createContext,useState} from 'react'
// import compo from './Component1'

const ContextDemo = createContext()

export default function UseContextDemo({children}) {

    const [myName, setMyName] = useState("")
    
    const names = ["Bhushan", "Tejas", "Sakshi", "Chetana"]
    
    const person = {
        name: "Akash",
        age: 25,
        city:"Nashik"
    }

  return (
    <ContextDemo.Provider value={{myName, setMyName, names, person}}>
        {children}
        <h1>{names[1]}</h1>
        {/* <Component1/> */}
    </ContextDemo.Provider>
  )
}

export {ContextDemo}