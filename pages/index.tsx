import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { Profile } from '@viewComponents'

const Home: NextPage = () => {
  const { data: session, status } = useSession({ required: true })

  return status === 'loading'
    ? <div>Loading...</div>
    : <Profile { ...session?.user } />
}

export default Home
