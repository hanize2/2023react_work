import { useState, useCallback, useEffect } from 'react';

export default function CatImage() {
    const [userText, setUserText] = useState('');
    const [catPosition, setCatPosition] = useState({ x: 10, y: 120 });

    const handleUserKeyPress = useCallback((event) => {
        const { key, keyCode } = event;
        setUserText((prevUserText) => `${prevUserText}${key}`);
        // 위치 변경
        if (keyCode === 37) {
            // 왼쪽
            setCatPosition((prevPosition) => ({
                ...prevPosition,
                x: prevPosition.x - 10,
            }));
        } else if (keyCode === 38) {
            // 위
            setCatPosition((prevPosition) => ({
                ...prevPosition,
                y: prevPosition.y - 10,
            }));
        } else if (keyCode === 39) {
            // 오른쪽
            setCatPosition((prevPosition) => ({
                ...prevPosition,
                x: prevPosition.x + 10,
            }));
        } else if (keyCode === 40) {
            // 아래
            setCatPosition((prevPosition) => ({
                ...prevPosition,
                y: prevPosition.y + 10,
            }));
        }
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    const mystyle = {
        position: 'absolute',
        top: `${catPosition.y}px`, // 상태(State) 변경
        left: `${catPosition.x}px`, // 상태(State) 변경
        width: '250px',
        height: '250px',
        backgroundColor: 'red',
    };

    return (
        <div>
            <h1>Feel free to type!</h1>
            <img
                style={mystyle}
                src="http://placekitten.com/250/250"
                alt="cat"
            />
            <blockquote>{userText}</blockquote>
        </div>
    );
}
