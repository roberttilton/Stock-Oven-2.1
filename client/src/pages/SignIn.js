import React from "react";

function SignIn() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const usernameInputRef = React.useRef();
  const passwordInputRef= React.useRef();

  console.log(username);

    return (
    <div class="container">
    <div style={{marginTop: "80px"}} class="jumbotron text-center">
      <h1 className="display-4">Stock Oven <span role="img" aria-label="Memo">&#128200</span></h1>
      <h4 className="mt-4">A Potential Investment Opportunity</h4>

      <hr />
      <form>
        <h4 className="display-6">Username:  <input type="text" onChange={(e) => {setUsername(e.target.value)}} ref={usernameInputRef} id="username"/></h4>
        <h4 className="display-6">Password:  <input type="text" onChange={(e) => {setPassword(e.target.value)}} ref={passwordInputRef} id="password"/></h4>
  
      
    
      <a className="btn btn-primary btn-lg mt-4" href="" role="button" id="login-form">Login</a>
      <br />
      <a className="btn btn-primary btn-lg mt-4" href="" role="button" id="signup-form">Sign Up</a>
      </form>
    </div>
    </div>
    )
}

export default SignIn;