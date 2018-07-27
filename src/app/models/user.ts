export class User {
  name: string;
  gender: string;
  picture: string;
  id: number;

  constructor(
    id: number,
    name: string,
    gender: string,
    picture: string
  ) {
    this.name = name;
    this.gender = gender;
    this.picture = picture;
    this.id = id;
  }
}
