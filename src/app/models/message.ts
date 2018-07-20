export class Message{
    text: string;
    from: number;
    to: string;

    constructor(text:string, from:number){
        this.text = text;
        this.from = from;
    }
}
