import * as React from 'react'
import Link from 'next/link'

import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import { IconMessage, IconSeparator } from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'
import { ThemeToggle } from './theme-toggle'

async function UserOrLogin() {
  const session = await auth()
  return (
    <>
      <Link href="/" target="_blank" rel="nofollow">
        <IconMessage className="w-6 h-6 mr-2 dark:hidden" />
        <IconMessage className="hidden w-6 h-6 mr-2 dark:block" />
      </Link>
      <div className="flex items-center">
        <IconSeparator className="w-6 h-6 text-muted-foreground/50" />
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <Button variant="link" asChild className="-ml-2">
            <Link href="/sign-in?callbackUrl=/">Login</Link>
          </Button>
        )}
      </div>
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <ThemeToggle />
      </div>
    </header>
  )
}
