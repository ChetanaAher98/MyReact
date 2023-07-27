import React, { createContext, useState } from 'react'

const MySecondContext = createContext()

export default function AnotherUseContextDemo({children}) {


    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    
    const details = [
        {
            company: "Sumago",
            city: "Nashik"
        },
        {
            company: "Infosys",
            city: "Pune"
        },
        {
            company: "TCS",
            city: "Banglore"
        },
    ]
    const dob=23

    return (
        <MySecondContext.Provider value={{name, setName, age, setAge, details,dob}}>
            {children}
        </MySecondContext.Provider>
    )
}

export {MySecondContext}