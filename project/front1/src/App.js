import './App.css';
import React, { createContext, useState } from 'react';
import axios from 'axios';
import UserSelect from './components/UserSelect';

export const selectContext = createContext();

function App() {

  const [ok,setOk] = useState("");

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
      setOk((result)=>{
        if(result === 'select 완료' || result ==='')
          return '등록되었습니다.';
        else
          return result+'!';
      });
    }).catch(e=>{ 
      setOk('email 중복입니다.등록실패');
     });
  }
  return (
    <selectContext.Provider value={{ok,setOk}}>
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
          <h1>{ok}</h1>
        </div>
        <UserSelect></UserSelect>
      </div>
    </selectContext.Provider>
  );
}

export default App;
