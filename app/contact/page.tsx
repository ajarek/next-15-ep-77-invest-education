import ContactForm from '@/components/ContactForm'
import MotionImage from '@/components/MotionImage'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const Contact = async () => {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  return (
    <div className='min-h-[calc(100vh-32px*2-48px)] grid grid-cols-2 max-lg:grid-cols-1 place-items-center  p-4 gap-4 '>
      <MotionImage
        src='/images/contact.jpg'
        alt='contact'
        width={400}
        height={400}
      />
      <ContactForm
        nameUser={session.user?.email?.split('@')[0].toUpperCase() || ''}
        emailUser={session.user?.email || ''}
      />
    </div>
  )
}

export default Contact
