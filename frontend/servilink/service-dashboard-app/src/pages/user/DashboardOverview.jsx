import React from 'react';
import { CalendarDays, CheckCircle, Clock } from 'lucide-react';
import StatsCard from '../../components/StatsCard';

const UserOverview = () => {
    const bookings = [
        { id: 'BK001', service: 'House Cleaning', provider: 'Gulleid Mohamed Farah', phone: '4867444', date: 'Feb 5, 2026', status: 'Completed' },
        { id: 'BK002', service: 'Plumbing Repair', provider: 'Khalid Abdirahman Sulub', phone: '0633624553', date: 'Feb 8, 2026', status: 'Pending' },
        { id: 'BK003', service: 'Lawn Maintenance', provider: 'Mohamed Abdiqadir Ali', phone: '63 4709734', date: 'Feb 10, 2026', status: 'Confirmed' },
        { id: 'BK004', service: 'Electrical Work', provider: 'Abdirashiid Salebaan Jama', phone: '63 4549075', date: 'Feb 4, 2026', status: 'Completed' },
        { id: 'BK005', service: 'AC Servicing', provider: 'Eid Abdirahman Yousuf', phone: '252 63 4706890', date: 'Feb 12, 2026', status: 'Pending' },
        { id: 'BK006', service: 'Painting Service', provider: 'Abdiasiis Ahmed Farah', phone: '4272647', date: 'Feb 1, 2026', status: 'Completed' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return { bg: 'var(--status-completed-bg)', text: 'var(--status-completed-text)' };
            case 'Pending': return { bg: 'var(--status-pending-bg)', text: 'var(--status-pending-text)' };
            case 'Confirmed': return { bg: 'var(--status-new-bg)', text: 'var(--status-new-text)' };
            default: return { bg: '#F3F4F6', text: '#374151' };
        }
    };

    return (
        <div>
            {/* Welcome Banner */}
            <div className="banner" style={{ backgroundColor: 'var(--user-primary)' }}>
                <h1>Welcome back, dear User!</h1>
                <p style={{ opacity: 0.9 }}>Here's what's happening with your bookings today.</p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                <StatsCard title="Total Bookings" value="24" icon={CalendarDays} bg="var(--status-new-bg)" color="var(--user-primary)" theme="user" />
                <StatsCard title="Completed" value="18" icon={CheckCircle} bg="var(--status-completed-bg)" color="var(--status-completed-text)" theme="user" />
                <StatsCard title="Pending" value="6" icon={Clock} bg="var(--status-pending-bg)" color="var(--status-pending-text)" theme="user" />
            </div>

            {/* Recent Bookings Table */}
            <div className="card">
                <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Recent Bookings</h2>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Service</th>
                                <th>Provider</th>
                                <th>Phone Number</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((bk, idx) => {
                                const statusStyle = getStatusColor(bk.status);
                                return (
                                    <tr key={idx}>
                                        <td style={{ fontWeight: '500' }}>{bk.id}</td>
                                        <td>{bk.service}</td>
                                        <td>{bk.provider}</td>
                                        <td>{bk.phone}</td>
                                        <td>{bk.date}</td>
                                        <td>
                                            <span className="status-badge" style={{ backgroundColor: statusStyle.bg, color: statusStyle.text }}>
                                                {bk.status}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserOverview;
