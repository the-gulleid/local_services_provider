import { Check, X, Plus, Edit } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const initialProviders = [
  { id: 1, name: 'khadara jama', service: 'Plumbing', status: 'Pending', location: 'New haregeisa' },
  { id: 2, name: 'Sahra cali ', service: 'Electrical', status: 'Pending' , location: 'Idaacada' },
  { id: 3, name: 'dugsiga Ilays', service: 'Carpentry', status: 'Approved' , location: '150 Area ' },
  { id: 4, name: 'dugsiga Elem', service: 'Cleaning', status: 'Pending' , location: 'masalaha' },
  { id: 5, name: ' meherda aadan xawaashle ', service: 'Painting', status: 'Rejected' , location: 'siinay' },
  { id: 6, name: 'faadumo cismaan', service: 'HVAC', status: 'Pending' , location: 'Idaacada' },
];

export default function Providers() {
  const [providers, setProviders] = useState(initialProviders);

  const handleAddProvider = () => {
    const name = prompt("Enter provider name:");
    if (!name) return;
    const service = prompt("Enter service:");
    if (!service) return;

    const newProvider = {
      id: providers.length + 1,
      name,
      service,
      status: 'Pending'
    };
    setProviders([...providers, newProvider]);
  };

  const handleEditProvider = (id) => {
    const provider = providers.find(p => p.id === id);
    const newName = prompt("Edit name:", provider.name);
    if (newName) {
      setProviders(providers.map(p => p.id === id ? { ...p, name: newName } : p));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setProviders(providers.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Provider Approval</h2>
        <button
          onClick={handleAddProvider}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add New Provider
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {providers.map((provider) => (
                <tr key={provider.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{provider.name}</td>
                  <td className="px-6 py-4 text-gray-500">{provider.service}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${provider.status === 'Approved' ? 'bg-green-100 text-green-700' : ''}
                      ${provider.status === 'Rejected' ? 'bg-red-100 text-red-700' : ''}
                      ${provider.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : ''}
                    `}>
                      {provider.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => handleEditProvider(provider.id)}
                        className="text-green-500 hover:text-green-700 p-1 rounded-full hover:bg-green-50 transition-colors border border-green-200"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(provider.id, 'Approved')}
                        className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded-md text-xs font-medium hover:bg-green-700 transition-colors shadow-sm"
                      >
                        <Check className="w-3 h-3" /> Approve
                      </button>
                      <button
                        onClick={() => handleStatusChange(provider.id, 'Rejected')}
                        className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded-md text-xs font-medium hover:bg-red-700 transition-colors shadow-sm"
                      >
                        <X className="w-3 h-3" /> Reject
                      </button>
                    </div>
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