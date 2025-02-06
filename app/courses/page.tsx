import courses from '@/data/courses.json'
import  CourseCard  from '@/components/CourseCard'




const Courses = () => {
 
  return (
    <div className="w-full min-h-[calc(100vh-32px)] flex flex-col items-center justify-start gap-4">
      <h1 className="text-3xl font-bold text-center">Kursy</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 p-4'>
        {courses.map((course) => (
         <CourseCard key={course.id} id={course.id} title={course.title} description={course.description} color={course.color} type={course.type} price={course.price} numberOfStudents={course.numberOfStudents} ranking={course.ranking} courseIcon={`/${course.courseIcon}`} />
           ))}
      </div>
    </div>
  )
}

export default Courses