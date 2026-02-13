import React, { useState } from 'react';

const BookingRequests = () => {
    const [requests, setRequests] = useState([
        { id: 'REQ001', customer: 'Ahmed Hassan', service: 'House Cleaning', phone: '63 4567890', date: 'Feb 9, 2026 at 10:00 AM', status: 'New' },
        { id: 'REQ002', customer: 'Fatima Ali', service: 'Plumbing Repair', phone: '63 4567891', date: 'Feb 10, 2026 at 2:00 PM', status: 'New' },
        { id: 'REQ003', customer: 'Omar Abdi', service: 'Electrical Work', phone: '63 4567892', date: 'Feb 8, 2026 at 9:00 AM', status: 'Accepted' },
        { id: 'REQ004', customer: 'Amina Jama', service: 'AC Servicing', phone: '63 4567893', date: 'Feb 11, 2026 at 3:00 PM', status: 'New' },
        { id: 'REQ005', customer: 'Khadra Yusuf', service: 'Painting', phone: '63 4567894', date: 'Feb 12, 2026 at 9:00 AM', status: 'New' },
        { id: 'REQ006', customer: 'Liban Farah', service: 'Carpentry', phone: '63 4567895', date: 'Feb 13, 2026 at 11:00 AM', status: 'Rejected' },
    ]);

    const handleAccept = (id) => {
        setRequests(prev =>
            prev.map(req =>
                req.id === id ? { ...req, status: 'Accepted' } : req
            )
        );
    };

    const handleReject = (id) => {
        setRequests(prev =>
            prev.map(req =>
                req.id === id ? { ...req, status: 'Rejected' } : req
            )
        );
    };

    return (
        <div className="card">
            <h2>Booking Requests</h2>

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
                {requests.map((req) => (
                    <tr key={req.id}>
                        <td>{req.id}</td>
                        <td>{req.customer}</td>
                        <td>{req.service}</td>
                        <td>{req.phone}</td>
                        <td>{req.date}</td>
                        <td>{req.status}</td>
                        <td>
                            {req.status === 'New' ? (
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button
                                        className="btn btn-accept"
                                        onClick={() => handleAccept(req.id)}
                                    >
                                        Accept
                                    </button>

                                    <button
                                        className="btn btn-reject"
                                        onClick={() => handleReject(req.id)}
                                    >
                                        Reject
                                    </button>
                                </div>
                            ) : (
                                '—'
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingRequests;
