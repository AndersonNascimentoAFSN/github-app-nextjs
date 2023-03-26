export class Requests {
  static async get(url: string) {
    const users = await fetch(url);
    return users.json();
  }
}
