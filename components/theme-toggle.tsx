'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { IconMoon, IconSun } from '@/components/ui/icons'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [_, startTransition] = React.useTransition()
  const [hasMounted, setHasMounted] = React.useState(false)

  // Ensure the component is only rendered on the client
  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        startTransition(() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        })
      }}
    >
      <IconMoon className={`transition-all ${theme !== 'dark' ? 'hidden' : ''}`} />
      <IconSun className={`transition-all ${theme !== 'light' ? 'hidden' : ''}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
