import "server-only"

export async function request<TResponse>({url, config }: {
  url: string,
  config?: RequestInit 
}

): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}

// export class Requests {
//   static async get(url: string, options?: { cache: string }) {
//     const users = await fetch(url, { next: { revalidate: 60 * 10 } })
//       .then((data) => data.json())
//     // return users.json();
//   }
// }