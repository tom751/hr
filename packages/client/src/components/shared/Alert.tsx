import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  variation?: 'error' | 'info' | 'success'
  className?: string
}

export default function Alert({ children, className, variation = 'success' }: Props) {
  return (
    <div
      className={clsx(
        'border-l-4 p-3',
        {
          'border-sky-300 bg-sky-100 text-sky-700': variation === 'info',
          'border-emerald-400 bg-emerald-100 text-emerald-800': variation === 'success',
          'border-red-400 bg-red-200 text-red-800': variation === 'error',
        },
        className
      )}
    >
      {children}
    </div>
  )
}
