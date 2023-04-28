import {Link} from 'react-router-dom';

const MyNav = () => {
  return (
    <div>
      <h1>메뉴</h1>
      <Link to="user">User</Link>
      <Link to="freeboard">FreeBoard</Link>
      <Link to="login">Login</Link>
    </div>
  );
};
 
export default MyNav;