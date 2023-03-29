import Link from "next/link";

import { Requests } from "@/services/request";

export default async function UserDetails({ params: { login } }: { params: { login: string } }) {
  const userDetailsGithub = await Requests.get(`https://api.github.com/users/${login}`)

  return (
    <div>
      <p>{userDetailsGithub.id}</p>
      <p>{userDetailsGithub.login}</p>
      <p>{userDetailsGithub.created_at}</p>
      <Link href={userDetailsGithub.html_url} target="_blank">Profile</Link>

      <div>
        <Link href="/" scroll={false}>Back User List Link</Link>
      </div>
    </div>
  )
}