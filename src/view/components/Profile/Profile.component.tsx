import type { FC } from 'react'
import Image from 'next/image'
import { LogoutIcon } from '@viewComponents'
import { signOut } from 'next-auth/react'

interface Props {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
}

export const Profile: FC<Props> = ({ name, email, image }) => {
  return (
    <>
      <div className='flex items-center'>
        <Image
          src={image || '/img/unknown-user.png'}
          className='rounded-full'
          alt="User picture"
          width={60}
          height={60}
        />
        <ul className='ml-3'>
          <li className='text-sm font-bold'>{name || 'Unknown'}</li>
          <li className='text-sm font-light'>{email || 'Unknown'}</li>
          <li className='text-sm font-light'>
            <button className='flex' onClick={() => signOut({ callbackUrl: '/signin' })}>
              <LogoutIcon className="pr-1 w-5 h-5" /> Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
