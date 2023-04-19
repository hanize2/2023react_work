const Ex01 = () => {
    const getNum = () => {
        const num = parseInt(Math.random()*255);
        alert('함수호출'+num);
        alert(`함수호출 ${num}`);
    };
    return (
        <div>
            <h1>Ex01</h1>
            <button onClick={getNum}>버튼</button>
        </div>
    );
};

export default Ex01;
