import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

const ProviderDashboard = () => {
    const { user } = useAuth();
    const { bookings, updateBookingStatus } = useData();


    const myBookings = bookings;

    const pendingCount = myBookings.filter(b => b.status === 'pending').length;
    const activeCount = myBookings.filter(b => b.status === 'accepted').length;
    const completedCount = myBookings.filter(b => b.status === 'completed').length;
    const totalEarnings = myBookings
        .filter(b => b.status === 'completed')
        .reduce((acc, curr) => acc + parseInt(curr.price.replace(/[^0-9]/g, '') || 0), 0);

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 px-4">
            <div className="container mx-auto">
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Provider Dashboard</h1>
                        <p className="text-gray-600 dark:text-gray-400">Manage your jobs and earnings.</p>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors">
                        Add New Service
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Pending Requests</h3>
                        <p className="text-3xl font-bold text-primary mt-2">{pendingCount}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Active Jobs</h3>
                        <p className="text-3xl font-bold text-secondary mt-2">{activeCount}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Completed</h3>
                        <p className="text-3xl font-bold text-green-500 mt-2">{completedCount}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Total Earnings</h3>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">${totalEarnings}</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Job Requests</h2>
                <div className="space-y-4">
                    {myBookings.map((req) => (
                        <div key={req.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center transition-all hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{req.service}</h3>
                                <p className="text-gray-500 text-sm">Customer: {req.customer || 'Guest User'} • Date: {req.date}</p>
                                <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-md ${req.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                    req.status === 'accepted' ? 'bg-blue-100 text-blue-800' :
                                        req.status === 'completed' ? 'bg-green-100 text-green-800' :
                                            'bg-red-100 text-red-800'
                                    }`}>
                                    {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                                </span>
                            </div>
                            <div className="flex items-center gap-4 mt-4 md:mt-0">
                                <span className="text-lg font-bold text-gray-900 dark:text-white">{req.price || 'TBD'}</span>
                                {req.status === 'pending' && (
                                    <>
                                        <button
                                            onClick={() => updateBookingStatus(req.id, 'rejected')}
                                            className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
                                            title="Reject"
                                        >
                                            <XCircle size={20} />
                                        </button>
                                        <button
                                            onClick={() => updateBookingStatus(req.id, 'accepted')}
                                            className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
                                            title="Accept"
                                        >
                                            <CheckCircle size={20} />
                                        </button>
                                    </>
                                )}
                                {req.status === 'accepted' && (
                                    <button
                                        onClick={() => updateBookingStatus(req.id, 'completed')}
                                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
                                    >
                                        Mark Completed
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    {myBookings.length === 0 && (
                        <p className="text-gray-500 text-center py-8">No job requests yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProviderDashboard;
