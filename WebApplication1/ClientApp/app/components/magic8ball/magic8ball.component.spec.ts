import { MagicEightBall } from './magic8ball.component';

describe("test it", () => {
    it("will run", () => {
        expect(true).toBe(true);
    })
});

describe("validation", () => {

    let magic8Ball: MagicEightBall = new MagicEightBall();

    it("Will require question to be entered before hitting ask button", () => {
        magic8Ball.questionText = "";
        magic8Ball.Ask(null);
        expect(magic8Ball.errorText).toBeDefined();
        expect(magic8Ball.ominousResponse).not.toBeDefined();
    });

    it("Will display a response if a question is asked", () => {
        magic8Ball.questionText = "";
        magic8Ball.ngOnInit();
        expect(magic8Ball.ominousResponse).not.toBeDefined();
        magic8Ball.questionText = "I have asked a question";
        magic8Ball.Ask(null);
        expect(magic8Ball.ominousResponse).toBeDefined();
    });

    it("Will hide the error text if a question is entered", () => {
        magic8Ball.errorText = "Some error text";
        magic8Ball.questionText = "Some question text";
        magic8Ball.ngOnInit();
        magic8Ball.Ask(null);
        expect(magic8Ball.errorText).toBeFalsy();
    });
});


    // Unit Test:
    // 1. User should enter some value before hitting ask
    //--- Note: This required thinking about HOW to test this. Validation Error? 
    //--- ----  Error response?
    // 1a. If user enters a question, error text should hide (if displayed)
    // 2. We should display a response if user asks a question
    // 3. Response should be random
    // 4. Page should load if navigated to (health check)