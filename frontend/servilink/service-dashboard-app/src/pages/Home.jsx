import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Briefcase } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            backgroundColor: '#F3F4F6'
        }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1F2937' }}>Service Dashboard Portal</h1>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <button
                    onClick={() => navigate('/provider')}
                    className="card"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        cursor: 'pointer',
                        padding: '3rem',
                        width: '200px',
                        border: '2px solid transparent',
                        transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--provider-primary)'}
                    onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}
                >
                    <div style={{
                        padding: '1rem',
                        backgroundColor: 'var(--provider-secondary)',
                        borderRadius: '50%',
                        color: 'var(--provider-primary)'
                    }}>
                        <Briefcase size={48} />
                    </div>
                    <span style={{ fontWeight: '600', fontSize: '1.25rem' }}>Provider</span>
                </button>

                <button
                    onClick={() => navigate('/user')}
                    className="card"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        cursor: 'pointer',
                        padding: '3rem',
                        width: '200px',
                        border: '2px solid transparent',
                        transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--user-primary)'}
                    onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}
                >
                    <div style={{
                        padding: '1rem',
                        backgroundColor: 'var(--user-secondary)',
                        borderRadius: '50%',
                        color: 'var(--user-primary)'
                    }}>
                        <User size={48} />
                    </div>
                    <span style={{ fontWeight: '600', fontSize: '1.25rem' }}>User</span>
                </button>
            </div>
        </div>
    );
};

export default Home;
