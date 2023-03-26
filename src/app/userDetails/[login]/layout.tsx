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