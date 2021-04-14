import React from "react";

function signIn() {

    return (
    <div class="container">
    <div style="margin-top: 80px;" class="jumbotron text-center">
      <h1 class="display-4">Date Night <span role="img" aria-label="Memo">&#128150</span></h1>
      <h4 class="mt-4">Where events become memories</h4>

      <hr />
      <form>
        <h4 class="display-6">Username:  <input type="text" id="username"/></h4>
        <h4 class="display-6">Password:  <input type="text" id="password"/></h4>
  
      
    
      <a class="btn btn-primary btn-lg mt-4" href="" role="button" id="login-form">Login</a>
      <br />
      <a class="btn btn-primary btn-lg mt-4" href="" role="button" id="signup-form">Sign Up</a>
      </form>
    </div>
    </div>
    )
}

export default signIn;