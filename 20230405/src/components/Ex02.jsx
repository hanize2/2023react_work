import { useContext, useRef } from "react";
import { MyStyle } from "../contexts/MyStyleContext";

const Ex02 = () => {

    const mstyle = useContext(MyStyle);

    const ary = [];
    const aR = useRef(0);
    const bR = useRef(0);
    const cR = useRef(0);
    const doA = ()=>{
        ary.push(aR.current.value);
        ary.push(bR.current.value);
        ary.push(cR.current.value);
        console.log(ary.join(','));
    }
    return (
        <>
            <label style={mstyle}>aR</label>
            <input type="text" ref={aR}></input><br/>
            <label style={mstyle}>bR</label>
            <input type="text" ref={bR}></input><br/>
            <label style={mstyle}>cR</label>
            <input type="text" ref={cR}></input><br/>
            <button onClick={doA}>버튼</button>
        </>
    );
};

export default Ex02;
