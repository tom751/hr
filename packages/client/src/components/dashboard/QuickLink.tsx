import clsx from 'clsx'
import { BsArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  description: string
  icon: React.ReactNode
  iconClassName: string
  routeTo: string
  hoverClassName: string
  noBottomBorder?: boolean
}

export default function QuickLink({
  title,
  description,
  icon,
  routeTo,
  iconClassName,
  hoverClassName,
  noBottomBorder = false,
}: Props) {
  return (
    <Link
      to={routeTo}
      className={clsx(
        'group border-b-2 p-6 text-left odd:border-r-2 focus:bg-slate-100 focus:outline-none',
        noBottomBorder && 'border-b-0'
      )}
    >
      <div className="mb-4 flex">
        <div className={clsx('flex h-12 w-12 items-center justify-center rounded', iconClassName)}>{icon}</div>
        <BsArrowUpRight className="ml-auto text-3xl text-gray-300" />
      </div>
      <p
        className={clsx(
          hoverClassName,
          'relative mb-2 inline-block text-xl font-medium text-gray-800 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-200 after:content-[""] group-hover:after:scale-x-100 group-focus:after:scale-x-100'
        )}
      >
        {title}
      </p>
      <p className="leading-6 text-gray-500">{description}</p>
    </Link>
  )
}
