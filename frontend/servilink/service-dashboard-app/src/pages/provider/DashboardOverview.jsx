import React from 'react';
import { Calendar, CheckCircle, DollarSign, Star } from 'lucide-react';
import StatsCard from '../../components/StatsCard';

const ProviderOverview = () => {
    return (
        <div>
            {/* Welcome Banner */}
            <div className="banner" style={{ backgroundColor: 'var(--provider-primary)' }}>
                <h1>Welcome back, dear user!</h1>
                <p style={{ opacity: 0.9 }}>Here is an overview of your current performance.</p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                <StatsCard title="Pending Requests" value="8" icon={Calendar} bg="var(--status-new-bg)" color="var(--status-new-text)" />
                <StatsCard title="Active Jobs" value="5" icon={CheckCircle} bg="var(--status-completed-bg)" color="var(--status-completed-text)" />
                <StatsCard title="Total Earnings" value="$2,450" icon={DollarSign} bg="#FEF3C7" color="#D97706" />
                <StatsCard title="Rating" value="4.8" icon={Star} bg="#FFEDD5" color="#EA580C" />
            </div>
        </div>
    );
};

export default ProviderOverview;
