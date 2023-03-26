import { Users } from "./components/Users";


export default async function Home() {
  async function getUsersGithub() {
    const users = await fetch('https://api.github.com/users?since=0');
    return users.json();
  }

  const usersGitHub = await getUsersGithub();

  return (
    <main>
      <div>
        <h1>Página Home</h1>

        <Users users={usersGitHub}/>
      </div>
    </main>
  )
}
