import { Requests } from "@/services/request";
import { Users } from "./components/Users";


export default async function Home() {
  const usersGithub = await Requests.get('https://api.github.com/users?since=0')
  console.log(usersGithub.length);

  return (
    <main>
      <div>
        <h1>Users Github</h1>
        <Users users={usersGithub} />
      </div>
    </main>
  )
}
