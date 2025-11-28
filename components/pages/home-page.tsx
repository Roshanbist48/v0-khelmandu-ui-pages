import { MapPin, Users, Trophy } from "lucide-react"

export default function HomePage() {
  const upcomingEvents = [
    { id: 1, name: "Football Championship", date: "Dec 15", location: "Central Stadium" },
    { id: 2, name: "Cricket Tournament", date: "Dec 20", location: "Sports Complex" },
    { id: 3, name: "Basketball League", date: "Dec 25", location: "Indoor Arena" },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 px-4 py-8 text-center relative">
        <h2 className="text-white text-2xl font-bold mb-1">Hello, साथी !</h2>
        <p className="text-slate-400 mb-8">खेल सुरु हुन लाग्यो !</p>
      </div>

      {/* Wave Divider */}
      <div className="relative h-20 bg-gradient-to-b from-slate-900 to-white">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,40 Q360,80 720,40 T1440,40 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="bg-white px-4 py-8 min-h-screen">
        {/* Featured Section */}
        <div className="mb-8">
          <h3 className="text-slate-900 text-lg font-bold mb-4">Featured Events</h3>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white mb-4">
            <h4 className="text-xl font-bold mb-2">Major Cricket League</h4>
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={16} />
              <span className="text-sm">Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span className="text-sm">2,543 Registered</span>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-8">
          <h3 className="text-slate-900 text-lg font-bold mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="text-slate-900 font-semibold mb-2">{event.name}</h4>
                <div className="flex items-center gap-4 text-slate-600 text-sm">
                  <span>{event.date}</span>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-100 rounded-lg p-4 text-center">
            <Trophy className="text-blue-500 mx-auto mb-2" size={28} />
            <p className="text-slate-600 text-sm">Tournaments</p>
            <p className="text-slate-900 font-bold text-xl">24</p>
          </div>
          <div className="bg-slate-100 rounded-lg p-4 text-center">
            <Users className="text-blue-500 mx-auto mb-2" size={28} />
            <p className="text-slate-600 text-sm">Active Users</p>
            <p className="text-slate-900 font-bold text-xl">5.2K</p>
          </div>
        </div>
      </div>
    </div>
  )
}
