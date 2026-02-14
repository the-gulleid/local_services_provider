import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const appUrls = {
        customer: 'http://localhost:5175/user',
        provider: 'http://localhost:5175/provider',
        admin: 'http://localhost:5174'
    };

    const handleLogin = (e) => {
        e.preventDefault();

        let role = 'customer';
        let targetUrl = appUrls.customer;

        if (email.includes('provider')) {
            role = 'provider';
            targetUrl = appUrls.provider;
        } else if (email.includes('admin')) {
            role = 'admin';
            targetUrl = appUrls.admin;
        }

        login(email, password, role);

        window.location.href = targetUrl;
    };

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="hidden lg:block w-1/2 p-12">
                <div className="h-full rounded-3xl overflow-hidden relative">
                    <img
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1470"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Login background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-12 text-white">
                        <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
                        <p className="text-lg text-gray-200">Connect with local professionals instantly.</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full max-w-md space-y-8"
                >
                    <div className="text-center">
                        <img src={logo} alt="ServiLink" className="mx-auto h-12 w-auto mb-4" style={{ borderRadius: '8px' }} />
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Sign in to your account</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Or <Link to="/register" className="font-medium text-primary hover:text-primary-dark">create a new account</Link>
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <input id="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                                <label htmlFor="remember-me" className="ml-2 block text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" className="font-medium text-primary hover:text-primary-dark">Forgot password?</a>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors col-span-2"
                            >
                                Sign in
                            </button>
                            <button
                                type="button"
                                onClick={() => { login('admin@example.com', 'password', 'admin'); window.location.href = appUrls.admin; }}
                                className="w-full py-2 px-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
                            >
                                Demo Admin
                            </button>
                            <button
                                type="button"
                                onClick={() => { login('provider@example.com', 'password', 'provider'); window.location.href = appUrls.provider; }}
                                className="w-full py-2 px-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
                            >
                                Demo Provider
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
