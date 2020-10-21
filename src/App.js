import React from 'react';
import './App.css';

class CanvasExample extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }
    render() {
        const {size} = this.props;
        return <canvas ref={this.canvas} style={{border: "1px solid gray"}} width={size} height={size} />
    }
}

function App() {
    return (
        <div className="App">
            <h1>Hello Canvas</h1>
            <CanvasExample size={300}/>
        </div>
    );
}

export default App;
