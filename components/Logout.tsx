import type { Session } from 'next-auth'
import Link from 'next/link'
import LogoutBtn from '@/components/LogoutBtn'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { KeyRound, UserCheck } from 'lucide-react'

import 'next-auth'

const Logout = async ({ session }: { session: Session | null }) => {
  return (
    <>
      {session ? (
        <LogoutBtn />
      ) : (
        <Link
          href='/login'
          className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center hover:border-2 border-blue-500  transition-all delay-200 '
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {' '}
                <KeyRound
                  size={32}
                  strokeWidth={1}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Logowanie</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      )}
      {session && (
        <>
          <Link
            href='/my-courses'
            className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center secondary-foreground  transition-all delay-200 border-2 border-green-500 lg:hidden'
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className='text-2xl'>
                  <UserCheck
                    size={32}
                    strokeWidth={1}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className='capitalize'>
                    {' '}
                    {session.user?.name || 'Użytkownik'}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
          <Link
            href='/'
            className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center secondary-foreground  transition-all delay-200 border-2 border-green-500 max-lg:hidden'
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className='text-2xl'>
                  <UserCheck
                    size={32}
                    strokeWidth={1}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className='capitalize'>
                    {' '}
                    {session.user?.name || 'Użytkownik'}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </>
      )}
    </>
  )
}

export default Logout
