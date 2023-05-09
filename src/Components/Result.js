import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import quizz from '../quizz'

const Result = () => {
  const userDetails=JSON.parse(localStorage.steve)

  
  const state1= useSelector(state=>state.correctScore)
  const wrong=useSelector(state=>state.wrongScore)
  return (
    <>
        {state1.score}/{quizz.length}
    </>
  )
}

export default Result