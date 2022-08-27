import Summary from '@/components/dashboard/Summary'
import Announcements from '@/components/dashboard/Announcements'
import QuickLinks from '@/components/dashboard/QuickLinks'

export default function Dashboard() {
  return (
    <div className="-mt-20 flex gap-8">
      <div className="flex-[2] space-y-6">
        <Summary />
        <QuickLinks />
      </div>
      <div className="flex-1">
        <Announcements />
      </div>
    </div>
  )
}
