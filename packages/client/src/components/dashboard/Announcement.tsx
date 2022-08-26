export interface AnnouncementPreview {
  id: number
  title: string
  description: string
}

interface Props {
  announcement: AnnouncementPreview
}

export default function Announcement({ announcement }: Props) {
  return (
    <div className="py-4">
      <p className="font-medium text-gray-800">{announcement.title}</p>
      <p className="text-gray-500">{announcement.description}</p>
    </div>
  )
}
