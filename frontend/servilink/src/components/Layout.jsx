import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.jpg';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navigation */}
            <nav style={{
                background: 'var(--navy)',
                height: '85px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 5%',
                position: 'fixed',
                width: '100%',
                top: 0,
                zIndex: 1000,
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                backdropFilter: 'blur(10px)',
                animation: 'slideDown 0.6s ease'
            }}>
                <Link to="/" className="logo" style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '32px',
                    fontWeight: 900,
                    color: 'var(--white)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    letterSpacing: '-1px'
                }}>
                    <img src={logo} alt="ServiLink" style={{ height: '50px', borderRadius: '8px' }} />
                    ServiLink
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{ display: 'none' }} // Hidden by default, shown via CSS media query
                >
                    <div className="hamburger"></div>
                </button>

                <div className="nav-links hidden md:flex" style={{ gap: '45px' }}>
                    <Link to="/" className={isActive('/')}>
                        <i className="fas fa-home"></i> Home
                    </Link>
                    <Link to="/services" className={isActive('/services')}>
                        <i className="fas fa-concierge-bell"></i> Services
                    </Link>
                    <Link to="/about" className={isActive('/about')}>
                        <i className="fas fa-users"></i> About
                    </Link>
                </div>

                <div className="nav-buttons hidden md:flex">
                    <Link to="/login" className="btn btn-outline" style={{ padding: '10px 24px', fontSize: '16px' }}>
                        <i className="fas fa-sign-in-alt"></i> Login
                    </Link>
                    <Link to="/register" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '16px' }}>
                        <i className="fas fa-user-plus"></i> Register
                    </Link>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`} style={{
                display: isMenuOpen ? 'flex' : 'none',
                position: 'fixed',
                top: '85px',
                left: 0,
                width: '100%',
                background: 'var(--navy)',
                flexDirection: 'column',
                padding: '20px 0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                zIndex: 999,
                animation: 'slideDown 0.4s ease'
            }}>
                <Link to="/" onClick={() => setIsMenuOpen(false)}><i className="fas fa-home"></i> Home</Link>
                <Link to="/services" onClick={() => setIsMenuOpen(false)}><i className="fas fa-concierge-bell"></i> Services</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}><i className="fas fa-users"></i> About</Link>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}><i className="fas fa-sign-in-alt"></i> Login</Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}><i className="fas fa-user-plus"></i> Register</Link>
            </div>

            <main className="flex-grow pt-[85px]">
                <Outlet />
            </main>

            {/* Footer */}
            <footer style={{
                background: 'linear-gradient(to bottom, var(--navy-dark), #040a0f)',
                color: 'rgba(255, 255, 255, 0.7)',
                padding: '90px 0 50px',
                position: 'relative',
                marginTop: 'auto'
            }}>
                <div className="container">
                    <div className="footer-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '45px',
                        marginBottom: '65px'
                    }}>
                        <div className="footer-col footer-about">
                            <Link to="/" className="logo" style={{ marginBottom: '20px' }}>
                                <img src={logo} alt="ServiLink" style={{ height: '40px', borderRadius: '8px', marginRight: '10px' }} />
                                ServiLink
                            </Link>
                            <p style={{ lineHeight: 1.8, fontSize: '16px' }}>
                                Connecting you with trusted local service professionals since 2026. Quality, reliability, and satisfaction guaranteed.
                            </p>
                            <div className="social-links" style={{ display: 'flex', gap: '18px', marginTop: '28px' }}>
                                {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map(icon => (
                                    <a key={icon} href="#" className="social-link" style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--white)',
                                        fontSize: '20px',
                                        transition: 'var(--transition)',
                                        textDecoration: 'none'
                                    }}>
                                        <i className={`fab fa-${icon}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="footer-col">
                            <h3 style={{ color: 'var(--white)', fontSize: '24px', marginBottom: '25px', position: 'relative', paddingBottom: '12px', fontWeight: 800 }}>Services</h3>
                            <ul className="footer-links" style={{ listStyle: 'none' }}>
                                {['Plumbing', 'Electrical', 'Cleaning', 'Painting', 'All Services'].map(item => (
                                    <li key={item} style={{ marginBottom: '16px' }}>
                                        <a href="#" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'var(--transition-quick)', display: 'block', fontSize: '16px' }}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3 style={{ color: 'var(--white)', fontSize: '24px', marginBottom: '25px', position: 'relative', paddingBottom: '12px', fontWeight: 800 }}>Contact</h3>
                            <ul className="contact-info" style={{ listStyle: 'none' }}>
                                <li style={{ marginBottom: '20px', display: 'flex', gap: '16px', fontSize: '16px', alignItems: 'flex-start' }}>
                                    <i className="fas fa-envelope" style={{ color: 'var(--green)' }}></i>
                                    <span>info@servilink.com</span>
                                </li>
                                <li style={{ marginBottom: '20px', display: 'flex', gap: '16px', fontSize: '16px', alignItems: 'flex-start' }}>
                                    <i className="fas fa-phone" style={{ color: 'var(--green)' }}></i>
                                    <span>+252634867444</span>
                                </li>
                                <li style={{ marginBottom: '20px', display: 'flex', gap: '16px', fontSize: '16px', alignItems: 'flex-start' }}>
                                    <i className="fas fa-map-marker-alt" style={{ color: 'var(--green)' }}></i>
                                    <span>Hargeisa, Somaliland</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom" style={{ textAlign: 'center', paddingTop: '35px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.5)' }}>
                        <p>© 2026 ServiLink. All rights reserved. | <a href="#" style={{ color: 'var(--green)' }}>Privacy Policy</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
