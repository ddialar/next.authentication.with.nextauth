import type { FC, ReactNode } from 'react'
import { Header } from '@viewComponents'

interface Props {
  children: ReactNode
}

export const HeaderLayout: FC<Props> = ({ children }) => (
  <div className="relative min-h-screen flex flex-col">
    <Header />
    { children }
  </div>
)
