import type { FC, ReactNode } from 'react'
import type { GetStaticProps } from 'next'
import Image from 'next/image'
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react'
import { BasicLayout } from '@viewLayouts'
import { GoogleIcon, LockIcon } from '@viewComponents'

const providerIcons: Record<string, ReactNode> = {
  default: <LockIcon className="w-4 h-4 mr-2" />,
  Google: <GoogleIcon className="w-4 h-4 mr-2" />
}

interface Props {
  providers: typeof getProviders
}

const SignIn: FC<Props> = ({ providers }) => {
  return (
    <BasicLayout>
      <div className="flex flex-col items-center w-4/5 max-w-md m-x-auto p-5 pb-10">
        <Image src={'/img/next-js-and-next-auth.png'} width={230} height={114}></Image>
        <div className="mt-10 w-3/4 m-auto">
          {
            providers && Object.values(providers).map((provider: ClientSafeProvider) => {
              const { id, name } = provider
              return (
                <button
                  key={name}
                  className="flex items-center justify-center w-full px-4 py-2 text-white bg-cyan-500"
                  onClick={() => signIn(id, { callbackUrl: '/' })}
                >
                  {providerIcons[name] || providerIcons.default}
                  Signin with {name}
                </button>
              )
            })
          }
        </div>
      </div>
    </BasicLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const providers = await getProviders()
  return {
    props: { providers }
  }
}

export default SignIn
