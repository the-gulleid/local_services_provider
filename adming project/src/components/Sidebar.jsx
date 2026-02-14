import { LayoutGrid, Users, UserCog, Calendar, List, BarChart3, LogOut } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

const sidebarItems = [
    { icon: LayoutGrid, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: UserCog, label: 'Providers', path: '/providers' },
    { icon: Calendar, label: 'Bookings', path: '/bookings' },
    { icon: List, label: 'Services', path: '/services' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
];

export default function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <aside className="hidden md:flex flex-col w-64 bg-card border-r min-h-screen sticky top-0">
            <div className="flex items-center h-16 border-b px-6">
                <h1 className="text-xl font-bold text-gray-800">
                    Admin Panel
                </h1>
            </div>

            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {sidebarItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group text-sm font-medium",
                                isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            )
                        }
                    >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}
