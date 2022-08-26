import clsx from 'clsx'
import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: Props) {
  return <div className={clsx('overflow-hidden rounded-xl bg-white drop-shadow', className)}>{children}</div>
}
