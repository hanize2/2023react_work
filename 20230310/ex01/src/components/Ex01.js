const Ex01 = () => {
    const name = '홍길동';
    const age = 20;
    const dofn = (a, b) => `함수 ${a + b}`;

    const hi = `안녕하세요 제이름은 ${name} 입니다
        나이는 ${age}입니다`;
    const hi1 =
        '안녕하세요 제이름은' + name + '입니다' + '나이는 ' + age + '입니다';
    const aa = `음 함수 호출 ${dofn(10, 20)}`;
    return (
        <div>
            <h1>{hi}</h1>
            <h1>{hi1}</h1>
            <h1>{aa}</h1>
        </div>
    );
};

export default Ex01;
