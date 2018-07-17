export class User {
  socketId: string;
  name: string;
  gender: string;
  picture: string;
  id: number;

  constructor(
    id: number,
    name: string,
    gender: string,
    picture: string,
    socketId?: string
  ) {
    this.socketId = socketId;
    this.name = name;
    this.gender = gender;
    this.picture = picture;
    this.id = id;
  }
}
