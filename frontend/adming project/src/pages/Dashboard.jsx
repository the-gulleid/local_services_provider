import { Users, UserCog, Calendar, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { name: 'Jan', bookings: 40 },
    { name: 'Feb', bookings: 55 },
    { name: 'Mar', bookings: 65 },
    { name: 'Apr', bookings: 60 },
    { name: 'May', bookings: 75 },
    { name: 'Jun', bookings: 90 },
    { name: 'Jul', bookings: 85 },
    { name: 'Aug', bookings: 100 },
    { name: 'Sep', bookings: 110 },
    { name: 'Oct', bookings: 120 },
    { name: 'Nov', bookings: 130 },
    { name: 'Dec', bookings: 145 },
];

const Card = ({ title, value, icon: Icon, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
    >
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
            <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
    </motion.div>
);

export default function Dashboard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card
                    title="Total Users"
                    value="1,234"
                    icon={Users}
                    color="bg-blue-500"
                />
                <Card
                    title="Total Providers"
                    value="456"
                    icon={UserCog}
                    color="bg-green-500"
                />
                <Card
                    title="Total Bookings"
                    value="789"
                    icon={Calendar}
                    color="bg-purple-500"
                />
                <Card
                    title="Monthly Growth"
                    value="+23%"
                    icon={TrendingUp}
                    color="bg-orange-500"
                />
            </div>

            {/* Charts Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Monthly Bookings</h3>
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#f3f4f6" />
                            <XAxis
                                dataKey="name"
                                stroke="#9ca3af"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                dy={10}
                            />
                            <YAxis
                                stroke="#9ca3af"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `${value}`}
                                dx={-10}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: 'white', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                cursor={{ stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5 5' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="bookings"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorBookings)"
                                activeDot={{ r: 6, strokeWidth: 0 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </motion.div>
    );
}
