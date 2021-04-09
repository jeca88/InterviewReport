import React, { useState, useEffect } from "react";
import "./LogIn.scss";
import { Redirect } from 'react-router-dom'

const LogIn = () => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const { email, password } = details;

  const [token, setToken] = useState(null);



  const submitHandler = (e) => {
    e.preventDefault();


    const url = "http://localhost:3333/login";
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    }).then(response => response.json())
      .then(response => {
        if (response.accessToken) {
          setToken(response.accessToken)
          localStorage.setItem("token", response.accessToken)
        } else {
          throw new Error("Wrong email or password. Please try again!")
        }
      }).catch((error) => {
        alert(error);
      })

  }



  return (

    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={e =>
            setDetails({ ...details, email: e.target.value })} value={email} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={e =>
            setDetails({ ...details, password: e.target.value })} value={password} />
        </div>
        <input type="submit" value="LOGIN" onClick={submitHandler} />
        {token && <Redirect to="/reports" />}
      </div>
    </form>
  )
}

export default LogIn;
