import { Search, Filter, MapPin, Calendar } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      name: "Football League",
      date: "Dec 15-25",
      location: "Central Stadium",
      category: "Football",
      participants: 128,
    },
    {
      id: 2,
      name: "Cricket Championship",
      date: "Dec 20-30",
      location: "Cricket Ground",
      category: "Cricket",
      participants: 256,
    },
    {
      id: 3,
      name: "Basketball Tournament",
      date: "Dec 22-28",
      location: "Indoor Arena",
      category: "Basketball",
      participants: 64,
    },
    { id: 4, name: "Tennis Open", date: "Jan 5-12", location: "Tennis Court", category: "Tennis", participants: 32 },
    {
      id: 5,
      name: "Badminton Cup",
      date: "Jan 10-15",
      location: "Sports Complex",
      category: "Badminton",
      participants: 48,
    },
  ]

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 sticky top-0 z-40">
        <h1 className="text-2xl font-bold mb-4">Events</h1>
        <div className="flex gap-2">
          <div className="flex-1 bg-slate-700 rounded-lg flex items-center px-3">
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search events..."
              className="bg-transparent w-full py-2 px-2 text-sm focus:outline-none"
            />
          </div>
          <button className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600 transition">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-24 flex items-center justify-center">
              <span className="text-white font-bold text-2xl opacity-20">{event.category}</span>
            </div>
            <div className="p-4">
              <h3 className="text-slate-900 font-bold text-lg mb-2">{event.name}</h3>
              <div className="space-y-2 text-slate-600 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {event.location}
                </div>
                <div className="text-slate-500">{event.participants} participants registered</div>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
