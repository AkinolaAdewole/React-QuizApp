import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import quizz from '../quizz'

const Result = () => {
  const state1= useSelector(state=>state.correctScore)
  const wrong=useSelector(state=>state.wrongScore)
  return (
    <>
        {state1.score}/{quizz.length}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad eaque sed dicta reiciendis ipsum velit obcaecati eum,
    <br /> voluptates, nam commodi? Voluptatum natus porro eum sed distinctio. Totam, sit vitae?</>
  )
}

export default Result