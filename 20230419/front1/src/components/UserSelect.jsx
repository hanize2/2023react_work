import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {okContext} from '../App';

const UserSelect = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const {ok, setOk} = useContext(okContext);
  const [pagecount, setPagecount] = useState(1);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/users/list/${page}`)
      .then(result => {
        setUsers(result.data);
        console.log(result.data.length);
        setTimeout(() => {
          setOk('');
        }, 5000);
      })
      .catch(e => {
        console.log(e);
      });
    axios
      .get(`http://localhost:9000/users/count`)
      .then(result => {
        let rowCount = parseInt(result.data);
        if( rowCount % 5 === 0 )
            rowCount = parseInt(rowCount / 5);
        else
            rowCount = parseInt(rowCount/5)+1;
        setPagecount(rowCount)
      })
      .catch(e => {
        console.log(e);
      });
  }, [ok, page]);
  return (
    <div>
      <h1>select</h1>
      <p>{JSON.stringify(users)}</p>
      <ul style={{display: 'flex', listStyle: 'none'}}>
        {[...Array(pagecount)].map((_,index) => {
          return (
            <li key={index}
              style={{
                padding: '.5rem',
                backgroundColor: 'ActiveBorder',
                cursor: 'pointer',
                margin: '1px',
              }}
              onClick={() => {
                setPage(index+1);
              }}
            >
              {index+1}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
 
export default UserSelect;