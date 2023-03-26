import Link from "next/link";

interface UserDetailsProps {
  login: string
}

export default async function UserDetails({ login }: UserDetailsProps) {
  async function getUserDetailsGithub({ login }: { login: string }) {
    const users = await fetch(`https://api.github.com/users/${login}`);
    return users.json();
  }

  const userDetailsGithub = await getUserDetailsGithub({ login })

  return (
    <div>
      <p>{userDetailsGithub.id}</p>
      <p>{userDetailsGithub.login}</p>
      <p>{userDetailsGithub.created_at}</p>
      <Link href={userDetailsGithub.html_url} target="_blank">Profile</Link>
    </div>
  )
}