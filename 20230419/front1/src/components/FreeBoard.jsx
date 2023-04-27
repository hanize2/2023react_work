import axios from 'axios';

import UserSelect from '../components/UserSelect';
import {Div50, Divflex100} from '../mystyle/mystyle';

import {useState} from 'react';
import { useContext } from 'react';
import { okContext } from '../App';

const FreeBoard = () => {
  const [email, setEmail] = useState('');
  const {ok, setOk} = useContext(okContext);
  const emailinput = e => {
    setEmail(e.target.value);
  };

  const [name, setName] = useState('');
  const nameInput = e => {
    setName(e.target.value);
  };

  const [password, setPassword] = useState('');
  const passwordInput = e => {
    setPassword(e.target.value);
  };

  const dosave = () => {
    axios
      .post(`http://localhost:9000/users/insert`, {
        email,
        name,
        password,
      })
      .then((result) => {
        setEmail('');
        setName('');
        setPassword('');
        setOk((e)=>e===''?'등록되었습니다':`${e}!`);
      })
      .catch(e => {
        console.log(e.message);
        setOk((e)=>e===''?'이미 등록되어있습니다.':`${e}!`);
      });
  };
  return (
    <Divflex100 style={{height: '400px'}}>
      <Div50>
        <div>
          <h1>insert</h1>
        </div>
        <div>
          <div>
            <label>email</label>
            <input type="text" onChange={emailinput} value={email} />
          </div>
          <div>
            <label>name</label>
            <input type="text" onChange={nameInput} value={name} />
          </div>
          <div>
            <label>password</label>
            <input type="text" onChange={passwordInput} value={password} />
          </div>
          <button onClick={dosave}>insert</button>
          <h2>{ok}</h2>
        </div>
      </Div50>
      <Div50>
        <UserSelect ok={ok}></UserSelect>
      </Div50>
    </Divflex100>
  );
};
 
export default FreeBoard;