import React from 'react'
import Child from './Child'

export default function PropsDemo({name, age, hobbies, company}) {
  return (
    <div>
      <h1>This is PropsDemo page</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>

      <h1>{hobbies[0]}</h1>
      <h1>{company.name}</h1>
      <hr />
      <Child name={name} age={age} hobbies={hobbies} company={company}/>
    </div>
  );
}
