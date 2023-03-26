import "server-only"

export class Requests {
  static async get(url: string) {
    const users = await fetch(url, { next: { revalidate: 60 * 10 } });
    return users.json();
  }
}
