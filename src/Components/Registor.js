import React, { useState } from 'react'
export default function Registor() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const [add, setAdd] = useState("")
    const [data, setData] = useState([])

    const abc = (e) => {
        e.preventDefault()
        setData([...data, { email, password, name, add }])
        setName("")
        setEmail("")
        setPassword("")
        setAdd("")
    }

    return (
        <div>
            <form onSubmit={abc}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Address</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setAdd(e.target.value)} value={add} />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <table>
                <tbody>
                    {data.map(a => {
                        return (
                            <tr>
                                <td>{a.email}</td>
                                <td>{a.password}</td>
                                <td>{a.name}</td>
                                <td>{a.add}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
































































































































































































































































































































































































































































































































































































































































































































































































































































































































