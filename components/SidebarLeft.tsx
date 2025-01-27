'use client'

import { ShoppingBasket, House, KeyRound } from 'lucide-react'
import Link from 'next/link'
import React from 'react'



const SidebarLeft = () => {
  
  
  return (
    <div className='min-h-[calc(100vh-32px)] max-w-16 w-full rounded-xl px-4 py-6 gap-6 flex flex-col items-center bg-primary'>
      <Link href='/' className='bg-background w-10 h-10 rounded-full flex justify-center items-center hover:text-background hover:bg-black  transition-all delay-200'><KeyRound size={32} strokeWidth={1} /></Link>
      <Link href='/' className='bg-background w-10 h-10 rounded-full flex justify-center items-center hover:text-background hover:bg-black  transition-all delay-200'><ShoppingBasket size={32} strokeWidth={1} /></Link>
      <Link href='/' className='bg-background w-10 h-10 rounded-full flex justify-center items-center hover:text-background hover:bg-black  transition-all delay-200'><House  size={32} strokeWidth={1} /></Link>
       
    </div>
  )
}

export default SidebarLeft
