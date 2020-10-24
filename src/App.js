import React from 'react';
import './App.css';

class CanvasExample extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    draw() {
        const ctx = this.canvas.current.getContext("2d");
        const {size, rectanglesCount} = this.props;
        ctx.clearRect(0, 0, size, size);
        ctx.fillStyle = "rgba(0, 150, 0, 0.2)";
        ctx.save();
        ctx.translate(size/2,size/2);
        const maxRectangleSize = size / Math.sqrt(2);
        for (let i = 0; i < rectanglesCount; ++i) {
            const ratio = maxRectangleSize * (i + 1);
            const rectangleSize = ratio / rectanglesCount;
            const angle = ratio;
            ctx.save();
            ctx.rotate(angle);
            ctx.translate(-rectangleSize/2, -rectangleSize/2);
            ctx.fillRect(0, 0, rectangleSize, rectangleSize);
            ctx.restore();
        }
        ctx.restore();
    }

    componentDidMount() {
        this.draw();
    }

    componentDidUpdate() {
        this.draw();
    }

    render() {
        const {size} = this.props;
        return <canvas ref={this.canvas} style={{border: "1px solid gray"}} width={size} height={size}/>
    }
}

class App extends React.Component {
    state = {
        rectangleCount: 10
    }

    render() {
        return (
            <div className="App">
                <h1>Hello Canvas</h1>
                <button
                    onClick={() => {
                        this.setState(prevState => ({
                            rectangleCount: prevState.rectangleCount - 1
                        }))
                    }}
                >
                    -1
                </button>
                <button
                    onClick={() => {
                        this.setState(prevState => ({
                            rectangleCount: prevState.rectangleCount + 1
                        }))
                    }}
                >
                    +1
                </button>
                <br/>
                <CanvasExample size={300} rectanglesCount={this.state.rectangleCount}/>
            </div>
        );
    }
}

export default App;
