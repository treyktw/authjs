import React from 'react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

interface HeaderProps {
  label: string
}

const HeaderComponent = ({label}: HeaderProps) => {
  return (
    <div className='w-full flex flex-col gap-4 items-center justify-center'>
      <h1 className={cn("text-7xl, font-semibold select-none", font.className)}>
        <span className='text-5xl'>🔒Auth</span>
      </h1>
      <p className='text-muted-foreground text-sm'>
        {label}
      </p>
    </div>
  )
}

export default HeaderComponent