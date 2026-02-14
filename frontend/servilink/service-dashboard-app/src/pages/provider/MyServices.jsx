import React, { useState } from 'react';
import { Edit2 } from 'lucide-react';

const MyServices = () => {
    const [services, setServices] = useState([
        { id: 1, name: 'House Cleaning', price: '$25/hr', status: 'Active' },
        { id: 2, name: 'Deep Cleaning', price: '$40/hr', status: 'Active' },
        { id: 3, name: 'Laundry Service', price: '$15/load', status: 'Inactive' },
    ]);

    const [formData, setFormData] = useState({ name: '', price: '' });
    const [editingId, setEditingId] = useState(null);

    const toggleStatus = (id) => {
        setServices(prev =>
            prev.map(service =>
                service.id === id
                    ? { ...service, status: service.status === 'Active' ? 'Inactive' : 'Active' }
                    : service
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.price) return;

        if (editingId) {
            // EDIT
            setServices(prev =>
                prev.map(service =>
                    service.id === editingId
                        ? { ...service, ...formData }
                        : service
                )
            );
        } else {
            // ADD
            setServices(prev => [
                ...prev,
                {
                    id: Date.now(),
                    name: formData.name,
                    price: formData.price,
                    status: 'Inactive'
                }
            ]);
        }

        setFormData({ name: '', price: '' });
        setEditingId(null);
    };

    const startEdit = (service) => {
        setEditingId(service.id);
        setFormData({ name: service.name, price: service.price });
    };

    return (
        <div>
            {/* HEADER */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My Services</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Manage the services you offer to customers.
                    </p>
                </div>
            </div>

            {/* ADD / EDIT FORM */}
            <form onSubmit={handleSubmit} className="card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>
                    {editingId ? 'Edit Service' : 'Add New Service'}
                </h3>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <input
                        type="text"
                        placeholder="Service Name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Price"
                        value={formData.price}
                        onChange={e => setFormData({ ...formData, price: e.target.value })}
                    />
                    <button className="btn btn-accept" type="submit">
                        {editingId ? 'Update' : 'Add'}
                    </button>
                </div>
            </form>

            {/* SERVICES LIST */}
            <div className="stats-grid">
                {services.map(service => (
                    <div key={service.id} className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span
                                className="status-badge"
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: service.status === 'Active'
                                        ? 'var(--provider-secondary)'
                                        : '#E5E7EB'
                                }}
                                onClick={() => toggleStatus(service.id)}
                            >
                                {service.status}
                            </span>

                            <button
                                onClick={() => startEdit(service)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                <Edit2 size={16} />
                            </button>
                        </div>

                        <h3>{service.name}</h3>
                        <p style={{ fontWeight: '600' }}>{service.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyServices;
