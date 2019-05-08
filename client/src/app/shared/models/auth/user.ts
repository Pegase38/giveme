export class User {
  id: number;
  username: string;
  email: string;

  constructor(args: Partial<User> = {}) {
    this.id = args.id;
    this.username = args.username;
    this.email = args.email;
  }
}
