import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function UseEffectDemo() {

    const [resourceType, setResourceType] = useState("todos")
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(res => {
                setData(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [resourceType])

    return (
        <div className='mt-5'>
            <button type="button" className='btn btn-primary'
                onClick={() => setResourceType("posts")}>Posts</button>
            <button type="button" className='btn btn-warning ms-5'
                onClick={() => setResourceType("comments")}>Comments</button>
            <button type="button" className='btn btn-success ms-5'
                onClick={() => setResourceType("users")}>Users</button>
            <h1 className='mt-3'>{resourceType}</h1>
            {data.map(a => {
                return (
                    <div>
                        {/* <p>{JSON.stringify(a)}</p> */}
                        <p>{a.email}</p>
                    </div>
                )
            })}
        </div>
    )
}
