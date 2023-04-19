import React from 'react';

const Test = () => {
    const arr = [10,20];
    const objs = {a:"aa",b:"bb"};

    const doA = ()=>{ return "doA"; };
    const doB = function(){ return "doB"; };

    arr[0] = 30;
    objs.a = "aaa";
    
    return ( <div>
        Test
        <h3>{arr[0]}</h3>
        <h3>{objs.a}</h3>
        <h3>{doA()}</h3>
        <h3>{doB()}</h3>
    </div> );
}
 
export default Test;