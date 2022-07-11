import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@config'

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
    async signIn ({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect ({ url, baseUrl }) {
      return baseUrl
    },
    async session ({ session, user, token }) {
      return session
    },
    async jwt ({ token, user, account, profile, isNewUser }) {
      return token
    }
  }
})
