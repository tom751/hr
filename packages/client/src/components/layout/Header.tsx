import { HiUser } from 'react-icons/hi'

export default function Header() {
  return (
    <div className="h-60 bg-gradient-to-r from-indigo-700 to-fuchsia-700">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center py-5">
          <span className="text-4xl font-bold text-white opacity-80">Company name</span>
          <div className="ml-auto">
            <div className="flex items-center justify-center overflow-hidden rounded-full border-2 border-white border-opacity-80">
              <HiUser className="h-8 w-8 text-white opacity-80" />
            </div>
          </div>
        </div>
        <hr className="rounded border opacity-10" />
      </div>
    </div>
  )
}
