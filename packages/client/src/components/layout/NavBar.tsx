import NavLink from '@/components/layout/NavLink'
import clsx from 'clsx'
import { useState } from 'react'
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineCalendar,
  HiOutlineEmojiSad,
  HiOutlineCash,
  HiMenu,
} from 'react-icons/hi'

export default function NavBar() {
  const [hideSidebar, setHideSidebar] = useState(true)
  const toggleSidebar = () => setHideSidebar((curr) => !curr)

  return (
    <>
      <div className="flex justify-end bg-slate-800 text-gray-200 dark:bg-zinc-800 md:hidden">
        <button
          className="rounded p-4 transition focus:outline-none focus:ring focus:ring-slate-600 active:bg-slate-600 active:ring-0 dark:active:bg-zinc-600"
          onClick={toggleSidebar}
        >
          <HiMenu className="h-7 w-7" />
        </button>
      </div>
      <nav
        className={clsx(
          'absolute inset-y-0 left-0 flex h-screen w-full max-w-[16rem] transform flex-col bg-slate-800 px-6 py-8 transition duration-200 ease-in-out dark:bg-zinc-800 md:relative md:translate-x-0',
          {
            '-translate-x-full': hideSidebar,
          }
        )}
      >
        <p className="text-3xl font-semibold text-slate-300">👋 Hi</p>
        <ul className="mt-8 space-y-2">
          <NavLink to="/">
            <HiOutlineHome className="mr-4 h-8 w-8" /> Dashboard
          </NavLink>
          <NavLink to="/details">
            <HiOutlineUserCircle className="mr-4 h-8 w-8" /> Your details
          </NavLink>
          <NavLink to="/holidays">
            <HiOutlineCalendar className="mr-4 h-8 w-8" /> Holidays
          </NavLink>
          <NavLink to="/sickness">
            <HiOutlineEmojiSad className="mr-4 h-8 w-8" /> Sickness
          </NavLink>
          <NavLink to="/payslips">
            <HiOutlineCash className="mr-4 h-8 w-8" /> Payslips
          </NavLink>
        </ul>
      </nav>
    </>
  )
}
