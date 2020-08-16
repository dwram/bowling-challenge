class Game {

    currentFrameNumber;
    currentScore;
    frameMaxScore;
    maxRounds;

    constructor() {
        this.currentFrameNumber = 1;
        this.currentScore = 0;
        this.frameMaxScore = 10;
        this.frames = { 0:[], 1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[], 11:[] };
    }

    addScore(number) {
        if (this._isComplete()) return console.log("Game is over! Final score: " + this.currentScore)
        if (this.currentFrameScore() + number > this.frameMaxScore) {return console.log("Invalid entry");}
        this.liveFrame().push(number);
        this._checkFrameScope(number);
        if (this.currentFrameNumber !== this.maxRounds) { this.checkIfNextFrame(number); }
        return this.updateFrameScores();
    }

    _checkFrameScope(number) {
        if (this._inSpareScope())
        { this.addToSpareFrame(number)}
        else if (this._inStrikeScope())
        {this.addToStrikeFrame(number);}
    }

    currentFrameScore() {
        return this.liveFrame().reduce((a,b) => a + b, 0)
    }

    updateFrameScores() {
        this.currentScore = 0;
        const framePins = Object.entries(this.frames);
        for (const [frame, pins] of framePins) {
            if (frame === '0') { continue; }
            let frameScore = pins.reduce((a, b) => a + b, 0);
            //console.log("Frame: " + frame + " | Score: " + frameScore);
            this.currentScore += frameScore;
        }
        return this.currentScore;
    }

    _isComplete () {
        if (this.frames[10].reduce((a,b) => a + b, 0) === 10) return false
        return (this.frames[10].length === 2) && (!this.frames[10].includes(10)) || (this.frames[11].length === 1)
    }

    checkIfNextFrame (number) {
        if (this.liveFrame().length === 2 || number === 10) {this.currentFrameNumber += 1;}
    }

    liveFrame() {
        return this.frames[this.currentFrameNumber];
    }

    addToSpareFrame(number) {
        return this.frames[this.currentSpareFrameNumber].push(number)
    }


    addToStrikeFrame(number) {
        if (this.frames[this.currentStrikeFrameNumber].length >= 3) return false
        this.frames[this.currentStrikeFrameNumber].push(number);
        if (this.frames[this.currentStrikeFrameNumber - 1].length === 3) return
        if ((this.frames[this.currentStrikeFrameNumber-1][1] === 10 && this.frames[this.currentStrikeFrameNumber][0] === 10)) {
            this.frames[this.currentStrikeFrameNumber - 1].push(number) }
    }


    _inSpareScope() {
        if (this.currentFrameNumber <= 1) return false;
        this.currentSpareFrameNumber = this.currentFrameNumber - 1;
        return ((this.frames[this.currentSpareFrameNumber].reduce((a,b) => a + b, 0) === 10) && (this.frames[this.currentSpareFrameNumber].length === 2))
    }

    _inStrikeScope() {
        if (this.currentFrameNumber <= 1) return false;
        this.currentStrikeFrameNumber = (this.currentFrameNumber === 0) ? 1 : this.currentFrameNumber - 1;
        return (this.frames[this.currentStrikeFrameNumber][0] === 10)
    }
}


game = new Game();
game.addScore(5);
console.log(game.frames);
//game.addScore(5);
//console.log(game.frames);

//console.log(game.frames);
//console.log("Current frame Number: " + (game.currentFrameNumber))
//console.log("Score: " + game.currentScore);
//console.log(game.isComplete())