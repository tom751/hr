import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import type { AnnouncementPreview } from '@/components/dashboard/Announcement'
import Announcement from '@/components/dashboard/Announcement'

const announcements: AnnouncementPreview[] = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet praesentium, enim incidunt voluptas consequatur quam.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet praesentium, enim incidunt voluptas consequatur quam.',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet praesentium, enim incidunt voluptas consequatur quam.',
  },
]

export default function Announcements() {
  return (
    <Card className="p-6">
      <p className="mb-2 text-xl font-medium text-gray-800">Announcements</p>
      <div className="divide-y-2">
        {announcements.map((a) => (
          <Announcement announcement={a} key={a.id} />
        ))}
      </div>
      <Button variant="outline" fullWidth>
        View all
      </Button>
    </Card>
  )
}
