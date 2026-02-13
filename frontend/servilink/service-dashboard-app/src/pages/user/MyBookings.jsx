import React from 'react';

const MyBookings = () => {
    const bookings = [
        { id: 'BK001', service: 'House Cleaning', provider: 'Gulleid Mohamed Farah', phone: '4867444', date: 'Feb 5, 2026', status: 'Completed' },
        { id: 'BK002', service: 'Plumbing Repair', provider: 'Khalid Abdirahman Sulub', phone: '0633624553', date: 'Feb 8, 2026', status: 'Pending' },
        { id: 'BK003', service: 'Lawn Maintenance', provider: 'Mohamed Abdiqadir Ali', phone: '63 4709734', date: 'Feb 10, 2026', status: 'Confirmed' },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Completed': return { bg: 'bg-emerald-100', text: 'text-emerald-700' };
            case 'Pending': return { bg: 'bg-yellow-100', text: 'text-yellow-700' };
            case 'Confirmed': return { bg: 'bg-blue-100', text: 'text-blue-700' };
            default: return { bg: 'bg-gray-100', text: 'text-gray-700' };
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">My Bookings History</h2>
                <button className="text-blue-600 text-sm font-medium hover:underline">Download Report</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                            <th className="p-4 font-semibold">ID</th>
                            <th className="p-4 font-semibold">Service</th>
                            <th className="p-4 font-semibold">Provider</th>
                            <th className="p-4 font-semibold">Date</th>
                            <th className="p-4 font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {bookings.map((bk, idx) => {
                            const style = getStatusStyle(bk.status);
                            return (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors text-sm">
                                    <td className="p-4 font-medium text-gray-900">{bk.id}</td>
                                    <td className="p-4 text-gray-600">{bk.service}</td>
                                    <td className="p-4 text-gray-600">{bk.provider}</td>
                                    <td className="p-4 text-gray-600">{bk.date}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-md text-xs font-bold ${style.bg} ${style.text}`}>
                                            {bk.status}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;
