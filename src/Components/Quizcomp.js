import React, { useState } from "react";
import "../Styles/quizcomp.css"

const Quizcomp = () => {
  const quizz = [
    {
      question: "What is the capital of Nigeria?",
      choices: [
        {choice:"Kano"}, {choice:"Abuja"}, {choice:"Ibadan"}, {choice:"Akure"}],
      answer: "Abuja",
    },
    {
      question: "How many consonants are there alphabets?",
      choices: [ {choice:"20"}, {choice:"22"}, {choice:"21"}, {choice:"19"}],
      answer: "21",
    },
    {
      question: "Which word is similar to HELP?",
      choices: [ {choice:"Generous"}, {choice:"Give"}, {choice:"Aid"}, {choice:"Take"}],
      answer: "Aid",
    },
    {
      question: "A period of ten years is called _____?",
      choices: [{choice:"Dozen"}, {choice:"Millenium"}, {choice:"Century"}, {choice:"Decade"}],
      answer: "Decade",
    },
    {
      question: "The opposite INFERIOR is _____?",
      choices: [{choice:"Alpha"}, {choice:"Senior"}, {choice:"Superior"}, {choice:"Boss"}],
      answer: "Superior",
    },
    {
      question: "The head of primary school is called ____?",
      choices: [{choice:"Big head"}, {choice:"Principal"}, {choice:"Headmaster"}, {choice:"Class teacher"}],
      answer: "Headmaster",
    },
  ];

  // console.log(quizz)
//   const [currentquestion, setcurrentquestion] = useState(0);
//   const [currentscore, setcurrentscore] = useState(0);
  const [sampleQuiz, setSampleQuiz] = useState(0);
  const nextQuestion=()=>{
    const nextQuiz=sampleQuiz+1
    setSampleQuiz(nextQuiz)
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <h1> Akinola Quiz </h1> 
    </nav>
      <div className="bg">
          <div>Game Who Wants to Be a Millionaire? - Free online version</div>
      
       <div className="quiz1">
        <div className="pt-4">{quizz[sampleQuiz].question}</div>
        <div>{quizz[sampleQuiz].choices.map((answer)=>
        <div className="pt-3"> <button>{answer.choice}</button></div>
        )}</div>
        </div>
          
            
            {console.log(sampleQuiz)}
            {/* <div>
              {quizz.map((eachQuiz, index) => (
                <div key={index}>
                  <div>{eachQuiz.question}</div>
                  <button >{eachQuiz.choices[0].choice}</button>
                  <button className="ms-2">{eachQuiz.choices[1].choice}</button>
                  <button className="ms-2">{eachQuiz.choices[2].choice}</button>
                  <button className="ms-2">{eachQuiz.choices[3].choice}</button>
                </div>
              ))}
            </div> */}
          
        
       </div>
    </>
  );
};

export default Quizcomp;
