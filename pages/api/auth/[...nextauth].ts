import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@config'
import { authControllers, userControllers } from '@controllers'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID!,
      clientSecret: GOOGLE_CLIENT_SECRET!
    })
  ],
  pages: {
    signIn: '/signin'
  },
  callbacks: {
    async signIn ({ user, profile }) {
      const { name, email: username, image: picture } = user
      const { locale } = profile
      return (username && name)
        ? await authControllers.processSignInOperation({ name, username, picture, locale: <string>locale })
        : false
    },
    async redirect ({ url, baseUrl }) {
      return baseUrl
    },
    async session ({ session, token }) {
      session.user.role = token.role
      session.user.locale = token.locale
      return session
    },
    async jwt ({ token }) {
      const { role, locale } = await userControllers.getDataForToken(token.email!)
      token.role = role
      token.locale = locale
      return token
    }
  }
})
