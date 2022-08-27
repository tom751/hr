import { HiUser } from 'react-icons/hi'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'

export default function Summary() {
  return (
    <Card>
      <div className="flex items-center p-6">
        <div className="flex items-center justify-center overflow-hidden rounded-full bg-gray-200">
          <HiUser className="h-20 w-20 text-gray-500 opacity-80" />
        </div>
        <div className="ml-5">
          <p>Welcome back,</p>
          <p className="text-2xl font-bold text-gray-800">Bob Smith</p>
          <p>Software developer</p>
        </div>
        <Button className="ml-auto" variant="outline">
          View profile
        </Button>
      </div>
      <div className="grid grid-cols-3 items-center divide-x-2 border-t-2 bg-gray-100 text-center">
        <p className="p-4">
          <span className="font-medium">12</span> holidays left
        </p>
        <p className="p-4">
          <span className="font-medium">12</span> days until next holiday
        </p>
        <p className="p-4">
          <span className="font-medium">12</span> weeks until next holiday period
        </p>
      </div>
    </Card>
  )
}
