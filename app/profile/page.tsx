import Header from "@/components/header"
import BottomNav from "@/components/bottom-nav"
import ProfilePage from "@/components/pages/profile-page"

export default function Profile() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <ProfilePage />
      </main>
      <BottomNav />
    </div>
  )
}
