import { Search, Filter, Calendar as CalIcon, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const bookings = [
  { id: '#1', customer: 'Alice Cooper', provider: 'John Smith', service: 'Plumbing', date: '2026-02-10', status: 'Confirmed' },
  { id: '#2', customer: 'Bob Martin', provider: 'Sarah Johnson', service: 'Electrical', date: '2026-02-12', status: 'Pending' },
  { id: '#3', customer: 'Charlie Davis', provider: 'Mike Williams', service: 'Carpentry', date: '2026-02-15', status: 'Completed' },
  { id: '#4', customer: 'Diana Prince', provider: 'Emily Brown', service: 'Cleaning', date: '2026-02-08', status: 'Cancelled' },
  { id: '#5', customer: 'Ethan Hunt', provider: 'Lisa Anderson', service: 'HVAC', date: '2026-02-20', status: 'Confirmed' },
];

export default function Bookings() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Bookings</h2>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search bookings..." 
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
             <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Provider</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4 font-medium text-blue-600">{booking.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{booking.customer}</td>
                  <td className="px-6 py-4 text-gray-500">{booking.provider}</td>
                  <td className="px-6 py-4 text-gray-500">{booking.service}</td>
                  <td className="px-6 py-4 text-gray-500 flex items-center gap-2">
                     <CalIcon className="w-3 h-3" /> {booking.date}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                      ${booking.status === 'Confirmed' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                      ${booking.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                      ${booking.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : ''}
                      ${booking.status === 'Cancelled' ? 'bg-red-50 text-red-700 border-red-200' : ''}
                    `}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}