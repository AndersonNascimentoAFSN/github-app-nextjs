'use client'

import { useState } from "react"



export default function Dashboard() {
  const [names, setNames] = useState(['anderson'])

  if (names.length > 1) {
    console.log(names.length)
    throw new Error('error')
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <button onClick={() => setNames((namesPrev) => [...namesPrev, 'Guilherme'])}>Error</button>
    </main>
  )

}