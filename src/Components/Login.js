import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const[username, setusername]= useState("")
    const[password, setpassword]=useState("")

    const Navigate = useNavigate()

    const userDetails=JSON.parse(localStorage.sqi)

    const signin=(e)=>{
      e.preventDefault()
      let b=userDetails.find(eachUser=>eachUser.username===username && eachUser.password===password)
       
      if(typeof b === 'undefined'){
        alert ('user data is incorrect')
      }
        else{
          Navigate('/dashboard')
        }
      
    }
  return (
    <>
    <nav className="navbar navbar-expand-lg  nav">
              <h3> Akinola Quiz </h3> 
    </nav>


    <div className="container-fluid">
        <div className="row">
          <div className="col-9 shadow-sm mx-auto">
            <h1 className="text-center">Sign Up Page</h1>
            <form>
              <input
                type="text"
                placeholder="Username"
                className='form-control my-2'
                onChange={(e)=>setusername(e.target.value)}
              />

              <input
                type="text"
                placeholder="Password"
                className="form-control my-2"
                onChange={(e)=>setpassword(e.target.value)}
                 />
                <button className='btn btn-primary'>log in</button>
    
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login