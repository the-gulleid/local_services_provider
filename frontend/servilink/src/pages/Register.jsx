import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, Briefcase } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'customer' });
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        register(formData);
        const targetUrl = formData.role === 'provider' ? 'http://localhost:5175/provider' : 'http://localhost:5175/user';
        window.location.href = targetUrl;
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 dark:bg-gray-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-12 w-auto"
                    src={logo}
                    alt="ServiLink"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                    Create your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-primary hover:text-primary-dark">
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={handleRegister}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Full Name
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                I am a...
                            </label>
                            <div className="mt-1 grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, role: 'customer' })}
                                    className={`flex justify-center items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${formData.role === 'customer' ? 'bg-primary text-white border-transparent' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                                >
                                    Customer
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, role: 'provider' })}
                                    className={`flex justify-center items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${formData.role === 'provider' ? 'bg-primary text-white border-transparent' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                                >
                                    Service Provider
                                </button>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
