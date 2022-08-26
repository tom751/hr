import Header from '@/components/layout/Header'

interface Props {
  children: React.ReactNode
}

export default function AppShell({ children }: Props) {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <section className="mx-auto w-full max-w-6xl">{children}</section>
    </main>
  )
}
