import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useNavigate,} from 'react-router-dom'
import axios from 'axios'

// import { Link } from 'react-router-dom'
import '../Styles/signup.css'


const Signup = () => {
   let Navigate = useNavigate()
   
    const[username, setusername]= useState("")
    const[password, setpassword]=useState("")
    const[allUsers, setAllUsers]=useState([])

    const[isLoading, setIsLoading]=useState(false)
    const[isPending, setIsPending]=useState(true)

    useEffect(()=>{
      setTimeout(() => {
        setIsPending(false)
        if(localStorage.steph){
          // setIsPending(false)
          let d = JSON.parse(localStorage.steph)
          setAllUsers(d)
        } else{
          setAllUsers([])
        }
      }, 3000);
      
    },[])

    const submit=()=>{
      if(username!=="" && password!==""){
        let player={username, password}
      
        setAllUsers(()=>{
            let gamer =[...allUsers,player]
            Navigate('/signin')
            localStorage.steph=JSON.stringify(gamer)
             return gamer
            // console.log(gamer);
          })}
    }

    const loadpage=()=>{
      // if(!isLoading){
      //   setTimeout(() => {
      //     return (<div>Loading</div>)
      //   }, 5000);
      // }
      setIsLoading(true)
      if(isLoading==="false"){
        alert('false')
      }else{
        // alert('true')
        setTimeout(() => {
          
        }, 5000);
      }
    }

    

        const signin= async ()=>{
          setIsLoading(true);
          axios.get("https://jsonplaceholder.typicode.com/photos")
          .then(res => {
            // console.log(res);
            setIsLoading(false)
          }).catch((error) => {
            console.log('error', error);
          })

          Navigate('/signin')
        }



    
  return (
    <>
            <nav className="navbar navbar-expand-lg  nav">
           
              
              <Link to="/">
                <div className='icon1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                      <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
                    </svg>
                </div>
              </Link>
                    <h3 className='text-white'> Akinola Quiz </h3>


              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
               
               <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                         
                         <Link  to="/signin" >
                             
                               <h3 className="btn text-white signin" onClick={loadpage}>Sign in</h3> 
                            
                          </Link>
          
                        </li>
                    </ul>
               </div>
               
            </nav>
            

            
        <div className='bg1'>
                  <div className='pt-3'> 
                    <h1 className='color'>Game Who Wants to Be a Millionaire? - Free online version</h1>
                  </div>
                
                  <div className='pt-3'>
                      <div className="container-fluid">
                          <div className="row">
                            <div className="col-6 shadow mx-auto">
                              <h1 className="text-center color">Sign Up</h1>
                                    <form>
                                      <input
                                        type="text"
                                        placeholder="Username"
                                        className='form-control my-2'
                                        onChange={(e)=>setusername(e.target.value)}
                                      />


                                      <input
                                        type="password"
                                        placeholder="Password"
                                        className="form-control my-2"
                                        onChange={(e)=>setpassword(e.target.value)} />

                                      <button type="button" className="rounded-1 " onClick={submit}>Sign up</button>
                                      
                                      
                                      <div className='user pt-3' > 
                                            <div className='color'>Already a user?</div>  
                                            <div><button className='login rounded-1' onClick={signin}>Sign in</button></div> 
                                      </div>
                                      
                                    </form>
                              </div>
                            </div>
                          </div>
                      </div>
          
            </div>
          
    </>
  )
}

export default Signup