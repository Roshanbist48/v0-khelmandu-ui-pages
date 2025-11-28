import { Bell, User } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            K
          </div>
          <h1 className="text-white font-bold text-lg">KhelMandu</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-slate-300 hover:text-white transition">
            <Bell size={24} />
          </button>
          <button className="text-slate-300 hover:text-white transition">
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
