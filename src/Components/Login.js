import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading]= useState(false);
  const [player, setPlayer]=useState([])

  const userN = useRef(null);

  const Navigate = useNavigate();

  useEffect(() => {
    if(localStorage.steph){
      setIsLoading(true)
      let d = JSON.parse(localStorage.steph)
          setPlayer(d)
        } else{
          setPlayer([])
    }
  }, [])
  

  const userDetails = JSON.parse(localStorage.steph);

  const signin = () => {
    // e.prevent.Default()
    let b = userDetails.find(
      (eachUser) =>
        eachUser.username === username &&
        eachUser.password === password &&
        eachUser.email
    );

    if (typeof b === "undefined") {
      userN.current.innerHTML="username is not correct"
      // alert("user data is incorrect");
    }
    // else if(typeof b ==='undefined'){
    //
    // }
    else {
      Navigate("/dashboard");
      localStorage.steve = JSON.stringify(b);
      return b;
    }
  };

  // const hp=(e)=>{
  //   e.preventDefault()
  // }
  return (
    <>
      <nav className="navbar navbar-expand-lg  nav">
        <Link to="/">
          <div className="icon1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
            </svg>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
                <h3 className="btn btn-primary">Sign Up</h3>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div ref={userN}></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 shadow-sm mx-auto">
            <h1 className="text-center">Sign In</h1>
            <form>
              <input
                type="text"
                placeholder="Username"
                className="form-control my-2"
                onChange={(e) => setuserName(e.target.value)}
              />
             

              <input
                type="password"
                placeholder="Password"
                className="form-control my-2"
                onChange={(e) => setPassword(e.target.value)}
              />
              
              <button className="btn btn-primary" onClick={signin}>
                sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
