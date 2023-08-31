import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { correctFunct } from '../reduxSlice/Correctredux';
import { wrongFunct } from '../reduxSlice/Wrongredux';
import { useDispatch } from 'react-redux';
import quizz from '../quizz'
import "../Styles/quizcomp.css";
import "../Styles/btn.css";


const Quizcomp = () => {

 const Navigate=useNavigate()
 const dispatch=useDispatch()
  const [sampleQuiz, setSampleQuiz] = useState(0);
  const [wrong, setWrong]=useState(0)
  const [correct, setCorrect]=useState(0)
  const [showScore, setShowscore]=useState(false)
  const [title, settitle] = useState('Next')
  const [finishTest, setFinishTest]=useState('Finish Exam')
  const [style, setstyle] = useState('btn1')
  const [selectedOption, setSelectedOption] = useState('');
  // setAnswers({correct,wrong});

  const nextQuestion=()=>{
    const nextQuiz=sampleQuiz+1
    if(nextQuiz<quizz.length){
      setSampleQuiz(nextQuiz)

    } else{
      // setSampleQuiz(quizz.length)
      // alert('end of quiz')
      setstyle('btn2')
      settitle(finishTest)
    alert('end of quiz');
    } 
    
  }
console.log(quizz.length);
console.log(sampleQuiz);

  const buttonClick=(options, answer)=>{
    setSelectedOption(options);
     if(options.choice === answer ){
      setCorrect(correct+1)
      dispatch(correctFunct(1))

      
    //  alert('The Answer Is Correct')
     
     }else{
      setWrong(wrong + 1)
      dispatch(wrongFunct(1))
    //  alert('The Answer Is Wrong')
      
     }
    // alert(correct)
    // alert(wrong)

    // const nextQuiz=sampleQuiz+1
    // if(nextQuiz<quizz.length){
    //   setSampleQuiz(nextQuiz)
    // } else{
    //   alert('end of quiz')
    // }
  }
 // console.log('Score: ', score)
  const previousQuestion=()=>{

    const previousQuiz=sampleQuiz-1
    setSampleQuiz(previousQuiz)
  }

  const finish=()=>{
    Navigate('/result')
  }

  const hp=(e)=>{
    e.prevent.Default()
  }

  return (
    <>
        <div >
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
                        <li className="nav-item nav-link">
                          <Link to="/signin">
                           <h3 className="btn signout" >Sign Out</h3> 
                          </Link>
                        </li>
                    </ul>
                </div>
            </nav>


                <div className="bg">
                    <div>
                       <h1 className="text-light"> Game Who Wants to Be a Millionaire? - Free online version</h1>
                    </div>

                 
                    <div className="quiz1 container"  onLoad={(e)=>hp(e)}>

                          <div>
                              {
                                <>
                                <div className="pt-4"><h5 className="text-white">{quizz[sampleQuiz].question}</h5></div>

                                          <div>{quizz[sampleQuiz].choices.map((options, index)=>

                                              <div key={index} className="pt-3 ps-3 d-flex">

                                                      <input
                                                        type="radio"
                                                        name="quizOption"
                                                        checked={selectedOption === options}
                                                        onChange={() => buttonClick(options, quizz[sampleQuiz].answer)}
                                                      />
                                              <div className="text-white"> {options.choice}</div>
                                            </div>
                                        
                                          )}
                                          
                                          </div>
                                  
                                  <div className="pt-5 d-flex">
                                       <div>
                                        y<button className="button2" onClick={previousQuestion}>Previous</button> 
                                       </div>
                                            {sampleQuiz === quizz.length-1?
                                            <Link to="/result">
                                                <button onClick={finish} className={style}>Finish Test </button>
                                            </Link>:
                                            <button className={style} onClick={nextQuestion}>Next </button>}
                                          
                                        
                                          </div>
                                  
                                </>
                              }
                      </div>
                              
                    
                      
                      {/* {console.log(sampleQuiz)} */}
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
        </div>

        </div>

        {/* <div className="text">{correct}</div>
        <div className="text">{wrong}</div> */}
    </>
  );
};

export default Quizcomp;
