export class User{
    socketId: string;
    userName: string;

    constructor(socketId:string, userName:string){
        this.socketId = socketId;
        this.userName = userName;
    }
}
