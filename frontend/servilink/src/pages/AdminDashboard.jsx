import { Users, UserPlus, CalendarCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
    const { user } = useAuth();

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 px-4">
            <div className="container mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
                    <p className="text-gray-600 dark:text-gray-400">System Overview and Management.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Total Users</h3>
                            <p className="text-3xl font-bold text-primary mt-2">1,250</p>
                        </div>
                        <Users size={32} className="text-primary/20" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">New Providers</h3>
                            <p className="text-3xl font-bold text-yellow-500 mt-2">15</p>
                        </div>
                        <UserPlus size={32} className="text-yellow-500/20" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Active Bookings</h3>
                            <p className="text-3xl font-bold text-green-500 mt-2">240</p>
                        </div>
                        <CalendarCheck size={32} className="text-green-500/20" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Platform Revenue</h3>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">$12,450</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Pending Provider Approvals</h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white">Provider Name {i}</p>
                                            <p className="text-xs text-gray-500">Service: Plumbing</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200">Approve</button>
                                        <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200">Reject</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
                        <ul className="space-y-4">
                            {[1, 2, 3, 4].map(i => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">New booking created by <strong>User {i}</strong> for <strong>Provider {i}</strong>.</p>
                                        <span className="text-xs text-gray-400">2 hours ago</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
