"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Calendar, Bell, Ticket, User } from "lucide-react"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/bookings", label: "Bookings", icon: Ticket },
  { href: "/profile", label: "Profile", icon: User },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const IconComponent = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex flex-col items-center justify-center py-4 transition-colors ${
                isActive ? "text-blue-400 border-t-2 border-blue-400" : "text-slate-400 hover:text-slate-300"
              }`}
            >
              <IconComponent size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
