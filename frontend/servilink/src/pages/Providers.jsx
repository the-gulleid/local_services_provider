import { useState } from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { Search, MapPin, Star, DollarSign, Filter } from 'lucide-react';
import BookingModal from '../components/BookingModal'; // Import Modal

const Providers = () => {
    const { providers } = useData();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterService, setFilterService] = useState('All');
    const [selectedProvider, setSelectedProvider] = useState(null); // Track selected provider
    const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

    const filteredProviders = providers.filter(provider => {
        const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            provider.service.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesService = filterService === 'All' || provider.service === filterService;
        return matchesSearch && matchesService;
    });

    const uniqueServices = ['All', ...new Set(providers.map(p => p.service))];

    return (
        <div className="bg-gray-50 dark:bg-gray-950 min-h-screen py-10 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                            Top Rated Professionals
                        </h2>
                        <p className="text-gray-500 text-lg">Browse and connect with the best in your area.</p>
                    </div>

                    <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-4">
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search providers..."
                                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none bg-white dark:bg-gray-900 shadow-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="relative w-full md:w-48">
                            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <select
                                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none bg-white dark:bg-gray-900 shadow-sm appearance-none cursor-pointer"
                                value={filterService}
                                onChange={(e) => setFilterService(e.target.value)}
                            >
                                {uniqueServices.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProviders.map((provider) => (
                        <motion.div
                            key={provider.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-md hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img
                                            src={provider.image}
                                            alt={provider.name}
                                            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-primary/20"
                                        />
                                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{provider.name}</h3>
                                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                                            {provider.service}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 bg-yellow-50 text-yellow-600 px-2 py-1 rounded-lg">
                                    <Star size={16} fill="currentColor" />
                                    <span className="font-bold">{provider.rating}</span>
                                    <span className="text-xs text-gray-400">({provider.reviews})</span>
                                </div>
                            </div>

                            <p className="text-gray-500 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                                {provider.description}
                            </p>

                            <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-6 mt-4">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <MapPin size={16} className="text-primary" />
                                        {provider.location}
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-900 font-bold text-lg dark:text-white">
                                        <DollarSign size={18} className="text-green-500" />
                                        {provider.price}
                                    </div>
                                </div>
                                <button
                                    onClick={() => { setSelectedProvider(provider); setIsModalOpen(true); }}
                                    className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg shadow-gray-900/20"
                                >
                                    Book Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredProviders.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-xl font-medium">No providers found matching your criteria.</p>
                        <button
                            className="mt-6 text-primary font-bold hover:underline"
                            onClick={() => { setSearchTerm(''); setFilterService('All'); }}
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>

            {/* Booking Modal */}
            {selectedProvider && (
                <BookingModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    provider={selectedProvider}
                />
            )}
        </div>
    );
};

export default Providers;
