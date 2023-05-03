import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const emailinput = e => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState('');
  const passwordInput = e => {
    setPassword(e.target.value);
  };
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
    </div>
  );
};
 
export default Login;