import './App.css';
import MyTag from './components/MyTag';

function App() {
  return (
    <div className="App">
      <h1>시작</h1>
      <MyTag name="김길동" age={20}/>
      <MyTag name="이길동" age={30}/>
      <MyTag name="박길동" age={40}/>
    </div>
  );
}

export default App;
