import './App.css';
import React, { createContext, useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import { Divflex100 } from './mystyle/mystyle';
import FreeBoard from './components/FreeBoard';

export const okContext = createContext('');

function App() {
  const [ok, setOk] = useState('');
  return (
    <div className="App">
      <Divflex100>
        <Link to="FreeBoard">FreeBoard</Link>
        <Link to="Users">Users</Link>
      </Divflex100>
      <okContext.Provider value={{ok,setOk}}>
        <Routes>
          <Route path='FreeBoard' element={<FreeBoard/>}></Route>
          <Route path='Users'></Route>
        </Routes>
      </okContext.Provider>
    </div>
  );
}

export default App;
