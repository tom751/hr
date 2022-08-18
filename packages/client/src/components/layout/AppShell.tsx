import NavBar from '@/components/layout/NavBar'

interface Props {
  children: React.ReactNode
}

export default function AppShell({ children }: Props) {
  return (
    <main className="min-h-screen md:flex md:bg-slate-800 dark:md:bg-zinc-800">
      <NavBar />
      <section className="w-full bg-gray-50 dark:bg-zinc-900 dark:text-gray-50 md:rounded-tl-xl md:rounded-bl-xl">
        {children}
      </section>
    </main>
  )
}
