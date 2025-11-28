import { Ticket, Calendar, MapPin, Download } from "lucide-react"

export default function BookingsPage() {
  const bookings = [
    {
      id: 1,
      event: "Football Championship",
      date: "Dec 15",
      location: "Central Stadium",
      ticketCount: 4,
      status: "confirmed",
      amount: "₹4,000",
    },
    {
      id: 2,
      event: "Cricket Tournament",
      date: "Dec 20",
      location: "Cricket Ground",
      ticketCount: 2,
      status: "confirmed",
      amount: "₹2,000",
    },
    {
      id: 3,
      event: "Basketball League",
      date: "Dec 22",
      location: "Indoor Arena",
      ticketCount: 1,
      status: "pending",
      amount: "₹500",
    },
  ]

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 sticky top-0 z-40">
        <h1 className="text-2xl font-bold mb-2">My Bookings</h1>
        <p className="text-slate-300 text-sm">You have {bookings.length} active bookings</p>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Ticket size={20} />
                <span className="font-semibold">Booking #{booking.id}</span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  booking.status === "confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {booking.status}
              </span>
            </div>

            {/* Details */}
            <div className="p-4 space-y-3">
              <h3 className="text-slate-900 font-bold text-lg">{booking.event}</h3>
              <div className="space-y-2 text-slate-600 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {booking.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {booking.location}
                </div>
                <div className="flex items-center gap-2">
                  <Ticket size={16} />
                  {booking.ticketCount} tickets
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-xs">Total Amount</p>
                  <p className="text-slate-900 font-bold text-lg">{booking.amount}</p>
                </div>
                <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
                  <Download size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Button */}
      <div className="fixed bottom-24 right-4">
        <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition">
          <Ticket size={24} />
        </button>
      </div>
    </div>
  )
}
