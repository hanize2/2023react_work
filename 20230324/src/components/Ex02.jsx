import {React,useState} from 'react';

let win=0,lose=0,eq=0;

const Ex02 = () => {
    const [info,setInfo] = useState('0승 0패 0무');
    const doGame = (e)=>{
        // 가위 0 바위 1 보 2
        let user; let com; 
        if( e.target.innerHTML === '가위') user = 0;
        else if( e.target.innerHTML === '바위') user = 1;
        else if( e.target.innerHTML === '보') user = 2;
        com = parseInt(Math.random()*3);
        console.log(`user = ${user} ${e.target.innerHTML}`);
        console.log(`com = ${com}`); 
        if (user == 0 && com == 0) eq++;
        else if (user == 0 && com == 1) lose++;
        else if (user == 0 && com == 2) win++;
        if (user == 1 && com == 1) eq++;
        else if (user == 1 && com == 2) lose++;
        else if (user == 1 && com == 0) win++;
        if (user == 2 && com == 2) eq++;
        else if (user == 2 && com == 0) lose++;
        else if (user == 2 && com == 1) win++;
        console.log(`win = ${win} lose = ${lose} eq = ${eq}`);
        setInfo(`${win}승 ${lose}패 ${eq}무`);
    }
    return (
        <>
            <h1>Ex02</h1>
            <p>가위바위보 게임입니다.</p>
            <button onClick={doGame}>가위</button>
            <button onClick={doGame}>바위</button>
            <button onClick={doGame}>보</button>
            <h2>{info}</h2>
        </>
    );
};

export default Ex02;
