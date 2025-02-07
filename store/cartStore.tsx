import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export type Item = {
  id: number
  title: string
  type: string
  description: string
  numberOfStudents: number
  ranking: number
  courseIcon: string
  color: string
  price: number
}

type ItemState = {
  items: Item[]
  addItemToCart: (item: Item) => void
  removeItemFromCart: (id: number) => void
  total: () => number
  removeAll: () => void
  
  removeAllFromCart: () => void
}

export const useCartStore = create<ItemState>()(
  persist(
    (set, get) => ({
      items: [],

      addItemToCart: (item: Item) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeItemFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      removeAllFromCart: () => set({ items: [] }),

      total: () =>
        get().items.reduce((acc, item) => acc + item.price , 0),
      removeAll: () => set({ items: [] }),

      
      
    }),

    { name: "cartStore", storage: createJSONStorage(() => localStorage) }
  )
)