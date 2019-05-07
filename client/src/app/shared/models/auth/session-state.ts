import { User } from './user';

export class SessionState {
  token?: string;
  user?: User;

  constructor(args: Partial<SessionState> = {}) {
    this.token = args.token;
    this.user = args.user;
  }

  isSignedIn() {
    return this.token != null;
  }
}
