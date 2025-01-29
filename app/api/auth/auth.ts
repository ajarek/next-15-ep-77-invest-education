import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from '@/lib/models'
import connectToDb from '@/lib/connectToDb'
import bcrypt from 'bcryptjs'
import type { NextAuthConfig } from 'next-auth/next'
const validateCredentials = (username: unknown, password: unknown): boolean => {
  return (
    typeof username === 'string' &&
    typeof password === 'string' &&
    username.length > 0 &&
    password.length > 0
  )
}

const authenticateUser = async (username: string, password: string) => {
  await connectToDb()
  const user = await User.findOne({ username }) as User
  return user && (await bcrypt.compare(password, user.password)) ? user : null
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credential',
      credentials: {
        username: { type: 'text', required: true },
        password: { type: 'password', required: true },
      },
      async authorize(credentials) {
        const username = credentials?.username
        const password = credentials?.password

        if (!validateCredentials(username, password)) {
          throw new Error('Invalid credentials')
        }

        try {
          const user = await authenticateUser(username as string, password as string)

          if (!user) throw new Error('User not found or incorrect password')

          // Usuwamy `password` przed zwróceniem użytkownika
          return {
            id: user._id.toString(),
            username: user.username,
            email: user.email,
            img: user.img, // Jeśli masz zdjęcie profilowe
            isAdmin: user.isAdmin, // Jeśli masz uprawnienia admina
          } 
        }catch (err) {
          throw new Error(err instanceof Error ? err.message : String(err))
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.username = user.username
        token.email = user.email
        token.img = user.img
        token.isAdmin = user.isAdmin
      }
      return token
    },

    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        username: token.username as string,
        email: token.email as string,
        img: token.img as string,
        isAdmin: token.isAdmin as boolean,
      }
      return session
    },

    async redirect({ url, baseUrl }) {
      return baseUrl
    },
  },

  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 dni
  },
}
  

const authOptionsFixed: NextAuthConfig  = {
  ...authOptions,
  providers: Array.from(authOptions.providers),
}
export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authOptionsFixed)
