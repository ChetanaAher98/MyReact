import React from 'react'

export default function Child({ name, age, hobbies, company }) {
    return (
        <div>
            <h1>This is Child Component</h1>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{hobbies[0]}</h1>
            <h1>{company.name}</h1>
        </div>
    )
}
