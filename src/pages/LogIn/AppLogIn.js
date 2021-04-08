import React, { useState } from "react";

const AppLogIn = () => {
  const adminUser = {
    email: "balbla@gmail.com",
    password: "admin1234",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  };
  const Logout = (details) => {
    console.log("Logout");
  };

  return (
    <div className="AppLogIn">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            {" "}
            Welcome, <span>{user.name}</span>
          </h2>
          <button> Logout</button>
        </div>
      ) : (
        <LogIn />
      )}
    </div>
  );
};

export default AppLogIn;
