import Header from "@/components/header"
import BottomNav from "@/components/bottom-nav"
import EventsPage from "@/components/pages/events-page"

export default function Events() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <EventsPage />
      </main>
      <BottomNav />
    </div>
  )
}
