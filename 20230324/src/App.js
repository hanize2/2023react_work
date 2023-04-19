import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Info from './components/Info';
import Ex02 from './components/Ex02';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <h1>MY PAGE</h1>
                <h2>메뉴</h2>
                <Link to="/main">MAIN</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/info">INFO</Link>
                <Link to="/ex02">Ex02</Link>
                <Routes>
                    <Route path="/main" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/ex02" element={<Ex02 />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
