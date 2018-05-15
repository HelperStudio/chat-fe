export class Message{
    text: string;
    from: string;
    to: string;

    constructor(text:string, from:string){
        this.text = text;
        this.from = from;
    }
}
