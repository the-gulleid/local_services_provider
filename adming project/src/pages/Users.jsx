import { Eye, Edit, Ban, Trash2, Plus, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'Abdiasiis ahmed farah ', email: 'siise@example.com', role: 'Customer', status: 'Active' },
  { id: 2, name: 'khalid abdirahman sulub', email: 'sulub@example.com', role: 'Customer', status: 'Active' },
  { id: 3, name: 'Ali mowliid abdilahi', email: 'ali mowliid@example.com', role: 'Provider', status: 'Active' },
  { id: 4, name: 'abdirahman ibrahim ali', email: 'maygaag@example.com', role: 'Customer', status: 'Banned' },
  { id: 5, name: 'Eid abdirahman yousuf', email: 'Eid@example.com', role: 'Customer', status: 'Active' },
  { id: 6, name: 'abdirahman mustafe asakar', email: 'askar@example.com', role: 'Provider', status: 'Active' },
];

export default function Users() {
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = () => {
    const name = prompt("Enter user name:");
    if (!name) return;
    const email = prompt("Enter user email:");
    if (!email) return;
    const role = prompt("Enter role (Customer/Provider):", "Customer");

    const newUser = {
      id: users.length + 1,
      name,
      email,
      role: role || 'Customer',
      status: 'Active'
    };
    setUsers([...users, newUser]);
  };

  const handleEditUser = (id) => {
    const user = users.find(u => u.id === id);
    const newName = prompt("Edit name:", user.name);
    if (newName) {
      setUsers(users.map(u => u.id === id ? { ...u, name: newName } : u));
    }
  };

  const handleBanUser = (id) => {
    if (confirm("Are you sure you want to ban/unban this user?")) {
      setUsers(users.map(u => {
        if (u.id === id) {
          return { ...u, status: u.status === 'Banned' ? 'Active' : 'Banned' };
        }
        return u;
      }));
    }
  };

  const handleDeleteUser = (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Users Management</h2>
        <button
          onClick={handleAddUser}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add New User
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 font-medium">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 text-gray-500">{user.email}</td>
                    <td className="px-6 py-4 text-gray-500">{user.role}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${user.status === 'Active' ? 'bg-green-100 text-green-700' : ''}
                        ${user.status === 'Banned' ? 'bg-red-100 text-red-700' : ''}
                        ${user.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : ''}
                      `}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => alert(`Viewing details for ${user.name}`)}
                          className="text-blue-500 hover:text-blue-700 p-1 rounded-full hover:bg-blue-50 transition-colors"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEditUser(user.id)}
                          className="text-green-500 hover:text-green-700 p-1 rounded-full hover:bg-green-50 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleBanUser(user.id)}
                          className={`${user.status === 'Banned' ? 'text-gray-500' : 'text-orange-500'} hover:text-orange-700 p-1 rounded-full hover:bg-orange-50 transition-colors`}
                          title={user.status === 'Banned' ? "Unban" : "Ban"}
                        >
                          {user.status === 'Banned' ? <CheckCircle className="w-4 h-4" /> : <Ban className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detail/Preview Panel Placeholder - often useful in admin dashboards */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
          <h3 className="font-bold text-gray-800 mb-4">User Details</h3>
          <div className="text-center text-gray-500 py-10">
            Select a user to view details
          </div>
        </div>
      </div>
    </motion.div>
  );
}