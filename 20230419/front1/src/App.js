import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email,setEmail] = useState("");
  const emailinput = (e)=>{ setEmail(e.target.value); }
  const dosave = ()=>{
    axios.post(`http://localhost:9000/users/insert`,{
      email
    }).then(()=>{
      setEmail("");
    });
  }
  return (
    <div className="App">
      <input type='text' onChange={emailinput} value={email}/>
      <button onClick={dosave}>insert</button>
    </div>
  );
}

export default App;
