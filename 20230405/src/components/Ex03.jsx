import { useContext, useState } from "react";
import { MyValue } from "../contexts/MyValueContext";

const Ex03 = () => {
    const {mm,setMm}= useContext(MyValue);
    const [value,setValue] = useState();
    const [info,setInfo] = useState('input 창에 값을 넣으면 h3에 값이 바뀝니다.');
    const doA = (e)=>{
        if( e.target.value.length < 5){
            setInfo("값의 길이가 5보다 작습니다.");
        }
        else{
            setInfo("값의 길이가 5보다 큽니다.");
        }
        setValue(e.target.value);
    }
    return (
        <>
            <h2>mm= {mm}</h2>
            <button onClick={()=>{setMm(mm+1)}}>버튼</button>
            <h3>value = {value}</h3>
            <input type="text" onChange={doA} />
            <p>{info}</p>
        </>
    );
};

export default Ex03;
