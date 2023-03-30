import { useGetUsers } from "@/hooks/useGetUsers";
import { Users } from "./components/Users";

export default async function Home() {
  const { users } = await useGetUsers()

  return (
    <main>
      <div>
        <h1>Users Github</h1>
        <Users users={users} />
      </div>
    </main>
  )
}

// interface User {
//   id: string
//   login: string
//   created_at: string
//   html_url: string
// }

// export async function getStaticProps() {
//   const usersDetailsGithub: User[] = await Requests.get('https://api.github.com/users?since=0')

//   return {
//     users: usersDetailsGithub
//   }
// }
