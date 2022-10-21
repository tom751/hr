import HeaderMenu from '@/components/layout/HeaderMenu'

export default function Header() {
  return (
    <div className="h-60 bg-gradient-to-r from-indigo-700 to-purple-600">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center py-5">
          <span className="text-4xl font-bold text-white opacity-80">Company name</span>
          <div className="ml-auto">
            <HeaderMenu />
          </div>
        </div>
        <hr className="rounded border opacity-10" />
      </div>
    </div>
  )
}
