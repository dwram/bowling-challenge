Bowling Challenge
=================
Demo showcasing functional dyanmic views and controlled elements

<img src="./src/images/bowlingshowcase.gif">
<br><br>
<img src='https://i.gyazo.com/f54cfccb54c69b67d390a3ff6de2ecb3.jpg'>
<br><br>
<img src='https://i.gyazo.com/7fb81503d08e93c7ca678fbb6b3a6f2b.jpg'>

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

- A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. 
- In every frame the player can roll one or two times. The actual number depends on strikes and spares. 
- The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. 

<img src="https://www.wikihow.com/images/0/04/Score-Bowling-Step-14.jpg">
Credit to wikihow for the image</img>

### Technology used

- Javascript
- React Native, JSX
- Jasmine standalone, Jasmine Node
- HTML, CSS
- ESLint


### To run: Clone the repo and in CLI `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

