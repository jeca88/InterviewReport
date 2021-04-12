import React, { useState, useEffect } from "react";
import "./LogIn.scss";
import { Redirect } from "react-router-dom";

const LogIn = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const { email, password } = details;
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [errMessage, setErrMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const url = "http://localhost:3333/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.accessToken) {
          setToken(response.accessToken);
          localStorage.setItem("token", response.accessToken);
        } else {
          throw new Error("Wrong email or password. Please try again!");
        }
      })
      .catch((error) => {
        setErrMessage(error.message);
      });
  };

  return (
    <div className="logIn">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Log in</h2>
          {errMessage && <span className="errMessage">{errMessage}</span>}

          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={password}
            />
          </div>
          <input className='login-btn' type="submit" value="LOGIN" onClick={submitHandler} />
          {token && <Redirect to="/reports" />}

        </div>
      </form>
    </div>
  );
};

export default LogIn;
