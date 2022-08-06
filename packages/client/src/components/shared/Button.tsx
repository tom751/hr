import clsx from 'clsx'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'button'> {
  loading?: boolean
}

export default function Button({ children, className, loading = false, ...props }: Props) {
  return (
    <button
      className={clsx(
        className,
        'relative rounded-md bg-indigo-300 py-2 px-4 text-white transition-colors hover:bg-indigo-600 disabled:cursor-not-allowed dark:bg-indigo-800 disabled:dark:bg-indigo-400'
      )}
      disabled={loading}
      {...props}
    >
      {children}
    </button>
  )
}
