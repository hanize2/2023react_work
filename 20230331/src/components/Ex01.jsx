import { useEffect, useState } from 'react';

const Ex01 = () => {
    console.log('Ex01 랜더링..');
    const [cnt, setCnt] = useState(10);
    const [num, setNum] = useState(1);
    const addCnt = () => {
        setCnt(cnt + 1);
    };
    const addNum = () => {
        setNum(num + 1);
    };
    useEffect(() => {
        console.log('useEffect...실행됨...');
    }, [cnt]);
    return (
        <>
            <h1>{cnt}</h1>
            <button onClick={addCnt}>버튼</button>
            <h1>{num}</h1>
            <button onClick={addNum}>버튼</button>
        </>
    );
};

export default Ex01;
