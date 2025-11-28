import { User, Mail, Phone, MapPin, LogOut, Settings, Heart } from "lucide-react"

export default function ProfilePage() {
  const userStats = [
    { label: "Events Attended", value: "12" },
    { label: "Bookings", value: "8" },
    { label: "Followers", value: "342" },
  ]

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header Background */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 h-24" />

      {/* Profile Content */}
      <div className="px-4">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 -mt-12 relative z-10 mb-6">
          <div className="flex items-end gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <User size={40} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-slate-900 font-bold text-xl">Sathi Raj</h2>
              <p className="text-slate-600 text-sm">Sports Enthusiast</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-slate-600 text-sm border-t border-slate-200 pt-4">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              sathi.raj@email.com
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              +977 9841234567
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Kathmandu, Nepal
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {userStats.map((stat, idx) => (
            <div key={idx} className="bg-slate-100 rounded-lg p-4 text-center">
              <p className="text-slate-600 text-xs mb-1">{stat.label}</p>
              <p className="text-slate-900 font-bold text-2xl">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-2 mb-6">
          {[
            { icon: Heart, label: "Favorite Events", color: "text-red-500" },
            { icon: Settings, label: "Settings", color: "text-slate-600" },
            { icon: LogOut, label: "Logout", color: "text-slate-600" },
          ].map((item, idx) => {
            const IconComponent = item.icon
            return (
              <button
                key={idx}
                className="w-full flex items-center gap-3 bg-slate-100 hover:bg-slate-200 transition-colors p-4 rounded-lg"
              >
                <IconComponent size={20} className={item.color} />
                <span className="text-slate-900 font-medium text-sm">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
