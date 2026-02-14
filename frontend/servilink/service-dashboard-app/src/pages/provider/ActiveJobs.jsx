import React, { useState } from 'react';
import { Clock, MapPin, User, CheckCircle, FileText } from 'lucide-react';

const ActiveJobs = () => {
    const [jobs, setJobs] = useState([
        {
            id: 'JOB-2024-001',
            customer: 'khadara jama ',
            address: 'jigjiga yar',
            service: 'Deep Cleaning',
            description: 'Full house deep cleaning including kitchen, bathrooms, and living areas.',
            date: 'Feb 10, 2026',
            startTime: '10:00 AM',
            status: 'In Progress'
        },
        {
            id: 'JOB-2024-005',
            customer: 'ahmed cali cismaan ',
            address: '150 area dolodho',
            service: 'Window Washing',
            description: 'Clean all exterior and interior windows (10 windows total).',
            date: 'Feb 11, 2026',
            startTime: '02:00 PM',
            status: 'Scheduled'
        },
    ]);

    const markCompleted = (id) => {
        setJobs(prev =>
            prev.map(job =>
                job.id === id
                    ? { ...job, status: 'Completed' }
                    : job
            )
        );
    };

    return (
        <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Active Jobs
            </h1>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {jobs.map(job => (
                    <div key={job.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                        {/* HEADER */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid var(--border-color)',
                            paddingBottom: '1rem'
                        }}>
                            <div>
                                <span style={{ fontSize: '0.8rem', color: 'gray', fontFamily: 'monospace' }}>
                                    {job.id}
                                </span>
                                <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                                    {job.service}
                                </h2>
                            </div>

                            <span
                                className="status-badge"
                                style={{
                                    backgroundColor:
                                        job.status === 'In Progress'
                                            ? '#DBEAFE'
                                            : job.status === 'Scheduled'
                                                ? '#FEF3C7'
                                                : '#DCFCE7',
                                    color:
                                        job.status === 'In Progress'
                                            ? '#1E40AF'
                                            : job.status === 'Scheduled'
                                                ? '#92400E'
                                                : '#166534',
                                    padding: '0.4rem 0.8rem'
                                }}
                            >
                                {job.status}
                            </span>
                        </div>

                        {/* DETAILS */}
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <User size={16} />
                                <span>{job.customer}</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={16} />
                                <span>{job.date} at {job.startTime}</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <MapPin size={16} />
                                <span>{job.address}</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FileText size={16} />
                                <span>{job.description}</span>
                            </div>
                        </div>

                        {/* ACTION */}
                        {job.status !== 'Completed' && (
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                paddingTop: '1rem',
                                borderTop: '1px solid var(--border-color)'
                            }}>
                                <button
                                    className="btn btn-accept"
                                    onClick={() => markCompleted(job.id)}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    <CheckCircle size={16} />
                                    Mark as Completed
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActiveJobs;
