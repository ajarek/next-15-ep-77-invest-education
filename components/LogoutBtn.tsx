import { LogOut } from 'lucide-react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const LogoutBtn = () => {
  return (
    <Link
      href='/signout'
      className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center secondary-foreground  transition-all delay-200 border-2 border-red-500 hover:bg-red-500 hover:text-white'
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {' '}
            <LogOut
              size={32}
              strokeWidth={1}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Wyloguj</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  )
}

export default LogoutBtn
