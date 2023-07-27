import React,{ useState } from "react"


export default function Registationform1() {
    // const [email,setEmail]= useState(" ")
    // const [name,setName]= useState(" ")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [data,setData]=  useState([])

    const onhandle = (e)=>{
        e.preventDefault()
        setData([...data,{email,name}])
        setName("")
        setEmail("")

    }
  return (
    <div>
        <form onSubmit={onhandle}>
            <label htmlFor="">Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            <label htmlFor="" className="ms-5">Email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
      <button type="submit" className="btn btn-primary">Submit</button>
      <table className="table table-info mt-3">
        <thead>
            <tr>
                <td>NAme</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
           {data.map(a=>{
            return(
                <tr>
                    <td>{a.name}</td>
                    <td>{a.email}</td>
                </tr>
            )
                
           }
           
            )} 
        </tbody>
      </table>

      </form>
    
    </div>
  )
}
