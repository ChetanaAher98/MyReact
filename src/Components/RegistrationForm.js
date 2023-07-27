import React, { useState } from 'react'

export default function RegistrationForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [data, setData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, { email, password, city, state }])
        setEmail("")
        setCity("")
        setState("")
        setPassword("")
    }

    return (
        <div>
            <form className='mt-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                        onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">City</label>
                    <input type="text" className="form-control" id="exampleInputCity1"
                        onChange={(e) => setCity(e.target.value)} value={city}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">State</label>
                    <input type="text" className="form-control" id="exampleInputState1"
                        onChange={(e) => setState(e.target.value)} value={state}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <table className="table table-info mt-3">
                <thead>
                    <tr>
                        <th scope="col">City</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">State</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(a => {
                        return (
                            <tr>
                                <td>{a.city}</td>
                                <td>{a.email}</td>
                                <td>{a.password}</td>
                                <td>{a.state}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
