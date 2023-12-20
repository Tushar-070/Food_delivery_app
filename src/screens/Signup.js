import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
const [credentials,setcredentials]=useState({name:'',email:'',password:'',geolocation:''})
let nevigate=useNavigate()


    const handleSubmit=async(e)=>{
        e.preventDefault()
        const response=await fetch('http://localhost:5000/api/creatuser',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation},)
        })
        const json=await response.json()
        console.log(json)

        if(!json.success){
            alert('Enter valid credentials')
        }
        if(json.success){
         nevigate('/login')
        }
        
    }
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <>
            <Navbar />
            <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" name='name' value={credentials.name} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword12">Location</label>
                    <input type="text" className="form-control" id="exampleInputPassword12" placeholder="Address" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
                </div>
                <button type="submit" className="btn m-3 btn-primary">Submit</button>
                <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
            </form>
            </div>




        </>
    )
}
