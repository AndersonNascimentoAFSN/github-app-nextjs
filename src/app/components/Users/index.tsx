import Link from "next/link"

import styles from './styles.module.css'

export type Users = {
  id: string
  login: string
}

export interface UsersProps {
  users: Users[]
}

export function Users({ users }: UsersProps) {
  return (
    <table className={styles["customers"]}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Link</th>
        </tr>
      </thead>

      <tbody>
        {
          users.map(({ id, login }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{login}</td>
              <td>
                <Link href={`/userDetails/${encodeURIComponent(login)}`} target="_blank">user details</Link>
                {/* <Link href={{ pathname: '/userDetails/[login]', query: { login } }} target="_blank">user details</Link> */}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}