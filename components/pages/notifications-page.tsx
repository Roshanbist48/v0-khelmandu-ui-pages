import { Bell, Trophy, Users, AlertCircle } from "lucide-react"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "event",
      title: "New Event Added",
      message: "Football Championship has been added",
      time: "2 hours ago",
      icon: Trophy,
    },
    {
      id: 2,
      type: "booking",
      title: "Booking Confirmed",
      message: "Your ticket for Cricket League is confirmed",
      time: "5 hours ago",
      icon: Bell,
    },
    {
      id: 3,
      type: "participant",
      title: "New Participant",
      message: "50 new players joined Basketball League",
      time: "1 day ago",
      icon: Users,
    },
    {
      id: 4,
      type: "alert",
      title: "Event Update",
      message: "Cricket Championship date changed to Dec 25",
      time: "2 days ago",
      icon: AlertCircle,
    },
    {
      id: 5,
      type: "event",
      title: "Event Reminder",
      message: "Tennis Open starts in 3 days",
      time: "3 days ago",
      icon: Trophy,
    },
  ]

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 sticky top-0 z-40">
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>

      {/* Content */}
      <div className="divide-y divide-slate-200">
        {notifications.map((notif) => {
          const IconComponent = notif.icon
          return (
            <div key={notif.id} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                  <IconComponent size={20} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-900 font-semibold text-sm">{notif.title}</h3>
                  <p className="text-slate-600 text-sm mt-1">{notif.message}</p>
                  <span className="text-slate-400 text-xs mt-2 block">{notif.time}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
