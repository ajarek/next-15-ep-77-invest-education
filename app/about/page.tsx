import MotionLink from '@/components/MotionLink'
import MotionImage from '@/components/MotionImage'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
const AboutUs = async () => {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

  return (
    <div className='w-full container min-h-[calc(100vh-(32px*2+48px))] flex flex-col  justify-center  gap-4 p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center'>
        <div className='relative w-full h-96 md:h-[400px] rounded-lg overflow-hidden flex justify-center items-center'>
          <MotionImage
            src='/images/team.jpg'
            alt='team'
            width={400}
            height={400}
          />
        </div>

        <div className='space-y-2'>
          <h1 className='text-4xl font-bold '>O Nas</h1>
         
          <ul className='text-lg  space-y-2'>
            Dlaczego warto wybrać nas?
            <li>
              <b>Praktyczna wiedza:</b> Nasze kursy łączą teorię z praktyką. Dzięki licznym projektom i zadaniom, zdobędziesz umiejętności, które będziesz mógł wykorzystać od razu po ukończeniu kursu.
            </li>
            <li>
              <b>Doświadczeni trenerzy:</b> Nasi trenerzy to praktycy, którzy na co dzień pracują w branży IT. Przekażą Ci swoją wiedzę i doświadczenie w przystępny sposób.
            </li>
            <li>
              <b>Indywidualne podejście:</b> Nasze kursy są stale aktualizowane, abyś miał dostęp do najnowszych technologii i trendów w dziedzinie programowania i sztucznej inteligencji.
            </li>
           
            Chcesz zmienić swoje życie? Skontaktuj się z nami już dziś.
          </ul>
          <div className='flex justify-end'>
            <MotionLink
              label='Napisz do Nas'
              href='/contact'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs
