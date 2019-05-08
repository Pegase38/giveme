export class User {
  id: number;
  username: string;
  email: string;
  password?: string;

  constructor(args: Partial<User> = {}) {
    this.id = args.id;
    this.username = args.username;
    this.email = args.email;
    this.password = args.password;
  }
}
