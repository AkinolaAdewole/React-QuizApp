import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/quiztest.css'


const Quiztest = () => {
  
  // console.log(quizy)
  // let b=quizy.find(
  //   eachQuestion=>eachQuestion.questn
  //    && eachQuestion.correctAnswer)

  const[question,setQuestion]=useState([])
  const[disQuestion, setDisQuestion]=useState([])
  const[correctAns, setCorrectAns]=useState("")

useEffect(() => {
  const quizy=JSON.parse(localStorage.wwbm)
  let b=Math.floor(Math.random()*quizy.length);

  setQuestion(quizy)
  setDisQuestion(()=>quizy[b]);
  // console.log(quizy[b].optionA)

  let Ans=quizy[b].correctAnswer
  setCorrectAns(Ans);
  console.log(Ans)
}, [])



  // let questn=b.questn
  // let answer=b.correctAnswer
  // console.log(b)


  const klik=(e)=>{
     if(e===correctAns)
     {alert('correct')}
     else{
      alert("wrong")
     }

  
  }
  //    const nextQuiz=sampleQuiz+1
  //    if(nextQuiz<quizy.length){
  //     setSampleQuiz(nextQuiz)}
  //     else{
  //       alert("End of Quiz")
  //     }

  // const [sampleQuiz, setSampleQuiz] = useState(0);
  // const nextQuestion=()=>{
  //   const nextQuiz=sampleQuiz+1
  //   if(nextQuiz<b.length){
  //     setSampleQuiz(nextQuiz)}
  //     else{
  //       alert("End of Quiz")
  //     }
    
  // }
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
          </nav>


    <div>Akinola</div>
    <div>{disQuestion.questn}</div>
    <div className='button' onClick={(e)=>klik(e.target.innerHTML)}>{disQuestion.optionA}</div>
    <div className='button mt-3' onClick={(e)=>klik(e.target.innerHTML)}>{disQuestion.optionB}</div>
    <div className='button mt-3' onClick={(e)=>klik(e.target.innerHTML)}>{disQuestion.optionC}</div>
    <div className='button mt-3' onClick={(e)=>klik(e.target.innerHTML)}>{disQuestion.optionD}</div>
      {/* <div>{disQuestion.questn}</div> */}
      {/* <div>{quizy.map((options,index)=>
       <div key={index}>
        <div>{options.questn}</div>
        <button onClick={()=>klik(options,answer)}>{options.optionA}</button>
         <button onClick={()=>klik(options,answer)}>{options.optionB}</button>
        <button onClick={()=>klik(options,answer)}>{options.optionC}</button>
        <button onClick={()=>klik(options,answer)}>{options.optionD}</button>
       </div> )}</div> */}
    </>
  )
}

export default Quiztest;