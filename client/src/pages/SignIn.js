import React from "react";

function SignIn() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginFormHandler = async function () {
  

  console.log({username, password})
      await fetch('http://localhost:3001/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
  
  };

  const signupFormHandler = async function () {
  
      await fetch('http://localhost:3001/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
  };
  

  console.log(username);

    return (
    <div class="container">
    <div style={{marginTop: "80px"}} class="jumbotron text-center">
      <h1 className="display-4">Stock Oven <span role="img" aria-label="Memo">&#128200</span></h1>
      <h4 className="mt-4">A Potential Investment Opportunity</h4>

      <hr />
      
        <h4 className="display-6">Username:  <input type="text" onChange={(e) => {setUsername(e.target.value)}}  id="username"/></h4>
        <h4 className="display-6">Password:  <input type="text" onChange={(e) => {setPassword(e.target.value)}}  id="password"/></h4>
  
      
    
      <button className="btn btn-primary btn-lg mt-4" onClick={() => loginFormHandler()} role="button" id="login-form">Login</button>
      <br />
      <button className="btn btn-primary btn-lg mt-4" onClick={() => signupFormHandler()} role="button" id="signup-form">Sign Up</button>
      
    </div>
    </div>
    )
}

export default SignIn;