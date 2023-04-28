import UserSelect from './UserSelect';
import UserInsert from './UserInsert';

const User = () => {
  return (
    <>
      <h1>User</h1>
      <div>
        <UserInsert></UserInsert>
        <UserSelect></UserSelect>
      </div>
    </>
  );
};
 
export default User;