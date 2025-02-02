import { ShoppingBasket, House,  Contact, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Logout from './Logout'
import { auth } from '@/app/api/auth/auth'

const SidebarLeft = async () => {
  const session = await auth()
  
  console.log(session)
  return (
    <div className='min-h-[calc(100vh-32px)] max-w-16 w-full rounded-xl px-4 py-8 gap-8 flex flex-col items-center bg-primary'>
      <div
        className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center   transition-all delay-200'
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Tło</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Logout session={session} />

      <Link
        href='/'
        className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center   transition-all delay-200'
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {' '}
              <ShoppingBasket
                size={32}
                strokeWidth={1}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Koszyk</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
      <Link
        href='/'
        className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center   transition-all delay-200'
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {' '}
              <House
                size={32}
                strokeWidth={1}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Strona główna</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
      <Link
        href='/'
        className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center   transition-all delay-200'
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {' '}
              <Contact
                size={32}
                strokeWidth={1}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Kontakt</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
      <Link
        href='/'
        className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center   transition-all delay-200'
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Users
                size={32}
                strokeWidth={1}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>O nas</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </div>
  )
}

export default SidebarLeft
