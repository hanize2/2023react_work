import { useContext, useRef, useState } from 'react';
import { MyStyle } from '../contexts/MyStyleContext';
import { MyValue } from '../contexts/MyValueContext';
const Ex01 = () => {
    const mycolor = useContext(MyStyle);
    const {mm,setMm} = useContext(MyValue);

    const [cnt, setCnt] = useState(0);
    const aa = useRef(0);
    const doA = () => {
        setCnt(cnt + 1);
    };
    const doB = () => {
        aa.current = aa.current + 1;
        console.log(aa);
    };
    return (
        <div>
            <h2>mm = {mm}</h2>
            <h1 style={mycolor}>{cnt}</h1>
            <button onClick={doA}>버튼</button>
            <h1>{aa.current}</h1>
            <button onClick={doB}>버튼</button>
        </div>
    );
};

export default Ex01;
