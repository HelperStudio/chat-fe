export class Token {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
  constructor(
    accessToken: string,
    refreshToken: string,
    expiresIn: number,
    tokenType: string
  ) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.expiresIn = expiresIn;
    this.tokenType = tokenType;
  }
}
