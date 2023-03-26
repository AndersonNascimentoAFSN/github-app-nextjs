import { Requests } from "@/services/request";
import Link from "next/link";

interface UserDetailsProps {
  login: string
}

export default async function UserDetails({ login }: UserDetailsProps) {
  const userDetailsGithub = await Requests.get(`https://api.github.com/users/${login}`)

  return (
    <div>
      <p>{userDetailsGithub.id}</p>
      <p>{userDetailsGithub.login}</p>
      <p>{userDetailsGithub.created_at}</p>
      <Link href={userDetailsGithub.html_url} target="_blank">Profile</Link>
    </div>
  )
}