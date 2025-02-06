import MotionImage from '@/components/MotionImage'
import MotionLink from '@/components/MotionLink'


export default function Home() {
  return (
    <div className='w-full min-h-[calc(100vh-32px)] flex flex-col items-center justify-start gap-2 p-2'>
      <div className='relative w-full flex justify-center'>
        <MotionImage
          src='/images/baner.png'
          alt='baner'
          width={816}
          height={400}
        />
        <div className='absolute inset-0 flex flex-col items-center justify-between pb-4'>
          <h1 className='text-center  text-4xl text-white font-bold '>
            Inwestuj w swoją edukację
          </h1>
          <div className='self-end flex 2 pr-12'>

          <MotionLink
            label='Kup kurs'
            href='/courses'
           
          />

          </div>
        </div>
      </div>
      <p className='text-lg text-center'>
        Chcesz zostać programistą przyszłości? Szukasz nowych możliwości
        rozwoju?
        <br /> Nasze kursy programowania i sztucznej inteligencji to inwestycja
        w Twoją karierę.
        <br /> Dołącz do naszej społeczności i zacznij tworzyć przyszłość już
        dziś!
      </p>
      <MotionLink
            label='Strefa kursów'
            href='/courses'
          />
    </div>
  )
}
