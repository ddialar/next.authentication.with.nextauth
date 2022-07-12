import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Content: FC<Props> = ({ children }) => (
  <div className='flex grow w-full px-5 py-5 bg-gray-200'>
    { children }
  </div>
)
