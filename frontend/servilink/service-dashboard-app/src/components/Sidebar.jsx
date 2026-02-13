import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ title, items, activeItem, theme = 'provider' }) => {
    const navigate = useNavigate();
    const themeBg = theme === 'provider' ? 'var(--provider-secondary)' : 'var(--user-secondary)';
    const themeColor = theme === 'provider' ? 'var(--provider-text)' : 'var(--user-text)';

    return (
        <div className="sidebar" style={{
            width: '260px',
            backgroundColor: 'white',
            borderRight: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            height: '100vh',
            zIndex: 10
        }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{title}</h2>
            </div>
            <nav style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {items.map((item, index) => {
                    const isActive = activeItem === item.label;
                    const Icon = item.icon;

                    return (
                        <button
                            key={index}
                            onClick={() => item.path && navigate(item.path)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.75rem 1rem',
                                border: 'none',
                                backgroundColor: isActive ? themeBg : 'transparent',
                                color: isActive ? themeColor : 'var(--text-secondary)',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                textAlign: 'left',
                                width: '100%',
                                fontWeight: isActive ? 600 : 400,
                                transition: 'all 0.2s',
                                marginTop: item.label === 'Logout' ? 'auto' : '0'
                            }}
                        >
                            {Icon && <Icon size={20} />}
                            {item.label}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default Sidebar;
