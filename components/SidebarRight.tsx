
import { auth } from '@/app/api/auth/auth'



const SidebarRight = async () => {
  const session = await auth()
  
  return (
    <div className='min-h-[calc(100vh-32px)] max-w-72 w-full rounded-xl p-4 gap-4 flex flex-col bg-primary text-black'>
      
       <h1>Witaj {session?.user?.email || 'Gościu'}</h1>
    </div>
  )
}

export default SidebarRight
