import React from 'react';
import './App.css';

class CanvasExample extends React.Component {
    render() {
        return <canvas style={{border: "1px solid gray"}} width={300} height={300} />
    }
}

function App() {
    return (
        <div className="App">
            <h1>Hello Canvas</h1>
            <CanvasExample />
        </div>
    );
}

export default App;
