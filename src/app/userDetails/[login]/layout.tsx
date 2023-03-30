import { ReactNode, Suspense } from "react";

import Loading from "./loading";
import { request } from "@/services/request";
import { User } from "@/@types/user";

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  )
}

export async function generateStaticParams() {
  const users = await request<User[]>({ url: 'https://api.github.com/users?since=0' })

  return users.map((user) => ({
    login: user.login,
  }))
}