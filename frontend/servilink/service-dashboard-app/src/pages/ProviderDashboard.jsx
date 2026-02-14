import React from 'react';
import {
    BarChart,
    Calendar,
    Briefcase,
    Settings,
    User,
    Star,
    LogOut,
    CheckCircle,
    Clock,
    DollarSign
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

const ProviderDashboard = () => {
    const sidebarItems = [
        { label: 'Dashboard', icon: BarChart },
        { label: 'Booking Requests', icon: Calendar, active: true },
        { label: 'My Services', icon: Briefcase },
        { label: 'Active Jobs', icon: CheckCircle },
        { label: 'Reviews', icon: Star },
        { label: 'Profile', icon: User },
        { label: 'Logout', icon: LogOut, style: { color: 'red', marginTop: 'auto' } },
    ];

    const requests = [
        { id: 'REQ001', customer: 'Ahmed Hassan', service: 'House Cleaning', phone: '63 4567890', date: 'Feb 9, 2026 at 10:00 AM', status: 'New' },
        { id: 'REQ002', customer: 'Fatima Ali', service: 'Plumbing Repair', phone: '63 4567891', date: 'Feb 10, 2026 at 2:00 PM', status: 'New' },
        { id: 'REQ003', customer: 'Omar Abdi', service: 'Electrical Work', phone: '63 4567892', date: 'Feb 8, 2026 at 9:00 AM', status: 'Accepted' },
        { id: 'REQ004', customer: 'Amina Jama', service: 'AC Servicing', phone: '63 4567893', date: 'Feb 11, 2026 at 3:00 PM', status: 'New' },
    ];

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Provider Portal</h2>
                </div>
                <nav style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {sidebarItems.map((item, idx) => (
                        <button
                            key={idx}
                            className="btn"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                width: '100%',
                                justifyContent: 'flex-start',
                                backgroundColor: item.active ? 'var(--provider-secondary)' : 'transparent',
                                color: item.active ? 'var(--provider-text)' : 'var(--text-secondary)',
                                ...item.style
                            }}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Welcome Banner */}
                <div className="banner" style={{ backgroundColor: 'var(--provider-primary)' }}>
                    <h1>Welcome back, Gulleid!</h1>
                    <p style={{ opacity: 0.9 }}>You have new booking requests waiting for your response.</p>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                    <StatCard title="Pending Requests" value="8" icon={Calendar} bg="var(--status-new-bg)" color="var(--status-new-text)" />
                    <StatCard title="Active Jobs" value="5" icon={CheckCircle} bg="var(--status-completed-bg)" color="var(--status-completed-text)" />
                    <StatCard title="Total Earnings" value="2450" icon={DollarSign} bg="#FEF3C7" color="#D97706" />
                    <StatCard title="Rating" value="4.8" icon={Star} bg="#FFEDD5" color="#EA580C" />
                </div>

                {/* Requests Table */}
                <div className="card">
                    <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)', marginBottom: '1rem' }}>
                        <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Booking Requests</h2>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Request ID</th>
                                    <th>Customer</th>
                                    <th>Service</th>
                                    <th>Phone</th>
                                    <th>Date & Time</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((req, idx) => (
                                    <tr key={idx}>
                                        <td style={{ fontWeight: '500' }}>{req.id}</td>
                                        <td>{req.customer}</td>
                                        <td>{req.service}</td>
                                        <td>{req.phone}</td>
                                        <td>{req.date}</td>
                                        <td>
                                            <span className="status-badge" style={{
                                                backgroundColor: req.status === 'Accepted' ? 'var(--status-completed-bg)' : 'var(--status-new-bg)',
                                                color: req.status === 'Accepted' ? 'var(--status-completed-text)' : 'var(--status-new-text)'
                                            }}>
                                                {req.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                <button className="btn btn-accept">Accept</button>
                                                <button className="btn btn-reject">Reject</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Internal Stat Card
const StatCard = ({ title, value, icon: Icon, bg, color }) => (
    <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{title}</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</p>
        </div>
        <div style={{ backgroundColor: bg, color: color, padding: '0.75rem', borderRadius: '12px' }}>
            <Icon size={24} />
        </div>
    </div>
);

export default ProviderDashboard;
