import React, { useState, useEffect } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

 

const Login = () => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [newArr, setNewArr] = useState([]);

  const [user, getUser] = useState([]);

  const [loggedIn , setLoggedIn] = useState([])

 

  const allArr = { email: email, password: password };

  let navigate = useNavigate();

 

  useEffect(()=>{

    localStorage.setItem("userData",JSON.stringify(loggedIn))

  },[loggedIn])

 

  useEffect(() => {

    getAllUser();

  }, []);

 

  const getAllUser = async () => {

    const result = await axios.get("http://localhost:3005/users");

    getUser(result.data);

  };

 

  const submitForm = (e) => {

    e.preventDefault();

    if (email && password) {

      setNewArr([...newArr, allArr]);

 

      if (user.find((val) =>allArr.email === val.email && allArr.password === val.password)) {

        setLoggedIn(user.filter((val) => allArr.email === val.email && allArr.password === val.password));

       setTimeout(() => {

        navigate("/home");

       }, 1000);

       

      } else if (

        user.find(

          (val) =>

            allArr.email === val.email && allArr.password !== val.password

        )

      ) {

        alert("password is wrong !");

      } else {

        alert("You have not registered yet,please register");

      }

    } else alert("All field should be filled !");

  };

 

  console.log(loggedIn)

  return (

    <>

      <nav className="navbar navbar-expand-lg bg-dark ">

        <div className="container-fluid">

          <a className="navbar-brand text-warning fw-bold" href="/">

            Fashion Paradise

          </a>

        </div>

      </nav>

      <div id="log-container" className="container ">

        <h1 className="text-warning text-center mt-5">Login</h1>

 

        <div className="row">

          <div className="col-md-6 mx-auto shadow-lg bg-light p-5">

            <form onSubmit={submitForm}>

              <div className="form-group ">

                <label htmlFor="user" />

                Email

                <label />

                <input

                  type="email"

                  name="email"

                  id="email"

                  className="form-control "

                  value={email}

                  onChange={(e) => setEmail(e.target.value)}

                />

              </div>

              <div className="form-group">

                <label htmlFor="user" />

                Password

                <label />

                <input

                  type="password"

                  name="password"

                  id="password"

                  className="form-control"

                  value={password}

                  onChange={(e) => setPassword(e.target.value)}

                />

              </div>

              <div className="text-center mt-3">

                <button to="/" className="btn btn-dark text-warning mt-2">

                  LOGIN

                </button>

              </div>

            </form>

 

            <p>

              Have an account?{" "}

              <a

                className="mt-2 text-warning"

                type="button"

                onClick={() => {

                  navigate("/register");

                }}

              >

                Register

              </a>

            </p>

          </div>

        </div>

      </div>

    </>

  );

};

 

export default Login;

       

 

    