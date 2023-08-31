import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import quizz from '../quizz'

const Result = () => {
  const userDetails=JSON.parse(localStorage.steve)

 let username=userDetails.username
 let email= userDetails.email
//  console.log(email)


  const state1= useSelector(state=>state.correctScore)
  const wrong=useSelector(state=>state.wrongScore)

  let message = "";
  const totalScore = state1.score;

  if (totalScore > 15) {
    message = "Congratulations! You did an excellent job!";
  } else if (totalScore >= 10) {
    message = "Great job! You scored well.";
  } else if (totalScore >= 5) {
    message = "You passed the quiz!";
  } else {
    message = "You can improve. Keep trying!";
  }

  return (
    <>

    <div>{username}</div>
    <div>You have completed the Quiz</div>
    <div>Total Score: {state1.score}/{quizz.length} </div>
    <div>{message}</div>
        
    </>
  )
}

export default Result