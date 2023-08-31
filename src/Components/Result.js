import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import quizz from '../quizz'

const Result = () => {
  const userDetails=JSON.parse(localStorage.steve)

 let username=userDetails.username
 let email= userDetails.email
 console.log(email)


  const state1= useSelector(state=>state.correctScore)
  const wrong=useSelector(state=>state.wrongScore)
  return (
    <>

    <div>{username}</div>
    <div>You have completed the Quiz</div>
    <div>Total Score: {state1.score}/{quizz.length} </div>
        
    </>
  )
}

export default Result