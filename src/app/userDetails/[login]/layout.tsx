import { ReactNode, Suspense } from "react";

import { Requests } from "@/services/request";

import Loading from "./loading";

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  )
}

interface User {
  id: string
  login: string
  created_at: string
  html_url: string
}

export async function generateStaticParams() {
  const usersDetailsGithub: User[] = await Requests.get('https://api.github.com/users')

  return usersDetailsGithub.map((user) => ({
    login: user.login,
  }))
}