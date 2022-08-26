import Summary from '@/components/dashboard/Summary'
import Announcements from '@/components/dashboard/Announcements'

export default function Dashboard() {
  return (
    <div className="-mt-20 grid grid-cols-3 place-items-start gap-4">
      <Summary />
      <Announcements />
    </div>
  )
}
