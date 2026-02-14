import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useData } from '../context/DataContext';
import BookingModal from '../components/BookingModal';

const ProviderProfile = () => {
    const { id } = useParams();
    const { providers } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Parse ID correctly
    const providerId = parseInt(id);
    const provider = providers.find(p => p.id === providerId);

    if (!provider) {
        return <div className="text-center py-20">Provider not found</div>;
    }

    // Helper function to calculate emergency price
    const getEmergencyPrice = (priceStr) => {
        const numericPrice = parseInt(priceStr.replace(/\D/g, ''));
        return '$' + (numericPrice * 1.5);
    };

    return (
        <div className="page-content active" id="provider-profile-page" style={{ paddingTop: 0 }}>
            <section className="profile-hero" style={{
                background: `linear-gradient(135deg, rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.85)), url('https://images.unsplash.com/photo-1542736671-818e56460c38?auto=format&fit=crop&w=1200&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '450px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'var(--white)',
                position: 'relative',
                marginTop: 0
            }}></section>

            <div className="profile-content" style={{
                maxWidth: '1000px',
                margin: '-100px auto 0',
                background: 'var(--white)',
                borderRadius: '30px',
                boxShadow: 'var(--shadow-lg)',
                padding: '60px',
                position: 'relative',
                zIndex: 10
            }}>
                <div className="profile-header" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '40px',
                    marginBottom: '40px',
                    flexWrap: 'wrap'
                }}>
                    <div className="profile-avatar" style={{
                        width: '180px',
                        height: '180px',
                        background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--white)',
                        fontSize: '72px',
                        border: '8px solid var(--white)',
                        boxShadow: '0 10px 35px rgba(0,0,0,0.3)',
                        overflow: 'hidden'
                    }}>
                        <img src={provider.image} alt={provider.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="profile-info">
                        <h1 style={{ fontSize: '42px', color: 'var(--navy)', marginBottom: '10px' }}>{provider.name}</h1>
                        <div className="rating" style={{ fontSize: '28px', color: '#FFD700', margin: '8px 0' }}>
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className={`fas fa-star${i < Math.round(provider.rating) ? '' : '-half-alt'}`} style={{ opacity: i < provider.rating ? 1 : 0.3 }}></i>
                            ))}
                            <span style={{ marginLeft: '8px', fontSize: '24px' }}>{provider.rating}</span>
                        </div>
                        <div className="service-type" style={{
                            display: 'inline-block',
                            background: 'rgba(40, 167, 69, 0.1)',
                            color: 'var(--green)',
                            padding: '6px 20px',
                            borderRadius: '30px',
                            fontWeight: 700,
                            margin: '10px 0',
                            fontSize: '18px'
                        }}>
                            <i className="fas fa-tools"></i> {provider.service}
                        </div>
                        <div className="profile-stats" style={{ display: 'flex', gap: '30px', marginTop: '20px', flexWrap: 'wrap' }}>
                            <div className="stat-box" style={{ textAlign: 'center', minWidth: '120px' }}>
                                <div className="number" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--navy)' }}>10+</div>
                                <div className="label" style={{ color: 'var(--text-light)', fontSize: '15px' }}>Years Experience</div>
                            </div>
                            <div className="stat-box" style={{ textAlign: 'center', minWidth: '120px' }}>
                                <div className="number" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--navy)' }}>{provider.reviews}+</div>
                                <div className="label" style={{ color: 'var(--text-light)', fontSize: '15px' }}>Completed Jobs</div>
                            </div>
                            <div className="stat-box" style={{ textAlign: 'center', minWidth: '120px' }}>
                                <div className="number" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--navy)' }}>{provider.price}</div>
                                <div className="label" style={{ color: 'var(--text-light)', fontSize: '15px' }}>Starting Rate</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section" style={{ margin: '45px 0', paddingTop: '30px', borderTop: '2px solid #f0f2f5' }}>
                    <h2 style={{ fontSize: '36px', color: 'var(--navy)', marginBottom: '25px', position: 'relative', paddingBottom: '15px' }}>
                        Services Offered
                        <span style={{ position: 'absolute', bottom: 0, left: 0, width: '70px', height: '4px', background: 'var(--green-gradient)', borderRadius: '4px' }}></span>
                    </h2>
                    <div className="services-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
                        {[
                            { name: 'Standard Service', price: provider.price },
                            { name: 'Emergency Service', price: getEmergencyPrice(provider.price) },
                            { name: 'Consultation', price: 'Free' }
                        ].map((s, i) => (
                            <div key={i} className="service-item" style={{
                                background: '#f8f9fa',
                                padding: '20px',
                                borderRadius: '16px',
                                textAlign: 'center',
                                border: '2px solid transparent',
                                transition: 'var(--transition-quick)'
                            }}>
                                <i className="fas fa-check-circle" style={{ fontSize: '32px', color: 'var(--green)', marginBottom: '12px' }}></i>
                                <h4 style={{ fontSize: '20px', color: 'var(--navy)', marginBottom: '8px' }}>{s.name}</h4>
                                <div className="price" style={{ fontWeight: 700, color: 'var(--green)', fontSize: '18px' }}>{s.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="profile-section" style={{ margin: '45px 0', paddingTop: '30px', borderTop: '2px solid #f0f2f5' }}>
                    <h2 style={{ fontSize: '36px', color: 'var(--navy)', marginBottom: '25px', position: 'relative', paddingBottom: '15px' }}>
                        About Me
                        <span style={{ position: 'absolute', bottom: 0, left: 0, width: '70px', height: '4px', background: 'var(--green-gradient)', borderRadius: '4px' }}></span>
                    </h2>
                    <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--text-light)' }}>
                        {provider.description}
                    </p>
                    <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--text-light)', marginTop: '15px' }}>
                        All our work comes with a 100% satisfaction guarantee and a 1-year warranty on parts and labor. We use only high-quality materials and the latest techniques to ensure long-lasting results.
                    </p>
                </div>

                <div className="profile-section" style={{ margin: '45px 0', paddingTop: '30px', borderTop: '2px solid #f0f2f5' }}>
                    <h2 style={{ fontSize: '36px', color: 'var(--navy)', marginBottom: '25px', position: 'relative', paddingBottom: '15px' }}>
                        Customer Reviews
                        <span style={{ position: 'absolute', bottom: 0, left: 0, width: '70px', height: '4px', background: 'var(--green-gradient)', borderRadius: '4px' }}></span>
                    </h2>
                    <div className="reviews-section">
                        {[
                            { name: 'Sahra Warsame', date: 'October 15, 2026', rating: 5, text: 'Responded immediately to our emergency! Professional, efficient, and fixed the problem in no time.' },
                            { name: 'Mohamoud', date: 'September 28, 2026', rating: 5, text: 'Excellent service from start to finish. Explained everything clearly. The work was clean and he left the area spotless.' }
                        ].map((review, i) => (
                            <div key={i} className="review" style={{
                                background: '#f8f9fa',
                                padding: '25px',
                                borderRadius: '16px',
                                marginBottom: '20px',
                                borderLeft: '4px solid var(--green)'
                            }}>
                                <div className="review-header" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                    <div className="reviewer-avatar" style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'var(--navy)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        flexShrink: 0
                                    }}>{review.name.charAt(0)}</div>
                                    <div className="reviewer-info">
                                        <h4 style={{ fontSize: '19px', color: 'var(--navy)', marginBottom: '3px' }}>{review.name}</h4>
                                        <div className="date" style={{ color: 'var(--text-light)', fontSize: '14px' }}>{review.date}</div>
                                    </div>
                                </div>
                                <div className="review-rating" style={{ color: '#FFD700', fontSize: '20px', margin: '8px 0' }}>
                                    {[...Array(5)].map((_, r) => (
                                        <i key={r} className="fas fa-star" style={{ opacity: r < review.rating ? 1 : 0.3 }}></i>
                                    ))}
                                </div>
                                <p className="review-content" style={{ color: 'var(--text-light)', lineHeight: 1.7, fontSize: '16px' }}>
                                    {review.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="booking-section" style={{
                    background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
                    color: 'white',
                    padding: '45px',
                    borderRadius: '24px',
                    textAlign: 'center',
                    marginTop: '30px'
                }}>
                    <h3 style={{ fontSize: '32px', marginBottom: '20px', color: 'white' }}>Ready to Book?</h3>
                    <p style={{ fontSize: '19px', marginBottom: '30px', opacity: 0.9, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Get in touch today to schedule your service or request a free estimate. Available 24/7 for emergency repairs!
                    </p>
                    <button
                        className="btn btn-primary"
                        style={{ padding: '16px 45px', fontSize: '20px', marginTop: '15px' }}
                        onClick={() => setIsModalOpen(true)}
                    >
                        <i className="fas fa-calendar-check"></i> BOOK NOW
                    </button>
                </div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                provider={provider}
            />
        </div>
    );
};

export default ProviderProfile;
