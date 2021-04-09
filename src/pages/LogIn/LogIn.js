import React, { useState, useEffect } from "react";
import "./LogIn.scss";

const LogIn = () => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const { email, password } = details;

  const [token, setToken] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(password);
    const url = "http://localhost:3333/login";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((data) => data.json())
      .then((data) => setToken(data.accessToken));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Log in</h2>

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
        <input
          className="submit"
          type="submit"
          value="LOG IN"
          onClick={submitHandler}
        />
      </div>
    </form>
  );
};

export default LogIn;
