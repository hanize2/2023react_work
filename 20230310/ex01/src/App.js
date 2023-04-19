import './App.css';
import Ex01 from './components/Ex01';
import Ex02 from './components/Ex02';
import Ex03 from './components/Ex03';
import Ex04 from './components/Ex04';
import Ex05 from './components/Ex05';
import Ex06 from './components/Ex06';
import Test from './components/Test';

function App() {
    var a = '10';
    console.log(a);
    var a = '20';
    let b = '30';
    b = '40';
    return (
        <div className="App">
            <header className="App-header">
                <Ex06/>
                <Ex05/>
                <Ex04/>
                <Ex03/>
                <Ex02 name="누시다" age={20} />
                <Ex02 name="사키오카" age={30} />
                <h1>{a}</h1>
                <h1>{b}</h1>
                <Test />
                <Ex01 />
            </header>
        </div>
    );
}

export default App;
