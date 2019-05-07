export class User {
  id: number;
  name: string;
  email: string;

  constructor(args: Partial<User> = {}) {
    this.id = args.id;
    this.name = args.name;
    this.email = args.email;
  }
}
