import Header from "@/components/header"
import BottomNav from "@/components/bottom-nav"
import HomePage from "@/components/pages/home-page"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Header />
      <main className="flex-1 pb-20">
        <HomePage />
      </main>
      <BottomNav />
    </div>
  )
}
