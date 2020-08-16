import React from 'react';
import '../App.css';

class Score extends React.Component {

    render() {
        let currentScore = 0;
        const framePins = Object.entries(this.props.frames);
        for (const [frame, pins] of framePins) {
            let frameScore = pins.reduce((a, b) => a + b, 0);
            currentScore += frameScore;
        }
        return (
            <div className='score'>Current score: {currentScore}</div>
        );
    }
}

export default Score;