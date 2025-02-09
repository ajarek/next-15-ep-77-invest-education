import { auth } from '@/app/api/auth/auth'
import { Bell, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const MyCourses =async () => {
  const session = await auth()

  return (
    <div className='min-h-[calc(100vh-32px)]  w-full  flex flex-col    gap-4 p-4 lg:hidden'>
      <div className='flex justify-between items-center'>
        <Bell />
        <Settings />
      </div>
      <div className='flex flex-col  items-center gap-4'>
        <Image
          src={session?.user?.image || '/images/placeholder.jpg'}
          alt='User Image'
          width={40}
          height={40}
          className='rounded-full'
        />
        <h1 className='text-xl font-bold'>
          Witaj {session?.user?.email || 'Gościu'}
        </h1>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold'>Twoje kursy:</h2>
        {!session? (
          <Link href='/login'  className='bg-secondary text-secondary-foreground rounded-lg  flex justify-center items-center p-2 hover:border-2    border-blue-500  transition-all delay-200 '>
            Logowanie</Link>

        ) : (
          <div className='  flex flex-col gap-4 '>
            <div className='w-full min-h-[150px] bg-white rounded-xl p-4 text-black text-sm shadow-xl '>
              kurs1
            </div>
            <div className='w-full min-h-[150px] bg-red-300 rounded-xl p-4 text-black text-sm shadow-xl '>
              kurs2
            </div>
            <div className='w-full min-h-[150px] bg-green-300 rounded-xl p-4 text-black text-sm shadow-xl '>
              kurs3
            </div>
            <div className='w-full min-h-[150px] bg-blue-600 rounded-xl p-4 text-black text-sm shadow-xl '>
              kurs4
            </div>
            <div className='w-full min-h-[150px] bg-amber-500 rounded-xl p-4 text-black text-sm shadow-xl '>
              kurs5
            </div>
            <div className='w-full min-h-[150px] bg-violet-300 rounded-xl p-4 text-black text-sm shadow-xl '>
              kurs6
            </div>
            <div className='w-full min-h-[150px] bg-yellow-300 rounded-xl p-4 text-black text-sm shadow-xl '>
              kurs7
            </div>
            <div className='w-full min-h-[150px] bg-rose-600 rounded-xl p-4 text-black text-sm shadow-xl '>
              kurs8
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


export default MyCourses
