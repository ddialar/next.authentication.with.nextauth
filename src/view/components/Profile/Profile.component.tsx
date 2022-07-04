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
          width={72}
          height={72}
        />
        <ul className='ml-3'>
          <li className='text-lg font-bold'>{name || 'Unknown'}</li>
          <li className='text-sm font-light'>{email || 'Unknown'}</li>
        </ul>
      </div>
      <button
        className={`
          mt-3
          py-2
          px-3
          transition
          duration-100
          hover:bg-cyan-300
          flex
        `}
        onClick={() => signOut()}
        // onClick={() => signOut({ callbackUrl: 'http://localhost:3000/api/auth/signin' })}
      >
        <LogoutIcon className="pr-1 w-6 h-6" /> Logout
      </button>
    </>
  )
}
