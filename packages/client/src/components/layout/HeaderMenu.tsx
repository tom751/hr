import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { HiUser } from 'react-icons/hi'
import HeaderMenuItem from '@/components/layout/HeaderMenuItem'

export default function HeaderMenu() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="rounded-full focus:border-none focus:outline focus:outline-offset-2 focus:outline-white">
        <div className="flex items-center justify-center overflow-hidden rounded-full border-2 border-white border-opacity-80">
          <HiUser className="h-8 w-8 text-white opacity-80" />
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-2 shadow">
            <HeaderMenuItem name="Account" type="link" to="/account" />
            <HeaderMenuItem name="Logout" type="button" />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
