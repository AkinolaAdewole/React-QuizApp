import React, { useState } from 'react'
import image1 from '../Pics/image1.png'
import "../Styles/dashboard.css"
import { useNavigate, Link } from 'react-router-dom'

const Dashboard = () => {
  let Navigate=useNavigate()


  const[questn,setQuestn]=useState("")
  const[optionA, setOptionA]=useState("")
  const[optionB, setOptionB]=useState("")
  const[optionC, setOptionC]=useState("")
  const[optionD, setOptionD]=useState("")
  const[correctAnswer, setCorrectAnswer]=useState("")

  const[allQuestn, setAllQuestn]=useState([])

  const userDetails=JSON.parse(localStorage.steve)
  // console.log(userDetails)

 let username=userDetails.username
 let email= userDetails.email
 console.log(email)

  const saveQuestion=()=>{
    if(questn!=="" && optionA!=="" && optionB!=="" && optionC!=="" && optionD!=="" && correctAnswer!==""){
      let questioneer = {questn,optionA, optionB, optionC, optionD, correctAnswer}
    
    setAllQuestn(()=>{
      let examiner=[...allQuestn,questioneer]
      localStorage.wwbm=JSON.stringify(examiner)
      return examiner
    })}
  }


  const takeQuiz=()=>{
    Navigate('/quiz')
  }

  const signout=()=>{
    localStorage.removeItem('steve')
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

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                </button>
               
                <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link to="/signin">
                           <h3 className="btn btn-primary" onClick={signout} >Sign Out</h3> 
                          </Link>
                        </li>
                    </ul>
                </div>

                {/* <button onClick={signout}>Sign Out</button> */}
            </nav>

            
            <div> Welcome {username} </div>

          
          
          
          <div className='wwbm'><img src={image1} alt="" /></div>

               
              <div className='row'>
                <div type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  Set Questions
                </div>

                <div type="button" className="btn btn-primary mt-2" onClick={takeQuiz} >Take Quiz</div>
                <div type="button" className="btn btn-primary mt-2">Result</div>
              </div>


                          {/* Modal */}

                      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                          <div className="modal-content">
                       
                         
                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              
                              <h5 className="" >SET QUESTION</h5>

                    <div className='container-fluid'>
                              <div className="input-group input-group-lg m">
                                {/* //Input for Question */}
                                <input 
                                type="text" className="form-control form-control-lg" 
                                placeholder='QUESTION'
                                onChange={(e)=>setQuestn(e.target.value)}/>
                              </div>
                                      
                            
                        
                          <div className='mt-4'> 
                              <h3>OPTIONS</h3>
                            {/* // Input for options */}

                                <div className='mt-3'>
                                <input type="text" className="form-control" 
                                placeholder='OPTION A'
                                onChange={(e)=>setOptionA(e.target.value)}/>
                                </div> 
                                  
                                  <div className="mt-3">
                                    <input type="text" className="form-control" 
                                    placeholder='OPTION B'
                                    onChange={(e)=>setOptionB(e.target.value)}/>
                                  </div>
                            
                                <div className="mt-3">
                                  <input type="text" className='form-control' 
                                  placeholder='OPTION C'
                                  onChange={(e)=>setOptionC(e.target.value)}/>
                                </div>

                                <div className="mt-3">
                                  <input type="text" className='form-control' 
                                  placeholder='OPTION D'
                                  onChange={(e)=>setOptionD(e.target.value)}/>
                                </div>
                            
                        </div>
                      

                        <div className='mt-5'>
                          <h3>CORRECT ANSWER</h3>
                        <input type="text" className='form-control' 
                        placeholder='CORRECT ANSWER'
                        onChange={(e)=>setCorrectAnswer(e.target.value)}/>
                        </div>
                        
                        </div>
                            
                            

                                  
                                      

                            <div className="modal-footer">
                              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" onClick={saveQuestion}>Save</button>
                            </div>

                          </div>
                        </div>
                      </div>
    
    
    
    
    
    </>
  )
}

export default Dashboard