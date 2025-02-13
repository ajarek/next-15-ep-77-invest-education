import { auth } from '@/app/api/auth/auth'
import { Bell, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import courses from '@/data/courses.json'
import { getAllCourses } from '@/lib/action'
import DeleteCourse from './DeleteCourse'

const SidebarRight = async () => {
  const session = await auth()
  const coursesUser = await getAllCourses()
  const filterCourses = coursesUser?.filter(
    (course) => course.email === session?.user?.email
  )
  const mapCourse = filterCourses?.map((course) => course.id) as string[]
  const coursesId = mapCourse.join().trim().split(',')

  const userCourses = courses.filter((course) =>
    coursesId?.includes(course.id.toString())
  )

  return (
    <div className='fixed top-0 right-0 min-h-[calc(100vh-32px)] max-w-72 w-full max-h-[500px]  flex flex-col bg-primary text-black rounded-xl gap-4 p-4 max-lg:hidden'>
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

        {!session ? (
          <Link
            href='/login'
            className='bg-secondary text-secondary-foreground rounded-lg  flex justify-center items-center p-2 hover:border-2    border-blue-500  transition-all delay-200 '
          >
            Logowanie
          </Link>
        ) : (
          <div className=' max-h-[350px] flex flex-col gap-4 overflow-y-auto p-2 scrollbar'>
            {userCourses.map((course) => (
              <div
                key={course.id}
                className='  rounded-lg  flex justify-center border-2 border-primary items-center p-2 hover:border-blue-500  transition-all delay-200 '
                style={{ backgroundColor: course.color }}
              >
                <div className='flex items-center gap-2'>
                  <h1>{course.title}</h1>
                  <DeleteCourse
                    _id={filterCourses?.find((c) => c.id == (course.id))?._id.toString() || ''}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SidebarRight
