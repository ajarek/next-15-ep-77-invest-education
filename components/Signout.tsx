import { signOut } from '@/app/api/auth/auth'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Signout = () => {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
      className='p-4  flex flex-col items-center rounded-lg border-2 shadow-xl gap-4 min-w-[300px]'
    >
      <div className='flex justify-center p-2'>
        <Link href='/'>
          <Image
            src='/images/logo.png'
            alt='logo'
            width={80}
            height={80}
            className='w-full h-full object-cover  '
          />
        </Link>
      </div>
      <p>Jesteś pewien, że chcesz się wylogować?</p>
      <Button
        type='submit'
        className='w-full bg-red-500 text-white hover:bg-red-600'
      >
        Wyloguj się
      </Button>
    </form>
  )
}

export default Signout
