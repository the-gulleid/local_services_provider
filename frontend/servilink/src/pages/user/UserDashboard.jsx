import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { Calendar, Clock, MapPin, CheckCircle, XCircle } from 'lucide-react';

const ClientDashboard = () => {
    const { user } = useAuth();
    const { bookings } = useData(); // In real app, filter by user.id


    const displayBookings = bookings.length > 0 ? bookings : [
        { id: 101, service: 'Plumbing', provider: 'John Doe', date: '2023-10-25', time: '10:00 AM', status: 'completed', price: '$120' },
        { id: 102, service: 'Cleaning', provider: 'Mike Johnson', date: '2023-11-02', time: '2:00 PM', status: 'pending', price: '$80' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 px-4">
            <div className="container mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Hello, {user?.name || 'Client'}!</h1>
                    <p className="text-gray-600 dark:text-gray-400">Manage your bookings and profile here.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Total Bookings</h3>
                        <p className="text-3xl font-bold text-primary mt-2">{displayBookings.length}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Pending</h3>
                        <p className="text-3xl font-bold text-secondary mt-2">
                            {displayBookings.filter(b => b.status === 'pending').length}
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Completed</h3>
                        <p className="text-3xl font-bold text-green-500 mt-2">
                            {displayBookings.filter(b => b.status === 'completed').length}
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Bookings</h2>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 uppercase text-xs font-semibold">
                                <tr>
                                    <th className="px-6 py-4">Service</th>
                                    <th className="px-6 py-4">Provider</th>
                                    <th className="px-6 py-4">Date & Time</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Price</th>
                                    <th className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                {displayBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{booking.service}</td>
                                        <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{booking.provider}</td>
                                        <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                            <div className="flex flex-col text-sm">
                                                <span className="flex items-center gap-1"><Calendar size={14} /> {booking.date}</span>
                                                <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> {booking.time}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">{booking.price}</td>
                                        <td className="px-6 py-4">
                                            <button className="text-gray-400 hover:text-primary transition-colors">Details</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDashboard;
