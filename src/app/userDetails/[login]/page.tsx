import Link from "next/link";

import { useGetUser } from "@/hooks/useGetUser";

export default async function UserDetails({ params: { login } }: { params: { login: string } }) {
  const { user } = await useGetUser({ login })

  return (
    <div>
      <p>{user.id}</p>
      <p>{user.login}</p>
      <p>{user.created_at}</p>
      <Link href={user.html_url} target="_blank">Profile</Link>

      <div>
        <Link href="/" scroll={false}>Back User List Link</Link>
      </div>
    </div>
  )
}