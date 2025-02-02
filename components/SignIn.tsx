import { signIn } from '@/app/api/auth/auth'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function SignIn() {
  return (
    <form
      action={async (formData) => {
        'use server'
        await signIn('credentials', formData)
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
      <Label className='w-full'>
        Imię
        <Input
          name='username'
          type='text'
          className='mt-2'
          required
        />
      </Label>
      <Label className='w-full'>
        Hasło
        <Input
          name='password'
          type='password'
          className='mt-2'
          required
        />
      </Label>
      <Button
        type='submit'
        className='w-full bg-[#0E78F9] text-white hover:bg-[#0E78F9]/90'
      >
        Zaloguj
      </Button>
      <Link
        href='/register'
        className=''
      >
        Nie masz konta? <b className='text-[#0E78F9]'>Zarejestruj się</b>
      </Link>
    </form>
  )
}
