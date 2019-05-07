export class Credential {
  email: string;
  password: string;

  constructor(fields?: Partial<Credential>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
