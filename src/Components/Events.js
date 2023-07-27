import React, { useState } from 'react'

export default function Events() {

    // let color1
    const [color1, setColor1] = useState("")

    function add(x, y) {
        alert("Addition program")
        alert(`Sum of ${x} + ${y} is ${x + y}`)
        console.log(x + y);
    }

    function showAlert() {
        alert("Hello! I am Akash")
    }

    function showName() {
        const x = "Akash"
        alert(x)
    }

    return (
        <div>
            <h1>This is events Page</h1>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                onChange={(e) => setColor1(e.target.value)}/>
            </div>

            <button type="button" className={`btn btn-${color1}`}
                onClick={() => add(7, 8)}>Click to get addition</button>
            <button type="button" className='btn btn-warning ms-5'
                onClick={showAlert}>Click to show alert</button>
            <button type="button" className='btn btn-success ms-5'
                onClick={showName}>Click to see Name</button>
        </div>
    )
}
