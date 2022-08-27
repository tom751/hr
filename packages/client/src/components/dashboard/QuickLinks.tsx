import QuickLink from '@/components/dashboard/QuickLink'
import Card from '@/components/shared/Card'
import {
  HiOutlineClock,
  HiOutlineCurrencyPound,
  HiOutlineDocumentText,
  HiOutlineEmojiSad,
  HiOutlineReceiptRefund,
  HiOutlineUsers,
} from 'react-icons/hi'

export default function QuickLinks() {
  return (
    <Card className="grid grid-cols-2">
      <QuickLink
        title="Request time off"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus, assumenda accusamus architecto accusantium amet?"
        routeTo="/holidays"
        icon={<HiOutlineClock className="text-2xl text-emerald-800" />}
        iconClassName="bg-emerald-50"
      />
      <QuickLink
        title="Payslips"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus, assumenda accusamus architecto accusantium amet?"
        routeTo="/payslips"
        icon={<HiOutlineCurrencyPound className="text-2xl text-blue-800" />}
        iconClassName="bg-blue-50"
      />
      <QuickLink
        title="1 to 1s"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus, assumenda accusamus architecto accusantium amet?"
        routeTo="/one-to-one"
        icon={<HiOutlineUsers className="text-2xl text-yellow-800" />}
        iconClassName="bg-yellow-50"
      />
      <QuickLink
        title="Log sick day"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus, assumenda accusamus architecto accusantium amet?"
        routeTo="/absences"
        icon={<HiOutlineEmojiSad className="text-2xl text-rose-800" />}
        iconClassName="bg-rose-50"
      />
      <QuickLink
        title="Claim expense"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus, assumenda accusamus architecto accusantium amet?"
        routeTo="/expenses"
        icon={<HiOutlineReceiptRefund className="text-2xl text-cyan-800" />}
        iconClassName="bg-cyan-50"
        noBottomBorder
      />
      <QuickLink
        title="View documents"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus, assumenda accusamus architecto accusantium amet?"
        routeTo="/documents"
        icon={<HiOutlineDocumentText className="text-2xl text-violet-800" />}
        iconClassName="bg-violet-50"
        noBottomBorder
      />
    </Card>
  )
}
