import axios from "axios";
import { useEffect, useState } from "react";

const UserSelect = ({email}) => {
    const [users,setUsers] = useState([]);
    useEffect(
        ()=>{
            axios.get(`http://localhost:9000/users/list`)
            .then(result=>{
                setUsers(result.data);
            })
            .catch(e=>{
                console.log(e);
            });
        },
        [email]
    );
    return ( 
        <div>
            <h1>select</h1>
            <p>{JSON.stringify(users)}</p>
        </div> 
    );
}
 
export default UserSelect;