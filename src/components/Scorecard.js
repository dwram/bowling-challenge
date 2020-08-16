import React from 'react';

class Scorecard extends React.Component {

    render() {

        return (
            <div style={{ width: '100%', textAlign: 'center' }}>
                {this.props.frames.map((frame, index) => {
                    return (
                        <div key={index} className={index < 9 ? "box-field" : 'box-field-bonus'} style={{ textAlign: 'left', }}>
                            <div>
                                {index < 9 ? 'Frame' : 'BonusFrame'}: {index + 1}
                            </div>
                            <div>
                                Throws: {frame.map(value => <span style={{ margin: '0 5px' }}>{value}</span>)}
                            </div>
                            <div>
                                Score: <span style={{ margin: '0 5px' }}>{this.props.framesScores[index]}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    };
}

export default Scorecard;