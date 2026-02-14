import { Plus, Wrench, Zap, Hammer, Home, Paintbrush, Fan } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const initialServices = [
  { id: 1, name: 'Plumbing', providers: 12, icon: Wrench, color: 'bg-blue-500' },
  { id: 2, name: 'Electrical', providers: 8, icon: Zap, color: 'bg-yellow-500' },
  { id: 3, name: 'Carpentry', providers: 15, icon: Hammer, color: 'bg-orange-500' },
  { id: 4, name: 'Cleaning', providers: 20, icon: Home, color: 'bg-green-500' },
  { id: 5, name: 'Painting', providers: 10, icon: Paintbrush, color: 'bg-purple-500' },
  { id: 6, name: 'HVAC', providers: 6, icon: Fan, color: 'bg-red-500' },
];

export default function Services() {
  const [services, setServices] = useState(initialServices);

  const handleAddService = () => {
    const name = prompt("Enter service name:");
    if (!name) return;

    // Pick a random icon/color for demo
    const newService = {
      id: services.length + 1,
      name,
      providers: 0,
      icon: Wrench,
      color: 'bg-gray-500'
    };

    setServices([...services, newService]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Services</h2>
        <button
          onClick={handleAddService}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-48 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-gray-200 font-bold text-xl">#{index + 1}</div>

            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${service.color} bg-opacity-10`}>
              <service.icon className={`w-8 h-8 ${service.color.replace('bg-', 'text-')}`} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
              <p className="text-gray-500">{service.providers} Providers</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}