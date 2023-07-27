import React, { useContext } from 'react'
import { ContextDemo } from './UseContextDemo'
import Component3 from './Component3'

export default function Component2() {

    const { myName, setMyName } = useContext(ContextDemo)

    return (
        <div>
            <h1>This is component 2</h1>
            <button type="button" className='btn btn-info'
                onClick={() => {
                    const confirmName = window.confirm("Are you sure?")
                    if(confirmName === true){
                        const name = prompt("Enter your name")
                        setMyName(name)
                    }else{
                        alert("You cannot change name")
                    }
                }}>Click Here</button>
            <p>{myName}</p>
            <div className='mt-5'>
                <Component3 />
            </div>
        </div>
    )
}
