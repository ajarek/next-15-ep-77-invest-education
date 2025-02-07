"use client"

import React from "react"
import { useCartStore } from "@/store/cartStore"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"
const Cart = () => {
  const { items,  removeItemFromCart, total, removeAll } =
    useCartStore()
  const router = useRouter()

  return (
    <div className=' w-full min-h-[calc(100vh-194px)] flex flex-col max-lg:gap-8  px-8 py-4 max-sm:px-1 '>
      {items.length > 0 ? (
        <>
          <div className=' w-full  max-h-[400px] overflow-y-auto scrollbar max-sm:max-h-[400px]  p-1 '>
            {items.map((item) => (
              <div
                key={item.id}
                className='w-full grid grid-cols-6 max-sm:grid-cols-4 items-center justify-start  border-b border-gray-500 gap-4 p-4 '
              >
                <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center">

                <Image src={item.courseIcon} alt={item.title} width={50} height={50}  />
                </div>
                <div className='w-full text-start'>{item.title}</div>
               
                <div> {item.type}</div>
                <div>⭐ {item.ranking}</div>

                <div className=' max-sm:hidden'>PLN {item.price.toFixed(2)}</div>

            
                <div className=' flex items-center justify-center'>
                  <button
                    onClick={() => removeItemFromCart(item.id)}
                    aria-label='remove'
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full flex items-center justify-end text-xl mt-4 px-4'>
            Razem : PLN {total().toFixed(2)}
          </div>
          <div className='flex w-full justify-end gap-8 mt-8 px-4 '>
            <Button
              variant='destructive'
              onClick={() => removeAll()}
              aria-label='remove all'
            >
              Usuń wszystko
            </Button>
            <Button
              onClick={() => router.push("/payment")}
              aria-label='go to payment'
            >
              Kupuję Kurs/Kursy
            </Button>
          </div>
        </>
      ) : (
        <>
          <h1 className='text-2xl text-center py-8'>Koszyk jest pusty !</h1>
          <Button
            className='w-fit mx-auto hover:bg-orange-200'
            onClick={() => router.push("/courses")}
          >
            Przejdź do zakupów
          </Button>
        </>
      )}
    </div>
  )
}

export default Cart