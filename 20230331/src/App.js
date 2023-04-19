import { useCallback, useEffect, useState } from 'react';
import './App.css';
import CatImage from './components/CatImage';
import Clock from './components/Clock';

function App() {
    return (
        <div>
            <Clock />;
            <div style={{position:"relative"}}>
                <CatImage />
            </div>
        </div>
    );
}

export default App;
