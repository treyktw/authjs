'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface BackButtonProps {
  label: string
  href: string
}

const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant={'link'} className='font-normal w-full' asChild size={'sm'}>
      <Link href={href}>  
      {label}
      </Link>
    </Button>
  )
}

export default BackButton