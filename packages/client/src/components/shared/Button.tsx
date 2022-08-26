import clsx from 'clsx'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'button'> {
  loading?: boolean
  variant?: 'outline' | 'fill'
  fullWidth?: boolean
}

export default function Button({
  children,
  className,
  loading = false,
  fullWidth = false,
  variant = 'fill',
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        'relative rounded-md py-2 px-4 transition-colors focus:outline-none focus:ring focus:ring-offset-1 disabled:cursor-not-allowed',
        variant === 'fill' &&
          'bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-400 disabled:bg-indigo-400',
        variant === 'outline' &&
          'border-2 border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-indigo-500 disabled:bg-transparent disabled:opacity-60',
        fullWidth && 'w-full',
        className
      )}
      disabled={loading}
      {...props}
    >
      {children}
    </button>
  )
}
