import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import UserSelect from './components/UserSelect';

function App() {
  const [email,setEmail] = useState("");
  const emailinput = (e)=>{ setEmail(e.target.value); }

  const [name,setName] = useState("");
  const nameInput = (e)=>{ setName(e.target.value); }

  const [password,setPassword] = useState("");
  const passwordInput = (e)=>{ setPassword(e.target.value); }

  const dosave = ()=>{
    axios.post(`http://localhost:9000/users/insert`,{
      email,name,password
    }).then(()=>{
      setEmail(""); setName(""); setPassword("");
    }).catch(e=>{ console.log(e) });
  }
  return (
    <div className="App">
      <div><h1>insert</h1></div>
      <div>
        <div>
          <label>email</label>
          <input type='text' onChange={emailinput} value={email}/>
        </div>
        <div>
          <label>name</label>
          <input type='text' onChange={nameInput} value={name}/>
        </div>
        <div>
          <label>password</label>
          <input type='text' onChange={passwordInput} value={password}/>
        </div>
        <button onClick={dosave}>insert</button>
      </div>
      <UserSelect email={email}></UserSelect>
    </div>
  );
}

export default App;
