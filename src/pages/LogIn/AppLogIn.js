import React, { useState } from "react";
import LogIn from '../LogIn/LogIn';

const AppLogIn = () => {
  const adminUser = {
    email: "dev@dev.com",
    password: "$2a$10$Ht9ATCnB3LhyEpPg.c/GOuLzkMYD2WRPZ3ZtFVP.uVCrx.nW/rwVq",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser ({
        name:details.name,
        email:details.email
      })
    } else {
      console.log("Details do not match");
      setError("Details do not match")
    }
  };
  const Logout = (details) => {
    setUser ({
      name:"", email:""
    });
  };

  return (
    <div className="AppLogIn">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            {" "}
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}> Logout</button>
        </div>
      ) : (
        <LogIn Login={Login} error={error} />
      )}
    </div>
  );
};

export default AppLogIn;
