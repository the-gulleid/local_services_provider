import React from 'react';


const StatsCard = ({ title, value, icon: Icon, theme = 'provider' }) => {
  const iconColor = theme === 'provider' ? 'var(--provider-primary)' : 'var(--user-primary)';
  const iconBg = theme === 'provider' ? 'var(--provider-secondary)' : 'var(--user-secondary)';

  return (
    <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</p>
      </div>
      <div style={{
        backgroundColor: iconBg,
        padding: '0.75rem',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Icon size={24} color={iconColor} />
      </div>
    </div>
  );
};

export default StatsCard;
