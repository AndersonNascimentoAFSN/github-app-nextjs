import { User } from "@/@types/user";
import { request } from "@/services/request";

export async function useGetUsers() {
  const users = await request<User[]>({ url: 'https://api.github.com/users?since=0' })

  return { users }
}