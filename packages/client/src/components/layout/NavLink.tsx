import clsx from 'clsx'
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom'

export default function NavLink(props: LinkProps) {
  const resolved = useResolvedPath(props.to)
  const match = useMatch({ path: resolved.pathname, end: true })
  return (
    <li
      className={clsx('rounded-md text-slate-300 transition hover:bg-slate-600 dark:hover:bg-zinc-700', {
        'bg-slate-600 dark:bg-zinc-700': match,
      })}
    >
      <Link
        {...props}
        className="flex w-full items-center rounded-md p-2 text-left font-semibold transition focus:outline-none focus:ring focus:ring-slate-400 active:bg-slate-200 active:ring-0"
      />
    </li>
  )
}
