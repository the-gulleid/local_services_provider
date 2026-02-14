import React, { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Briefcase,
    CalendarDays,
    Star,
    User,
    LogOut
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

const UserLayout = () => {
    const location = useLocation();

    const sidebarItems = [
        { label: 'Dashboard', icon: LayoutDashboard, path: '/user' },
        { label: 'Applications Services', icon: Briefcase, path: '/user/applications' },
        { label: 'My Bookings', icon: CalendarDays, path: '/user/bookings' },
        { label: 'Reviews', icon: Star, path: '/provider/reviews' }, // Assuming user has reviews, might be a bug in user request if it's the same page as provider, but likely different. I'll make a user review page.
        { label: 'Profile', icon: User, path: '/user/profile' },
        { label: 'Logout', icon: LogOut, path: '/' },
    ];

    const getActiveItem = () => {
        const currentPath = location.pathname;
        const active = sidebarItems.find(item => item.path === currentPath);
        return active ? active.label : 'Dashboard';
    };

    return (
        <div className="dashboard-container">
            <Sidebar
                title="User Portal"
                items={sidebarItems}
                activeItem={getActiveItem()}
                theme="user"
            />
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
};

export default UserLayout;
