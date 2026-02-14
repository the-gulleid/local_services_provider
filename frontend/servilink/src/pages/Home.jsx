import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import BookingModal from '../components/BookingModal';

const Home = () => {
    const { services, providers } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState(null);

    const handleBookClick = (provider) => {
        setSelectedProvider(provider);
        setIsModalOpen(true);
    };

    // Get top 4 services
    const topServices = services.slice(0, 4);
    // Get top 3 providers
    const topProviders = providers.slice(0, 3);

    return (
        <div>
            {/* Hero Section */}
            <section className="hero" style={{
                background: `linear-gradient(135deg, rgba(10, 25, 47, 0.92), rgba(10, 25, 47, 0.88)), url('https://images.unsplash.com/photo-1581578731548?auto=format&fit=crop&w=1920&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 30%',
                backgroundAttachment: 'fixed',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'var(--white)',
                padding: '0 20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="hero-content" style={{ maxWidth: '850px', position: 'relative', zIndex: 2, animation: 'fadeInUp 1s ease' }}>
                    <div className="hero-badge" style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        display: 'inline-block',
                        padding: '8px 24px',
                        borderRadius: '30px',
                        marginBottom: '25px',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: '16px',
                        letterSpacing: '1px',
                        animation: 'pulseBadge 3s ease-in-out infinite'
                    }}>
                        <i className="fas fa-star"></i> TRUSTED BY 100+ CUSTOMERS
                    </div>
                    <h1 style={{
                        fontSize: '62px',
                        marginBottom: '20px',
                        textShadow: '0 5px 20px rgba(0,0,0,0.4)',
                        background: 'linear-gradient(135deg, var(--white), #a8d8ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'textGlow 2s ease-in-out infinite',
                        lineHeight: 1.1
                    }}>FIND TRUSTED LOCAL SERVICES</h1>
                    <p style={{
                        fontSize: '22px',
                        marginBottom: '40px',
                        opacity: 0.95,
                        fontWeight: 300,
                        letterSpacing: '0.5px',
                        maxWidth: '750px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>Connect instantly with verified, top-rated professionals for any job, big or small. Quality guaranteed, every time.</p>
                    <div className="hero-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '45px' }}>
                        <Link to="/services" className="btn btn-primary btn-hero" style={{ padding: '18px 50px', fontSize: '19px', minWidth: '220px' }}>
                            <i className="fas fa-search"></i> BROWSE SERVICES
                        </Link>
                        <Link to="/register" className="btn btn-outline btn-hero" style={{ padding: '18px 50px', fontSize: '19px', minWidth: '220px' }}>
                            <i className="fas fa-user-plus"></i> REGISTER NOW
                        </Link>
                    </div>
                    <div className="stats-showcase" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '30px',
                        maxWidth: '850px',
                        margin: '0 auto',
                        padding: '30px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '30px',
                        animation: 'slideUp 1s ease 0.3s forwards',
                        opacity: 0,
                        transform: 'translateY(30px)'
                    }}>
                        <div className="stat-item">
                            <div className="stat-icon" style={{ fontSize: '42px', marginBottom: '12px', background: 'linear-gradient(135deg, var(--green), #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                <i className="fas fa-users"></i>
                            </div>
                            <span className="stat-number" style={{ fontSize: '46px', fontWeight: 900, background: 'linear-gradient(135deg, var(--white), #a8d8ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'block' }}>100+</span>
                            <div className="stat-label" style={{ fontSize: '16px', opacity: 0.9, fontWeight: 500 }}>Happy Customers</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon" style={{ fontSize: '42px', marginBottom: '12px', background: 'linear-gradient(135deg, var(--green), #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                <i className="fas fa-user-check"></i>
                            </div>
                            <span className="stat-number" style={{ fontSize: '46px', fontWeight: 900, background: 'linear-gradient(135deg, var(--white), #a8d8ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'block' }}>50+</span>
                            <div className="stat-label" style={{ fontSize: '16px', opacity: 0.9, fontWeight: 500 }}>Verified Experts</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon" style={{ fontSize: '42px', marginBottom: '12px', background: 'linear-gradient(135deg, var(--green), #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                <i className="fas fa-star"></i>
                            </div>
                            <span className="stat-number" style={{ fontSize: '46px', fontWeight: 900, background: 'linear-gradient(135deg, var(--white), #a8d8ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'block' }}>4.8★</span>
                            <div className="stat-label" style={{ fontSize: '16px', opacity: 0.9, fontWeight: 500 }}>Average Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Services Section */}
            <section className="section section-light" style={{ padding: '90px 0', background: 'var(--white)' }}>
                <div className="container">
                    <div className="section-title" style={{ textAlign: 'center', marginBottom: '70px', position: 'relative' }}>
                        <h2 style={{ fontSize: '48px', color: 'var(--navy)', display: 'inline-block', position: 'relative', paddingBottom: '20px' }}>POPULAR SERVICES</h2>
                        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '90px', height: '5px', background: 'var(--green-gradient)', borderRadius: '5px' }}></div>
                        <p style={{ color: 'var(--text-light)', maxWidth: '650px', margin: '20px auto 0', fontSize: '19px', fontWeight: 300, letterSpacing: '0.5px' }}>Explore our most sought-after professional services</p>
                    </div>
                    <div className="services-showcase" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '35px', marginTop: '35px' }}>
                        {topServices.map(service => (
                            <Link to="/services" key={service.id} className="service-card" style={{
                                background: 'var(--white)',
                                borderRadius: '24px',
                                padding: '45px 30px',
                                textAlign: 'center',
                                transition: 'var(--transition)',
                                boxShadow: 'var(--shadow-sm)',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                border: '2px solid transparent',
                                textDecoration: 'none',
                                display: 'block'
                            }}>
                                <div className="service-icon-box" style={{
                                    width: '100px',
                                    height: '100px',
                                    background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.08), rgba(40, 167, 69, 0.12))',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 25px',
                                    fontSize: '44px',
                                    color: 'var(--navy)',
                                    border: '3px solid var(--navy)',
                                    transition: 'var(--transition)',
                                    position: 'relative',
                                    zIndex: 2
                                }}>
                                    <i className={`fas fa-${service.name.toLowerCase() === 'plumbing' ? 'wrench' : service.name.toLowerCase() === 'electrical' ? 'bolt' : service.name.toLowerCase() === 'cleaning' ? 'broom' : service.name.toLowerCase() === 'painting' ? 'paint-roller' : 'tools'}`}></i>
                                </div>
                                <h3 style={{ fontSize: '28px', marginBottom: '12px', color: 'var(--navy)' }}>{service.name}</h3>
                                <p style={{ color: 'var(--text-light)', fontWeight: 700, fontSize: '22px', marginTop: '12px' }}>From $15/hr</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Providers Section */}
            <section className="providers-section" style={{ background: 'var(--white)', padding: '90px 0' }}>
                <div className="container">
                    <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
                        <h2 style={{ fontSize: '42px', color: 'var(--navy)', margin: 0 }}>TOP SERVICE PROVIDERS</h2>
                        <Link to="/services" className="view-all" style={{ color: 'var(--green)', textDecoration: 'none', fontWeight: 700, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            View All <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                    <div className="providers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '35px' }}>
                        {topProviders.map(provider => (
                            <div key={provider.id} className="provider-card" style={{
                                background: 'var(--white)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'var(--transition)',
                                border: '2px solid transparent',
                                position: 'relative'
                            }}>
                                <div className="provider-img" style={{
                                    width: '80%',
                                    height: '220px',
                                    background: 'linear-gradient(45deg, var(--navy), var(--navy-light))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--white)',
                                    fontSize: '64px',
                                    position: 'relative'
                                }}>
                                    <img src={provider.image} alt={provider.name} style={{ width: '100%', height: '100%', objectCover: 'cover' }} />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '15px',
                                        right: '15px',
                                        background: 'var(--green)',
                                        color: 'var(--white)',
                                        padding: '6px 15px',
                                        borderRadius: '30px',
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                                    }}>
                                        Verified <i className="fas fa-check-circle"></i>
                                    </div>
                                </div>
                                <div className="provider-content" style={{ padding: '28px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                                    <div className="rating" style={{ color: '#FFD700', fontSize: '20px', marginBottom: '10px', fontWeight: 700, letterSpacing: '1px' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className={`fas fa-star${i < Math.round(provider.rating) ? '' : '-half-alt'}`} style={{ opacity: i < provider.rating ? 1 : 0.3 }}></i>
                                        ))}
                                        <span style={{ marginLeft: '5px', color: 'var(--navy)' }}>{provider.rating}</span>
                                    </div>
                                    <h3 className="provider-name" style={{ fontSize: '26px', fontWeight: 800, color: 'var(--navy)', margin: '10px 0 8px' }}>{provider.name}</h3>
                                    <div className="provider-service" style={{ color: 'var(--navy-light)', fontWeight: 600, margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '17px' }}>
                                        <i className="fas fa-tools"></i> {provider.service}
                                    </div>
                                    <div className="provider-details" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', margin: '15px 0', textAlign: 'left', fontSize: '15px' }}>
                                        <div className="provider-detail" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)' }}>
                                            <i className="fas fa-clock" style={{ color: 'var(--green)' }}></i> 5+ Years
                                        </div>
                                        <div className="provider-detail" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)' }}>
                                            <i className="fas fa-check-circle" style={{ color: 'var(--green)' }}></i> {provider.reviews} Jobs
                                        </div>
                                    </div>
                                    <div className="provider-price" style={{ color: 'var(--green)', fontWeight: 800, fontSize: '22px', margin: '12px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                        <i className="fas fa-dollar-sign"></i> {provider.price}
                                    </div>
                                    <div className="provider-location" style={{ color: 'var(--text-light)', margin: '12px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '16px' }}>
                                        <i className="fas fa-map-marker-alt" style={{ color: 'var(--navy)' }}></i> {provider.location}
                                    </div>
                                    <div className="provider-buttons" style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
                                        <Link to={`/provider/${provider.id}`} className="btn btn-outline-navy" style={{ flex: 1, minWidth: '120px', padding: '12px', fontSize: '16px', fontWeight: 600, border: '2px solid var(--navy)', color: 'var(--navy)', textDecoration: 'none', display: 'inline-block' }}>View Profile</Link>
                                        <button
                                            className="btn btn-primary"
                                            style={{ flex: 1, minWidth: '120px' }}
                                            onClick={() => handleBookClick(provider)}
                                        >Book Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="section section-gradient" style={{ padding: '90px 0', background: 'linear-gradient(135deg, var(--off-white), #e3f2fd)' }}>
                <div className="container">
                    <div className="section-title" style={{ textAlign: 'center', marginBottom: '70px', position: 'relative' }}>
                        <h2 style={{ fontSize: '48px', color: 'var(--navy)', display: 'inline-block', position: 'relative', paddingBottom: '20px' }}>HOW IT WORKS</h2>
                        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '90px', height: '5px', background: 'var(--green-gradient)', borderRadius: '5px' }}></div>
                        <p style={{ color: 'var(--text-light)', maxWidth: '650px', margin: '20px auto 0', fontSize: '19px', fontWeight: 300, letterSpacing: '0.5px' }}>Simple, transparent, and hassle-free</p>
                    </div>
                    <div className="steps-container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
                        <div className="steps" style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', flexWrap: 'wrap', gap: '35px' }}>
                            {[
                                { num: 1, title: 'Search & Compare', desc: 'Browse verified providers, check ratings, and compare prices in seconds.' },
                                { num: 2, title: 'Book Instantly', desc: 'Choose your preferred professional and schedule service in minutes.' },
                                { num: 3, title: 'Enjoy & Review', desc: 'Receive quality service and share your experience to help others.' }
                            ].map(step => (
                                <div key={step.num} className="step" style={{ background: 'var(--white)', borderRadius: '24px', padding: '45px 30px', textAlign: 'center', minWidth: '260px', flex: 1, position: 'relative', zIndex: 2, boxShadow: 'var(--shadow-sm)', border: '3px solid transparent' }}>
                                    <div className="step-number" style={{ width: '75px', height: '75px', background: 'var(--green-gradient)', color: 'var(--white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', fontSize: '34px', fontWeight: 900, fontFamily: "'Poppins', sans-serif", border: '6px solid var(--white)', boxShadow: '0 8px 25px rgba(40, 167, 69, 0.4)' }}>{step.num}</div>
                                    <h3 style={{ fontSize: '26px', marginBottom: '18px', color: 'var(--navy)' }}>{step.title}</h3>
                                    <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: 1.8 }}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta" style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-dark))', color: 'var(--white)', textAlign: 'center', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
                <div className="cta-content" style={{ position: 'relative', zIndex: 1, maxWidth: '850px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '52px', marginBottom: '25px', background: 'linear-gradient(135deg, var(--white), #a8d8ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>READY TO TRANSFORM YOUR SPACE?</h2>
                    <p style={{ fontSize: '22px', maxWidth: '700px', margin: '0 auto 50px', opacity: 0.95, fontWeight: 300, letterSpacing: '0.5px' }}>Join thousands of satisfied customers who trust ServiLink for all their service needs. Quality professionals, transparent pricing, guaranteed satisfaction.</p>
                    <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '50px', flexWrap: 'wrap' }}>
                        <Link to="/register" className="btn btn-primary btn-cta" style={{ padding: '20px 60px', fontSize: '21px', minWidth: '240px' }}>
                            <i className="fas fa-magic"></i> GET STARTED FREE
                        </Link>
                        <Link to="/services" className="btn btn-outline btn-cta" style={{ padding: '20px 60px', fontSize: '21px', minWidth: '240px' }}>
                            <i className="fas fa-list"></i> BROWSE PROVIDERS
                        </Link>
                    </div>
                </div>
            </section>


            {
                selectedProvider && (
                    <BookingModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        provider={selectedProvider}
                    />
                )
            }
        </div >
    );
};

export default Home;
