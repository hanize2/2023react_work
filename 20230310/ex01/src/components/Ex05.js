import React from 'react';

const Ex05 = () => {
    const names = ['사키오카', '누시다', '고토'];
    names.map((name) => {
        console.log(`name = ${name}`);
    });
    const a = 10;
    const b = "10";
    // a==b?
    // a===b?
    const names1 = names.filter( (name)=>{ return name !== '사키오카' });
    return <div>
        { names.map( name=> <h1>{name}</h1> ) }
        { names1.map( name=> <h1>{name}</h1> ) }
    </div>;
};

export default Ex05;
