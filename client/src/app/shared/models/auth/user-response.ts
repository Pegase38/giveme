export class UserResponse {
  id: number;
  email: string;
  name: string;

  constructor(args: Partial<UserResponse>) {
    this.id = args.id;
    this.email = args.email;
    this.name = args.name;
  }
}
