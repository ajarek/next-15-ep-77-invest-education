'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'
import type { Item } from '@/store/cartStore'

type CourseCardProps = {
  id: number
  title: string
  type: string
  description: string
  numberOfStudents: number
  price: number
  ranking: number
  courseIcon: string
  color: string
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  type,
  description,
  numberOfStudents,
  ranking,
  courseIcon,
  color,
  price,
}) => {
  const { addItemToCart, items } = useCartStore()
  const router = useRouter()

  const handleCart = (item: Item) => {
    if (items.length >= 1) return
    if (items.some((i) => i.id === item.id)) return
    const newItem = { ...item }
    addItemToCart(newItem)
    router.push('/cart')
  }
  return (
    <Card
      className={`w-full  justify-between text-black shadow-xl`}
      style={{ backgroundColor: color }}
    >
      <CardHeader>
        <CardTitle className=' flex items-center justify-between'>
          <div className='flex  items-center gap-2'>
            <div className='w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full'>
              <Image
                src={courseIcon || ''}
                alt={title}
                width={30}
                height={30}
              />
            </div>
            <p className='text-lg font-thin'> {type}</p>
          </div>
          <div className='w-[70px] h-[40px] flex  items-center justify-center bg-white rounded-full'>
            <Image
              src='/icons/team.svg'
              alt={title}
              width={30}
              height={30}
            />
            <p>{numberOfStudents}</p>
          </div>
          <div className='w-[80px] h-[40px] flex items-center justify-center bg-white rounded-full'>
            <p className='text-lg '>⭐ {ranking}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Nr kursu: {id}</p>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <CardDescription className='text-gray-700'>
          Opis kursu: {description}
        </CardDescription>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            Cena kursu: <h1 className='text-lg font-semibold'>{price}PLN</h1>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                className='w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full text-2xl'
                onClick={() =>
                  handleCart({
                    id: Number(id) || 0,
                    title: title || '',
                    price: price || 0,
                    type: type || '',
                    ranking: ranking || 0,
                    numberOfStudents: numberOfStudents || 0,
                    description: description || '',
                    color: color || '',
                    courseIcon: courseIcon || '',
                  })
                }
              >
                🛒
              </TooltipTrigger>
              <TooltipContent>
                <div className='text-lg'>Dodaj do koszyka</div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  )
}

export default CourseCard
