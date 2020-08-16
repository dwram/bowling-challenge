import React from "react";

const validate = (currentFrame, currentValue, currentFrameNumber) => {
    if (currentValue === '') { return false; }
    if (!currentValue.match(/\d/)) { return false; }
    if (currentFrameNumber !== 9) {
        if ((currentFrame.reduce((acc, current) => acc + current, 0) + parseInt(currentValue)) > 10) { return false; }
    } else {
        if (currentFrame.length === 0 && parseInt(currentValue) > 10) { return false; }
        if (currentFrame.length === 1) {
            if (currentFrame[0] === 10 && parseInt(currentValue) > 10) { return false; }
            if (currentFrame[0] !== 10 && currentFrame[0] + parseInt(currentValue) > 10) { return false; }
        } 
        if (currentFrame.length === 2) {
            if (currentFrame[0] === 10 && currentFrame[1] === 10 && parseInt(currentValue) > 10) { return false; }
            if (currentFrame[0] === 10 && currentFrame[1] !== 10 && currentFrame[1] + parseInt(currentValue) > 10) { return false; }
            if (currentFrame[0] + currentFrame[1] === 10 && parseInt(currentValue) > 10) { return false; }
        }
    }

    return true;
};

class Form extends React.Component {

    state = {
        value: "",
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(parseInt(this.state.value))
        this.setState({ value: '' })
    }

    render() {
        const { currentFrame, currentFrameNumber } = this.props;

        const valid = validate(currentFrame, this.state.value, currentFrameNumber);

        return (
            <form style={{ textAlign: 'center' }}>
                <div style={{ marginRight: '100px' }}>
                    <label>Enter score: </label>
                    <input
                        type='text'
                        onChange={e => this.setState({ value: e.target.value })}
                        value={this.state.value}
                    />
                </div>

                {!valid && this.state.value !== '' && <div style={{ fontWeight: 'bold', margin: '10px' }}>Please check your value</div>}

                <div style={{ margin: '10px' }}>
                    <button disabled={!valid} onClick={this.onSubmit} style={{ padding: '2px 15px', visibility: valid ? 'visible' : 'hidden' }}>
                        Submit
                    </button>
                </div>
            </form >
        );
    }
}

export default Form;
