import React, { useState } from "react";
import { Button, Alert } from 'react-bootstrap';
import "../css/login.css";

const Login = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = 
  [
    {
      username: "Luke Skywalker",
      password: "U2FsdGVkX1/BeA7yHO+ZnDHbn5IZVsHhjPVyusvQPl0="
    },
    {
      username: "Chewbacca",
      password: "U2FsdGVkX1+bSQ3X40UIFR4249dEooHkaKbdAUjTblw="
    }
  ];

  const errors = 
  {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => 
  {
    //Prevent page reload
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) { userData.password === pass.value ? setIsSubmitted(true) : setErrorMessages({ pass: errors.pass }) } 
        else 
        {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Usuario</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Contraseña</label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
        <Button variant="success" type="submit">Ingresar</Button>{' '}
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Inicia Sesión</div>
        {isSubmitted ? <Alert variant="success">Has iniciado sesión</Alert> : renderForm}
      </div>
    </div>
  );
}

export default Login;