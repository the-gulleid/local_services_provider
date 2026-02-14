import { Menu, ChevronDown } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export default function Header({ toggleSidebar }) {
    const location = useLocation();

    // Simple breadcrumb logic
    const getPageTitle = () => {
        switch (location.pathname) {
            case '/': return 'Dashboard';
            case '/users': return 'Users';
            case '/providers': return 'Providers';
            case '/bookings': return 'Bookings';
            case '/services': return 'Services';
            case '/analytics': return 'Analytics';
            default: return 'Dashboard';
        }
    };

    return (
        <header className="h-16 flex items-center justify-between px-4 md:px-6 bg-card border-b sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button
                    className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-full"
                    onClick={toggleSidebar}
                >
                    <Menu className="w-6 h-6" />
                </button>
                <h2 className="text-lg font-semibold text-gray-800">{getPageTitle()}</h2>
            </div>

            <div className="flex items-center gap-4">
                <Link to="/profile" className="flex items-center gap-3 pl-4 border-l hover:bg-gray-50 transition-colors p-2 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                        <span className="text-sm">AU</span>
                    </div>
                    <div className="hidden md:block text-sm text-right">
                        <p className="font-medium text-gray-900">Admin User</p>
                        <p className="text-xs text-gray-500">admin@example.com</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
                </Link>
            </div>
        </header>
    );
}
