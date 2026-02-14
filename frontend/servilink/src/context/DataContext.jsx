import { createContext, useContext, useState, useEffect } from 'react';
import siise from '../assets/abdiaziz.jpeg'
import KHALID from '../assets/KHALID.jpg'
import ALI from '../assets/ALI.jpg'
import abdi from '../assets/abdi.png'
import eng from '../assets/eng.png'
import Eid from '../assets/img.png'


const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [services, setServices] = useState([
        { id: 1, name: 'Plumbing', icon: '', description: 'Fix leaks, install pipes, and more.', image: 'https://images.unsplash.com/photo-1581578731117-104f2a41272c?auto=format&fit=crop&q=80&w=400' },
        { id: 2, name: 'Electrical', icon: '', description: 'Wiring, repairs, and installations.', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400' },
        { id: 3, name: 'Cleaning', icon: '', description: 'Home and office cleaning services.', image: 'https://images.unsplash.com/photo-1581578731117-104f2a41272c?auto=format&fit=crop&q=80&w=400' }, // Placeholder
        { id: 4, name: 'Moving', icon: '', description: 'Help with relocating to a new place.', image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=400' },
        { id: 5, name: 'Painting', icon: '', description: 'Interior and exterior painting.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400' },
        { id: 6, name: 'Gardening', icon: '', description: 'Lawn care and landscaping.', image: 'https://images.unsplash.com/photo-1615811361524-6830df58bca6?auto=format&fit=crop&q=80&w=400' },
    ]);

    const [providers, setProviders] = useState([
        { id: 1, name: 'Abdiaziz ahmed farah', service: 'senior Accountent', rating: 4.8, reviews: 120, location: 'Soomaaliand , Hr', price: '$50/hr', image: siise, description: 'Experienced Accounting with 10 years of experience.' },
        { id: 2, name: 'khalid abdirahman sulub', service: ' senuior Devloper', rating: 4.9, reviews: 85, location: 'Soomaliland, HR', price: '$60/hr', image: KHALID, description: 'Certified electrician specializing in residential repairs.' },
        { id: 3, name: 'Ali mmowlid abdillahi ', service: 'senior accounting ', rating: 4.7, reviews: 200, location: 'soomaliland, HR', price: '$40/hr', image: ALI, description: 'Professional manageging finance and offices.' },
        { id: 4, name: 'Abdirahman mustafe askar', service: 'web developer', rating: 4.9, reviews: 50, location: 'soomaliland, hr', price: '$45/hr', image: abdi, description: 'Passionate gardener helping you create your dynamic web aps .' },
        { id: 5, name: 'Abdirahman ibrahim', service: 'database managment', rating: 4.6, reviews: 150, location: 'hargeisa, som', price: '$80/hr', image: eng, description: 'Reliable moving service for local and long-distance moves.' },
        { id: 5, name: 'Eid abdirahman yousuf', service: 'programmer ', rating: 4.6, reviews: 150, location: 'hargeisa, som', price: '$80/hr', image: Eid, description: 'Reliable moving service for local and long-distance moves.' },

    ]);

    const [bookings, setBookings] = useState([
        { id: 201, customer: 'Alice Wong', service: 'Plumbing', provider: 'John Doe', date: '2023-11-05', status: 'pending', price: '$150' },
        { id: 202, customer: 'Bob Smith', service: 'Electrical', provider: 'Jane Smith', date: '2023-11-06', status: 'accepted', price: '$200' },
    ]);

    const addBooking = (booking) => {
        setBookings(prev => [...prev, { ...booking, id: Date.now(), status: 'pending', date: new Date().toLocaleDateString() }]);
    };

    const updateBookingStatus = (id, status) => {
        setBookings(prev => prev.map(booking =>
            booking.id === id ? { ...booking, status } : booking
        ));
    };

    return (
        <DataContext.Provider value={{ services, providers, bookings, addBooking, updateBookingStatus }}>
            {children}
        </DataContext.Provider>
    );
};
