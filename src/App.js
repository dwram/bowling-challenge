import React from 'react';
import Scorecard from "./components/Scorecard";
import Form from "./components/Form";

import './App.css';
// import ReactInlineBlock from "react-inline-block/src";

class App extends React.Component {

    state = {
        gameOver: false,
        currentFrameNumber: 0,
        frames: [[], [], [], [], [], [], [], [], [], []],
        framesScores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }

    // Update frames
    onSubmit = (number) => {
        // Update frame throws
        const newFrames = [...this.state.frames];
        const newFrame_0 = [...this.state.frames[this.state.currentFrameNumber]];
        newFrame_0.push(number);
        newFrames[this.state.currentFrameNumber] = newFrame_0;
        this.setState({
            frames: newFrames
        })

        // Update frame scores
        const newFramesScores = [...this.state.framesScores];
        newFramesScores[this.state.currentFrameNumber] += number;
        if (this.state.currentFrameNumber > 0) {
            const newFrame_1 = this.state.frames[this.state.currentFrameNumber - 1];
            let newFrameScore_1 = this.state.framesScores[this.state.currentFrameNumber - 1];
            if (newFrame_1[0] === 10 && newFrame_0.length < 3) { newFrameScore_1 += number; }
            else if (newFrame_1[0] + newFrame_1[1] === 10 && newFrame_0.length < 2) {
                newFrameScore_1 += number;
            }
            newFramesScores[this.state.currentFrameNumber - 1] = newFrameScore_1;
        }
        if (this.state.currentFrameNumber > 1) {
            const newFrame_1 = this.state.frames[this.state.currentFrameNumber - 1];
            const newFrame_2 = this.state.frames[this.state.currentFrameNumber - 2];
            let newFrameScore_2 = this.state.framesScores[this.state.currentFrameNumber - 2];
            if (newFrame_2[0] === 10 && newFrame_1[0] === 10 && newFrame_0.length < 2) {
                newFrameScore_2 += number;
            }
            newFramesScores[this.state.currentFrameNumber - 2] = newFrameScore_2;
        }
        this.setState({
            framesScores: newFramesScores,
        });
        // Increase current frame number
        if ((newFrame_0.length === 2 || number === 10) && this.state.currentFrameNumber < 9) {
            this.setState({
                currentFrameNumber: this.state.currentFrameNumber + 1
            })
        }

        // Calculate game end
        if (
            this.state.currentFrameNumber === 9 && (
                newFrame_0.length === 3 ||
                (newFrame_0.length === 2 && newFrame_0[0] + newFrame_0[1] !== 10 && newFrame_0[0] !== 10)
            )
        ) {
            this.setState({ gameOver: true })
        }
    };

    render() {
        //console.log(this.state.frames[this.state.currentFrameNumber])
        return (
            <div className="App">
                <div className="title">Bowling scorecard</div>
                <Scorecard frames={this.state.frames} framesScores={this.state.framesScores} />
                <div className='score'>Current score: {this.state.framesScores.reduce((acc, current) => acc + current, 0)}</div>
                <div className='score'>Current frame: {this.state.currentFrameNumber + 1}</div>
                {this.state.gameOver ?
                    <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>GAME OVER</div> :
                    <Form currentFrameNumber={this.state.currentFrameNumber} currentFrame={this.state.frames[this.state.currentFrameNumber]} onSubmit={this.onSubmit} />
                }
            </div>
        );
    }
}

export default App;
