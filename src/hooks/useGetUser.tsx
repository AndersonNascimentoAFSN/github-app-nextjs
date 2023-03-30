import { User } from "@/@types/user";
import { request } from "@/services/request";

export async function useGetUser({ login }: { login: string }) {
  const user = await request<User>({ url: `https://api.github.com/users/${login}` })

  return { user }
}