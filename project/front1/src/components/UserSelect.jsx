import axios from "axios";
import { memo, useContext, useEffect, useState } from "react";
import { selectContext } from "../App";

const UserSelect = () => {
    const {ok,setOk} = useContext(selectContext);
    const [users,setUsers] = useState([]);
    useEffect(
        ()=>{
            console.log("useEffect 사용...");
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
 
export default memo(UserSelect);