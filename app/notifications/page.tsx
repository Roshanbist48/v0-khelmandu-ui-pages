import Header from "@/components/header"
import BottomNav from "@/components/bottom-nav"
import NotificationsPage from "@/components/pages/notifications-page"

export default function Notifications() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <NotificationsPage />
      </main>
      <BottomNav />
    </div>
  )
}
