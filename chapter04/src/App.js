import './App.css';
import MyComponent1 from './component/MyComponent1';
import {MyButton1,MyButton2} from './component/MyComponent2';

function App() {
  const mystyle = {
    padding: "1rem",
    color : "blue",
  };
  return (
    <div>
      <MyComponent1/>
      <MyButton1 mystyle={mystyle}/>
      <MyButton2></MyButton2>
    </div>
  );
}

export default App;
