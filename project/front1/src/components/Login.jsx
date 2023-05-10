import {useState} from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const emailinput = e => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState('');
  const passwordInput = e => {
    setPassword(e.target.value);
  };

  const doLogin = ()=>{
    axios.post(
      `http://localhost:9000/auth/login`,{
        email,password
      }
    ).then(result =>{
      console.log(result);
    })
  }
  return (
    <div style={{padding: '1rem'}}>
      <h1>Login</h1>
      <div>
        <label>email</label>
        <input
          style={{display: 'block', width: '50%', height: '1.7rem'}}
          type="text"
          onChange={emailinput}
          value={email}
        />
      </div>
      <div>
        <label>password</label>
        <input
          style={{display: 'block', width: '50%', height: '1.7rem'}}
          type="text"
          onChange={passwordInput}
          value={password}
        />
      </div>
      <button
        style={{
          padding: '0.5rem',
          marginTop: '0.5rem',
          fontSize: '1.2rem',
        }}
        onClick={doLogin}
      >
        Login
      </button>
    </div>
  );
};
 
export default Login;