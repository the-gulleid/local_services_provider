import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Settings,
    LogOut,
    Menu,
    X,
    Moon,
    Sun,
    Briefcase,
    Home
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
// Import a placeholder image if no auth context is ready yet
import defaultAvatar from '../assets/abdiaziz.jpeg'; // Using an existing asset as placeholder

const SidebarItem = ({ icon: Icon, label, to, isOpen }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link to={to} className="block mb-2">
            <motion.div
                className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 relative overflow-hidden group ${isActive
                    ? 'bg-primary/10 text-primary dark:text-primary-light'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
            >
                <Icon size={20} className={isActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors'} />
                {isOpen && (
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="font-medium whitespace-nowrap"
                    >
                        {label}
                    </motion.span>
                )}
                {isActive && (
                    <motion.div
                        layoutId="active-indicator"
                        className="absolute left-0 w-1 h-8 bg-primary rounded-r-full"
                    />
                )}
            </motion.div>
        </Link>
    );
};

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { theme, toggleTheme } = useTheme();

    // Mock User Data (Replace with AuthContext later)
    const user = {
        name: "Abdiaziz Ahmed",
        role: "Professional Provider",
        rating: 4.8,
        image: defaultAvatar
    };

    const sidebarVariants = {
        open: { width: 280, transition: { type: "spring", stiffness: 300, damping: 30 } },
        closed: { width: 80, transition: { type: "spring", stiffness: 300, damping: 30 } }
    };

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 overflow-hidden font-sans">
            {/* Sidebar */}
            <motion.aside
                initial="open"
                animate={isSidebarOpen ? "open" : "closed"}
                variants={sidebarVariants}
                className="bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-xl z-20 flex flex-col relative h-full"
            >
                {/* Toggle Button */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="absolute -right-3 top-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-1.5 shadow-md hover:scale-110 transition-transform z-30 text-gray-500 dark:text-gray-400"
                >
                    {isSidebarOpen ? <X size={14} /> : <Menu size={14} />}
                </button>

                {/* Profile Widget (Top) */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                    <motion.div
                        className={`flex items-center gap-3 ${!isSidebarOpen && 'justify-center'}`}
                        layout
                    >
                        <div className="relative shrink-0">
                            <motion.img
                                src={user.image}
                                alt="Profile"
                                className="w-12 h-12 rounded-full object-cover border-2 border-primary shadow-sm"
                                layoutId="profile-image"
                            />
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                        </div>

                        {isSidebarOpen && (
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                className="flex flex-col overflow-hidden"
                            >
                                <span className="font-bold text-gray-800 dark:text-white truncate text-sm">{user.name}</span>
                                <span className="text-xs text-primary font-medium">{user.role}</span>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="text-xs text-yellow-500">★</span>
                                    <span className="text-[10px] text-gray-500 dark:text-gray-400">{user.rating} (120 reviews)</span>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col">
                    <SidebarItem icon={Home} label="Overview" to="/provider" isOpen={isSidebarOpen} />
                    <SidebarItem icon={Briefcase} label="My Services" to="/services" isOpen={isSidebarOpen} />
                    <SidebarItem icon={User} label="Profile" to="/profile" isOpen={isSidebarOpen} />
                    <SidebarItem icon={Settings} label="Settings" to="/settings" isOpen={isSidebarOpen} />
                </div>

                {/* Bottom Section */}
                <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
                    <div
                        onClick={toggleTheme}
                        className={`cursor-pointer w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 mb-2 ${isSidebarOpen ? 'bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800' : 'justify-center hover:bg-gray-200 dark:hover:bg-gray-800'
                            }`}
                    >
                        <div className="relative w-6 h-6 flex items-center justify-center">
                            {theme === 'dark' ? (
                                <Moon size={20} className="text-blue-400" />
                            ) : (
                                <Sun size={20} className="text-yellow-500" />
                            )}
                        </div>
                        {isSidebarOpen && <span className="font-medium text-sm text-gray-700 dark:text-gray-200">Switch Theme</span>}
                    </div>

                    <SidebarItem icon={LogOut} label="Logout" to="/logout" isOpen={isSidebarOpen} />
                </div>
            </motion.aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto relative h-full bg-gray-50 dark:bg-gray-950">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

                <div className="p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Outlet />
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
