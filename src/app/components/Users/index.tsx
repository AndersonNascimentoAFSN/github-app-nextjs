import Link from "next/link"

import styles from './styles.module.css'

type Users = {
  id: string
  login: string
}

interface UsersProps {
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
                <Link href={`/userDetails/${login}`} target="_blank">Link</Link>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}