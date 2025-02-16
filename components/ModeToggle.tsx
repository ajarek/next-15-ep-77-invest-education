'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {theme === 'light' ? (
          <Moon
            strokeWidth={1}
            size={32}
            onClick={() => setTheme('dark')}
          />
        ) : (
          <Sun
            strokeWidth={1}
            size={32}
            onClick={() => setTheme('light')}
          />
        )}
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
