import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const BasicLayout: FC<Props> = ({ children }) => (
  <div className="relative min-h-screen flex justify-center items-center">
    { children }
  </div>
)
