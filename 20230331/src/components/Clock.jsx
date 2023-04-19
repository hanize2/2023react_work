import { useEffect, useState } from 'react';

const Clock = () => {
    const [time,setTime] = useState([0,0,0])
    const [mytime, setMytime] = useState();
    let timeInterval = null;
    useEffect(() => {
        const id = setInterval(() => {
            setMytime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return (
        <>
            <h1>시계</h1>
            <h3>{mytime}</h3>
            <button
                onClick={() => {
                    clearTimeout(timeInterval);
                }}
            >
                정지
            </button>
        </>
    );
};

export default Clock;
