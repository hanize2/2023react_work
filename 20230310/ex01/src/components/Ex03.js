import React from 'react';

const Ex03 = () => {
    const doA = (name="nusida")=>{
        return name;
    };
    const arr1 = [10,20,30,40];
    const arr2 = arr1;

    const [...arr3] = arr1;

    arr1[0] = 20;
    arr3[0] = 40;

    return ( <div>
        <h1>{doA()}</h1>
        <h1>{doA("사키오카")}</h1>
        <h1>{`arr1 ${arr1}`}</h1>
        <h1>{`arr2 ${arr2}`}</h1>
        <h1>{`arr3 ${arr3}`}</h1>
        <h1>{`arr1 ${arr1}`}</h1>
    </div> );
}
 
export default Ex03;