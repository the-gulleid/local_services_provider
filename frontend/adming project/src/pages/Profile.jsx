import { User, Mail, Shield, Save } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Profile() {
    const [formData, setFormData] = useState({
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'Administrator',
        bio: 'Super admin managing the ServiLink platform.'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Profile updated successfully!");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
        >
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Admin Profile</h2>
                <p className="text-gray-500">Manage your account settings and preferences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="md:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
                        <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-lg">
                            {formData.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{formData.name}</h3>
                        <p className="text-gray-500 mb-4">{formData.role}</p>
                        <div className="w-full pt-4 border-t border-gray-100 flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Mail className="w-4 h-4" /> {formData.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Shield className="w-4 h-4" /> {formData.role}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit Form */}
                <div className="md:col-span-2">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Edit Profile</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                                <textarea
                                    name="bio"
                                    rows="4"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                                ></textarea>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium"
                                >
                                    <Save className="w-4 h-4" /> Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
