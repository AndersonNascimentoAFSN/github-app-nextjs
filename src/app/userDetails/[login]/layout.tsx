import { Requests } from "@/services/request";
import { Suspense } from "react";
import Loading from "./loading";

import Page from './page'

interface UserDetailsProps {
  params: {
    login: string
  }
}

export default function Layout({ params }: UserDetailsProps) {

  return (
    <Suspense fallback={<Loading />}>
      {/* @ts-expect-error Server Component */}
      <Page params={params} />
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