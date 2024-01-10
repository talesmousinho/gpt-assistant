'use client'

import { useChat } from 'ai/react'

import { cn } from '@/lib/utils'
import { ChatList } from '@/components/chat-list'
import { ChatPanel } from '@/components/chat-panel'
import { ChatScrollAnchor } from '@/components/chat-scroll-anchor'

export interface ChatProps extends React.ComponentProps<'div'> {}

export function Chat({ className }: ChatProps) {
  const { messages, append, isLoading, input, setInput } = useChat()
  return (
    <>
      <div className={cn('pb-[200px] pt-4 md:pt-10', className)}>
        {messages.length ? (
          <>
            <ChatList messages={messages} />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : null}
      </div>
      <ChatPanel isLoading={isLoading} append={append} input={input} setInput={setInput} />
    </>
  )
}
