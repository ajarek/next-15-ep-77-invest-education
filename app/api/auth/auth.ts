/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from '@/lib/models'
import connectToDb from '@/lib/connectToDb'
import bcrypt from 'bcryptjs'
import type {User as UserType} from '@/lib/models'
const validateCredentials = async (username: unknown, password: unknown): Promise<boolean> => {
  return (
    typeof username === 'string' &&
    typeof password === 'string' &&
    username.length > 0 &&
    password.length > 0
  )
}

const authenticateUser = async (username: string, password: string) => {
  await connectToDb()
  const user = (await User.findOne({ username })) as UserType
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
          const user = await authenticateUser(
            username as string,
            password as string
          )

          if (!user) throw new Error('User not found or incorrect password')

          return {
            id: user._id.toString(),
            username: user.username,
            email: user.email,
            img: user.img,
            isAdmin: user.isAdmin,
          }
        } catch (err) {
          throw new Error(err instanceof Error ? err.message : String(err))
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id
        token.username = user.username
        token.email = user.email
        token.img = user.img
        token.isAdmin = user.isAdmin
      }
      return token
    },

    async session({ session, token }: any) {
      session.user = {
        id: token.id as string,
        username: token.username as string,
        email: token.email as string,
        img: token.img as string,
        isAdmin: token.isAdmin as boolean,
      }
      return session
    },

    async redirect({ baseUrl }: any) {
      return baseUrl
    },
  },

  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 dni
  },
}

const authOptionsFixed: any = {
  ...authOptions,
  providers: Array.from(authOptions.providers),
}
export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authOptionsFixed)
