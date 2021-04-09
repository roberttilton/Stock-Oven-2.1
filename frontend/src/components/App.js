import React from 'react';
import '../styles/App.css';

function LoginFormInput() {
  return 
}

function LoginForm() {
  
  const [email, setEmail] = React.useState('') 
  console.log(email);
  const [password, setPassword] = React.useState('');  

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: "column", 
      height: "300px", 
      width: "400px", 
      border: "2px solid rebeccapurple",
      justifyContent: "space-around",
      alignContent: "center",
      padding: "24px"

    }}>
      <input onChange={(e) => setEmail(e.target.value)} style={{ padding: "10px"}}/>     
      <input onChange={(e) => setPassword(e.target.value)} style={{ padding: "10px"}}/>   
        {email}
        {password}
      <button style={{ padding: "6px", borderRadius: "8px", alignSelf: "center", width: "50%" }}>Login</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">  
      <LoginForm />
    </div>
  );
}

export default App;
