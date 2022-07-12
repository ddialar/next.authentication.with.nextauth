import { useSession } from 'next-auth/react'
import { Profile } from '@viewComponents'

const headerBackgrounds = {
  default: 'bg-gray-500',
  user: 'bg-cyan-500',
  manager: 'bg-amber-500',
  admin: 'bg-red-500'
}

export const Header = () => {
  const { data: session } = useSession({ required: true })

  return (
    <div className={`flex justify-between items-center w-full px-10 h-20 ${headerBackgrounds[session?.user.role || 'default']}`}>
      <div className='text-2xl font-bold'>Todo List</div>
      <Profile { ...session?.user } />
    </div>
  )
}
