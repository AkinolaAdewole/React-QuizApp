import React from 'react'
import image1 from '../Pics/image1.png'
import "../Styles/dashboard.css"
import {useNavigate} from 'react'

const Dashboard = () => {
    
// let navigate= useNavigate()
    // const takeQuiz=()=>{
    //     navigate('/quiz')
    // }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <h1> Akinola Quiz </h1> 
    </nav>

    <div className='wwbm'><img src={image1} alt="" /></div>

    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Set Questions
                      </button>


                      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Understood</button>
                            </div>
                          </div>
                        </div>
                      </div>
    
    <button type="button" className="btn btn-primary" >Take Quiz</button>
    <button type="button" className="btn btn-primary">Result</button>
    
    </>
  )
}

export default Dashboard