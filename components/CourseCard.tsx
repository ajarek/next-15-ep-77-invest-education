import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'

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

const CourseCard: React.FC<CourseCardProps> = ({ id, title, type, description, numberOfStudents, ranking, courseIcon, color, price }) => {
  return (
   <Card className={`w-full p-2 justify-between text-black`} style={{backgroundColor: color}}>
    <CardHeader>
      <CardTitle className=" flex items-center gap-4">
        <Image src={courseIcon||''} alt={title} width={40} height={40} />
        <h1>{title}</h1>
        
        </CardTitle>
    </CardHeader>
    <CardContent>
      <p>Nr kursu: {id}</p>
      <p>Typ kursu: {type}</p>
      <p>Ilość studentów: {numberOfStudents} students</p>
      <p>Ranking: {ranking} ranking</p>
      <CardDescription className="text-gray-500">Opis kursu: {description}</CardDescription>
    </CardContent>
    <CardFooter>Cena kursu: {price}PLN</CardFooter>
   </Card>
  )
}

export default CourseCard