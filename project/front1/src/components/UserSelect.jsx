import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { selectContext } from "../App";

const UserSelect = () => {
    const {ok,setOk} = useContext(selectContext);
    console.log(`ok ${ok}`);
    const [users,setUsers] = useState([]);
    useEffect(
        ()=>{
            let myTimer = null;
            axios.get(`http://localhost:9000/users/list`)
            .then(result=>{
                setUsers(result.data);
                myTimer = setTimeout(() => {
                    setOk('select 완료');
                }, 2000);
            })
            .catch(e=>{
                console.log(e);
            });
            return ()=>{ clearTimeout(myTimer); };
        },
        [ok]
    );
    return ( 
        <div>
            <h1>select</h1>
            <p>{JSON.stringify(users)}</p>
        </div> 
    );
}
 
export default UserSelect;