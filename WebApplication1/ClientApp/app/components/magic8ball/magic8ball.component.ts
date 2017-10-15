import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'magic-eight-ball',
    templateUrl: './magic8ball.component.html',
    styleUrls: ['./magic8ball.component.css']
})
export class MagicEightBall implements OnInit {

    private PossibleResponses: Array<RandomResponse> = [];
    public ominousResponse: string;

    // Unit Test:
    // 1. User should enter some value before hitting ask
    // 2. We should display a response if user asks a question
    // 3. Response should be random
    // 4. Page should load if navigated to (health check)

    ngOnInit() {
        this.loadResponses();
    }
    Ask(e: any) {
        let i: number = this.getRandomInclusive(0, this.PossibleResponses.length - 1);
        let response: RandomResponse = this.getResponse(i);
        this.ominousResponse = response.ResponseText;
    }

    private getResponse(i: number) {
        return this.PossibleResponses[i];
    }

    private getRandomInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private loadResponses() {
        this.PossibleResponses = [
            new RandomResponse("Yes", RandomResponseType.Positive),
            new RandomResponse("No", RandomResponseType.Negative),
            new RandomResponse("Outlook not good", RandomResponseType.Negative),
            new RandomResponse("Ask again later", RandomResponseType.Neutral),
            new RandomResponse("That will never happen", RandomResponseType.Negative),
            new RandomResponse("Yes, probably", RandomResponseType.Positive),
            new RandomResponse("The odds are in your favor", RandomResponseType.Positive),
            new RandomResponse("This will definitely happen", RandomResponseType.Positive),
            new RandomResponse("Leaning toward a yes on that one", RandomResponseType.Positive)
        ];
    }
}

class RandomResponse {
    public ResponseText: string;
    public ResponseType: RandomResponseType;

    constructor(text: string, type: RandomResponseType) {
        this.ResponseText = text;
        this.ResponseType = type;
    }
}

enum RandomResponseType {
    Positive = 0,
    Negative = 1,
    Neutral = 2
}