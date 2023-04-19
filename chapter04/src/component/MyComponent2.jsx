export const MyButton1 = (props) => {
    console.log('버튼1 함수 호출');
    console.log(props.mystyle);
    // const padding = props.mystyle.padding;
    // const color = props.mystyle.color;
    // console.log("padding = "+padding);
    // console.log(`color = ${color}`);
    const { padding, color } = props.mystyle;
    console.log('padding = ' + padding);
    console.log(`color = ${color}`);
    return <button>버튼</button>;
};
export const MyButton2 = () => {
    console.log('버튼2 함수 호출');
    return <button>버튼2</button>;
};
