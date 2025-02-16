'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ShoppingBasket } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

const CartSidebarLeft = () => {
  const { items } = useCartStore()
  return (
    <Link
      href='/cart'
      className='relative bg-secondary w-10 h-10 rounded-full flex justify-center items-center hover:border-2 border-blue-500  transition-all delay-200'
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
      <div className='absolute -top-3 right-0 bg-blue-500 rounded-full w-5 h-5 flex justify-center items-center text-white text-xs'>
        {items.length}
      </div>
    </Link>
  )
}

export default CartSidebarLeft
