import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
    BarChart,
    Calendar,
    Briefcase,
    CheckCircle,
    Star,
    User,
    LogOut
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

const ProviderLayout = () => {
    const location = useLocation();

    const sidebarItems = [
        { label: 'Dashboard', icon: BarChart, path: '/provider' },
        { label: 'Booking Requests', icon: Calendar, path: '/provider/requests' },
        { label: 'My Services', icon: Briefcase, path: '/provider/services' },
        { label: 'Active Jobs', icon: CheckCircle, path: '/provider/jobs' },
        { label: 'Reviews', icon: Star, path: '/provider/reviews' },
        { label: 'Profile', icon: User, path: '/provider/profile' },
        { label: 'Logout', icon: LogOut, path: '/' },
    ];

    // Helper to determine active item based on current path
    const getActiveItem = () => {
        const currentPath = location.pathname;
        const active = sidebarItems.find(item => item.path === currentPath);
        return active ? active.label : 'Dashboard';
    };

    return (
        <div className="dashboard-container">
            <Sidebar
                title="Provider Portal"
                items={sidebarItems}
                activeItem={getActiveItem()}
                theme="provider"
            />
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
};

export default ProviderLayout;
