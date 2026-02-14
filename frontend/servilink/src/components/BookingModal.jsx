import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MessageSquare, CheckCircle } from 'lucide-react';
import { useData } from '../context/DataContext';

const BookingModal = ({ isOpen, onClose, provider }) => {
    const { addBooking } = useData();
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({ date: '', time: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        addBooking({
            provider: provider.name,
            service: provider.service,
            price: provider.price,
            ...bookingData
        });
        setStep(2); // Success state
        setTimeout(() => {
            onClose();
            setStep(1); // Reset
            setBookingData({ date: '', time: '', message: '' });
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700 relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 outline-none focus:ring-2 focus:ring-primary/50"
                    >
                        <X size={20} className="text-gray-500 dark:text-gray-300" />
                    </button>

                    <div className="p-8">
                        {step === 1 ? (
                            <>
                                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Book {provider.service}</h2>
                                <p className="text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
                                    with <span className="font-semibold text-primary">{provider.name}</span>
                                    • <span className="text-green-600 font-bold bg-green-50 px-2 rounded-md">{provider.price}</span>
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                                            <input
                                                type="date"
                                                required
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                                                value={bookingData.date}
                                                onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Time</label>
                                        <input
                                            type="time"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                                            value={bookingData.time}
                                            onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message (Optional)</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                                            <textarea
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white min-h-[100px]"
                                                placeholder="Describe your issue..."
                                                value={bookingData.message}
                                                onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-primary/30 transition-all transform active:scale-95"
                                    >
                                        Confirm Booking
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 animate-bounce">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Booking Confirmed!</h3>
                                <p className="text-gray-500 dark:text-gray-400">Your request has been sent to {provider.name}.</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default BookingModal;
