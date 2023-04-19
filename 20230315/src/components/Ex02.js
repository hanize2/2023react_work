const Ex02 = () => {
    const arr = ['홍길동', '김길동', '이길동'];
    const brr = [...arr, '박길동'];

    console.log(arr);
    console.log(brr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    arr.map((temp) => {
        console.log(temp);
    });
    const crr = brr.filter( (temp)=>{  
        return temp !=='김길동';
    } );
    console.log(`crr = ${crr}`);
    return (
        <div>
            {arr.map((temp,idx) => {
                return <h3 key={idx}>{temp}</h3>;
            })}
        </div>
    );
};

export default Ex02;
