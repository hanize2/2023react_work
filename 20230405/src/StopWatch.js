import React, { useEffect, useRef, useState } from 'react';

const StopWatch = () => {
    const [curTime, setCurtime] = useState(0);
    let timerId = 0;
    const [op, setOp] = useState(true);
    const mytime = useRef(null);

    useEffect(() => {
        mytime.current = timerId;
        if (op) {
            timerId = setInterval((e) => {
                setCurtime((before) => before + 1);
            }, 10);
            return () => {
                clearInterval(timerId);
            };
        }
    }, [op]);
    return (
        <>
            <h1>{curTime}</h1>
            <button
                onClick={() => {
                    setOp(true);
                }}
            >
                시작
            </button>
            <button
                onClick={() => {
                    setOp(false);
                }}
            >
                멈춤
            </button>
            <button
                onClick={() => {
                    setCurtime(0);
                    setOp(false);
                }}
            >
                리셋
            </button>
        </>
    );
};

export default StopWatch;
