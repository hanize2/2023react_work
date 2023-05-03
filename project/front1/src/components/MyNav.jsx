import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const MyNav = () => {
  const navigate = useNavigate();
  const [mystyle, setMystyle] = useState({
    display: 'block',
  });
  const menu = () => {
    setMystyle(e => {
      return e.display === 'block'
        ? {
            display: 'none',
          }
        : {
            display: 'block',
          };
    });
  };
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1 style={{cursor:"pointer",padding:'.5rem'}} onClick={()=>{navigate('/')}}>HOME</h1>
        <h1 style={{cursor: 'pointer',padding:'.5rem'}} onClick={menu}>
          메뉴
        </h1>
      </div>
      <div style={mystyle}>
        <Link to="user">User</Link>
        <Link to="freeboard">FreeBoard</Link>
        <Link to="login">Login</Link>
      </div>
    </div>
  );
};
 
export default MyNav;