import React from 'react'

const Car = () => {

    const car = {
        name: "Nexon",
        brand: "Tata"
    }

    const cars = ["Swift", "Rapid", "Polo"]

    const person = [
        {
            name: "Akash",
            age: 25
        },
        {
            name: "Bhushan",
            age: 23
        }, 
        {
            name: "Rushi",
            age: 22
        }
    ]

  return (
    <div>
      <h1>{car.name}</h1>
      <h1>{car.brand}</h1>
      {cars.map(a => {
        return(
            <p>{a}</p>
        )
      })}

      {Object.keys(person[0]).map(c => {
        return(
            <h1>Keys: {c}</h1>
        )
      })}
      {person.map(a => {
        return(
            <>
            <h1>{a.name}</h1>
            <h1>{a.age}</h1>
            </>
        )
      })}
    </div>
  )
}

export default Car
