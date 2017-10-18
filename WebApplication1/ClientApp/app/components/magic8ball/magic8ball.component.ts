import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'magic-eight-ball',
    templateUrl: './magic8ball.component.html',
    styleUrls: ['./magic8ball.component.css']
})
export class MagicEightBall implements OnInit {

    private PossibleResponses: Array<RandomResponse> = [];
    public questionText: string;
    public ominousResponse: string;
    public errorText: string;

    ngOnInit() {
        this.loadResponses();
    }

    Ask(e: any) {
        this.clearError();
        if (!this.questionText) {
            return this.setError("Please enter a question.");
        }

        let i: number = this.getRandomInclusive(0, this.PossibleResponses.length - 1);
        let response: RandomResponse = this.getResponse(i);
        this.ominousResponse = response.ResponseText;
    }

    private setError(text: string) {
        this.errorText = text;
    }

    private clearError() {
        this.errorText = "";
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