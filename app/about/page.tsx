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
              <b>Bogata oferta:</b> Posiadamy szeroki wybór używanych domów
              jednorodzinnych na terenie całej Polski. Znajdziemy dla Ciebie
              nieruchomość spełniającą wszystkie Twoje oczekiwania.
            </li>
            <li>
              <b>Indywidualne podejście:</b> Każdy klient jest dla nas
              wyjątkowy. Dzięki dogłębnej rozmowie poznamy Twoje potrzeby i
              oczekiwania, a następnie przedstawimy Ci dopasowane oferty.
            </li>
            <li>
              <b>Kompleksowa obsługa:</b> Pomagamy nie tylko w znalezieniu
              wymarzonego domu, ale również w załatwieniu wszystkich formalności
              związanych z zakupem, w tym uzyskaniu kredytu hipotecznego.
            </li>
            <li>
              <b> Wsparcie na każdym etapie:</b> Jesteśmy z Tobą w procesie
              zakupu. Od pierwszego kontaktu, aż po przekazanie kluczy do nowego
              domu.
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
