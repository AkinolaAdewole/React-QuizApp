import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
// import { Link } from 'react-router-dom'
import '../Styles/signup.css'


const Signup = () => {
   let Navigate = useNavigate()
   
    const[email, setemail]=useState("")
    const[username, setusername]= useState("")
    const[password, setpassword]=useState("")
    const[allUsers, setAllUsers]=useState([])

    // useEffect(()=>{
    //   if(localStorage.sqi){
    //     let d = JSON.parse(localStorage.sqi)
    //     setAllUser(d)
    //   } else{
    //     setAllUser([])
    //   }
    // },[])

   
    // console.log(b)

    const submit=()=>{
      if(username!=="" && email!=="" && password!==""){
        let player={username, email, password}
      
        setAllUsers(()=>{
            let gamer =[...allUsers,player]
            localStorage.steph=JSON.stringify(gamer)
             return gamer
            console.log(gamer)
          })}
      
    }
  return (
    <>

     <div>
            <nav className="navbar navbar-expand-lg  nav">
              <h3> Akinola Quiz </h3> 
            </nav>

     
            
            <div className='pt-5'> 
              <h1>Game Who Wants to Be a Millionaire? - Free online version</h1>
            </div>
          
          
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
                      {/* <i class="fa fa-eye" aria-hidden="true"></i> */}

                      <input
                        type="text"
                        placeholder="Email"
                        className="form-control my-2"
                        onChange={(e)=>setemail(e.target.value)}
                      />

                      <input
                        type="text"
                        placeholder="Password"
                        className="form-control my-2"
                        onChange={(e)=>setpassword(e.target.value)} />

                      <button type="button" className="btn btn-primary" onClick={submit}>Sign up</button>
                      
                    </form>
                  </div>
                </div>
              </div> 
          
          </div>
    </>
  )
}

export default Signup