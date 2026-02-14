import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';

const revenueData = [
  { name: 'Jan', revenue: 4500 },
  { name: 'Feb', revenue: 5200 },
  { name: 'Mar', revenue: 6100 },
  { name: 'Apr', revenue: 5800 },
  { name: 'May', revenue: 7200 },
  { name: 'Jun', revenue: 8500 },
];

const serviceData = [
  { name: 'Plumbing', value: 30 },
  { name: 'Electrical', value: 20 },
  { name: 'Cleaning', value: 25 },
  { name: 'Carpentry', value: 15 },
  { name: 'Other', value: 10 },
];

const COLORS = ['#3b82f6', '#f59e0b', '#10b981', '#8b5cf6', '#ef4444'];

const SummaryCard = ({ title, value, subtext, trendColor }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
  >
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
    <p className={`text-sm mt-1 font-medium ${trendColor}`}>{subtext}</p>
  </motion.div>
);

export default function Analytics() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Analytics</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Monthly Revenue</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  cursor={{ fill: '#f3f4f6' }}
                  contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Service Distribution Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <h3 className="text-lg font-bold text-gray-800 mb-6">Service Distribution</h3>
           <div className="h-[300px] w-full flex items-center justify-center">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={serviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {serviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
             </ResponsiveContainer>
             <div className="flex flex-col justify-center gap-2 ml-4">
                {serviceData.map((entry, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                    <span className="text-gray-600">{entry.name} {entry.value}%</span>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>

      {/* Analytics Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <SummaryCard 
           title="Average Booking Value" 
           value="$125" 
           subtext="+12% from last month" 
           trendColor="text-green-600"
         />
         <SummaryCard 
           title="Customer Retention" 
           value="78%" 
           subtext="+5% from last month" 
           trendColor="text-green-600"
         />
         <SummaryCard 
           title="Provider Rating" 
           value="4.8/5" 
           subtext="Based on 234 reviews" 
           trendColor="text-gray-500"
         />
      </div>
    </motion.div>
  );
}