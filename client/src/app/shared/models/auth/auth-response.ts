export class AuthResponse {
  token: string;

  constructor(args: Partial<AuthResponse>) {
    this.token = args.token;
  }
}
