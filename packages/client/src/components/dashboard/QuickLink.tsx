import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { BsArrowUpRight } from 'react-icons/bs'

interface Props {
  title: string
  description: string
  icon: React.ReactNode
  iconClassName: string
  routeTo: string
  noBottomBorder?: boolean
}
export default function QuickLink({ title, description, icon, routeTo, iconClassName, noBottomBorder = false }: Props) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(routeTo)}
      className={clsx(
        'border-b-2 p-6 text-left odd:border-r-2 focus:bg-slate-100 focus:outline-none',
        noBottomBorder && 'border-b-0'
      )}
    >
      <div className="mb-4 flex">
        <div className={clsx('flex h-12 w-12 items-center justify-center rounded', iconClassName)}>{icon}</div>
        <BsArrowUpRight className="ml-auto text-3xl text-gray-300" />
      </div>
      <p className="mb-2 text-xl font-medium text-gray-800">{title}</p>
      <p className="leading-6 text-gray-500">{description}</p>
    </button>
  )
}
