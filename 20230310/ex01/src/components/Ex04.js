const Ex04 = () => {
    const arr1 = [10, 20];
    const arr2 = [30, 40];
    const arr3 = [...arr1, ...arr2];
    const obj1 = {name:"홍길동",age:20};
    const obj2 = {...obj1};

    obj1.name="김길동";
    return (
        <div>
            <h1>{`arr3 = ${arr3}`}</h1>
            <h2>{`obj1.name = ${obj1.name} obj1.age= ${obj1.age}`}</h2>
            <h2>{`obj2.name = ${obj2.name} obj2.age= ${obj2.age}`}</h2>
        </div>
    );
};

export default Ex04;
