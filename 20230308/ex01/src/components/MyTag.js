import React, { useState } from 'react';

const MyTag = (props) => {
    const name = props.name;

    // const arr = [10,function(){ alert('test') }];
    // const [a,b] = arr;

    // const objs = {a:"aaa",b:"bbb"};
    // const {a,b} = objs;

    const [age,setAge] = useState(props.age);
    
    const addAge = function(){ setAge(age+1); };
    const subAge = ()=>{ setAge(age-1); };

    return ( <div>
        <h2>MyTag</h2>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <button onClick={addAge}>증가</button>
        <button onClick={subAge}>감소</button>
    </div> );
}
 
export default MyTag;
