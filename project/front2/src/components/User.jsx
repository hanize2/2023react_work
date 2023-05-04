import UserSelect from './UserSelect';
import UserInsert from './UserInsert';

const User = () => {
  return (
    <div style={{padding:"1rem"}}>
      <h1>User</h1>
      <div>
        <UserInsert></UserInsert>
        <UserSelect></UserSelect>
      </div>
    </div>
  );
};
 
export default User;