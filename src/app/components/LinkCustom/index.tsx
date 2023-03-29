import React, { ReactNode } from 'react'

import { useRouter } from 'next/router'; // Qual a diferença entre next/navigation e next/router

interface LinkCustomProps {
  children: ReactNode
}

export function LinkCustom({ children }: LinkCustomProps) {
  const route = useRouter()

  return (
    <button onClick={() => route.back()}>
      {children}
    </button>
  )
}
