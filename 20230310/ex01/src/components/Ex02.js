const Ex02 = ({name,age}) => {
    // const info = {
    //     name: props.name,
    //     age: props.age,
    // };
    // const {name,age} = props;
    const hi = `이름 ${name} 나이 ${age}`;
    const list = [ 10, function(){ return "test"} ];
    const [ele1,ele2] = list;
    return (
        <div>
            <h1>{hi}</h1>
            <h2>{ele1}</h2>
            <h2>{ele2()}</h2>
        </div>
    );
};

export default Ex02;
