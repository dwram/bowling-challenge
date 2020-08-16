'use strict';

describe("Bowling", () => {

    let game;
    beforeEach( () => {
        game = new Game();
    });

    it("Initialises the game with empty scorecard", () => {
        expect(game).toBeInstanceOf(Game);
        expect(game.currentScore).toEqual(0);
        //expect(game.frames.length).toEqual(10);
    });

    it("Adding score of two adds to the frames card", () => {
        game.addScore(2);
        expect(game.frames[1][0]).toEqual(2);
    });

    it("After second attempt game transitions to the next frame", () => {
        game.addScore(5);
        game.addScore(3);
        expect(game.currentFrameNumber).toEqual(2);
    });

    it("Adding a score of 10 goes to the next frame", () => {
        game.addScore(10);
        expect(game.currentFrameNumber).toEqual(2);
    });

    it("#StrikeFrame looks at the 2nd to last frame", () => {
       game.addScore(10);
       game.addScore(10);
       game.addScore(10);
       expect(game.currentFrameNumber).toEqual(4);
       expect(game.currentStrikeFrameNumber).toEqual(2);
    });

    it("#SpareFrame looks at the previous frame", () => {
        game.addScore(2);
        game.addScore(8);
        game.addScore(8);
        expect(game.currentSpareFrameNumber).toBe(1)
    });

    it("10, 2, 2 bowls are in strike scope", () => {
        game.addScore(10);
        expect(game.currentFrameNumber).toEqual(2);
        game.addScore(2);
        game.addScore(2);
        expect(game._inStrikeScope()).toBe(false)
        expect(game.currentFrameNumber).toEqual(3);
        game.addScore(2);
        game.addScore(2);
        expect(game._inStrikeScope()).toBe(false)
    });

    it("2,2,5 not in strike scope, 10 false, 2,2, true", () => {
        game.addScore(10);
        expect(game.currentFrameNumber).toEqual(2)
        expect(game._inStrikeScope()).toBe(true)
        game.addScore(2);
        game.addScore(2);
        expect(game.currentFrameNumber).toEqual(3)
        expect(game._inStrikeScope()).toBe(false)
        game.addScore(2);
        game.addScore(2);
        expect(game._inStrikeScope()).toBe(false)
    });

    it("5,5 => Is in spare scope", () =>{
        game.addScore(5);
        game.addScore(5);
       expect(game._inSpareScope()).toBe(true);
    });


});