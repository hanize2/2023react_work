const Ex06 = () => {
    const myformat = (num) =>
        { return typeof num == 'number' ? num.toLocaleString() : '숫자입력'; }
    return (
        <div>
            <h1>{`m = ${myformat(3000)}`}</h1>
            <h1>{`m = ${myformat('3000')}`}</h1>
        </div>
    );
};

export default Ex06;
