import Header from "@/components/header"
import BottomNav from "@/components/bottom-nav"
import BookingsPage from "@/components/pages/bookings-page"

export default function Bookings() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <BookingsPage />
      </main>
      <BottomNav />
    </div>
  )
}
