import React, { useMemo, useState } from "react";
import {
    Search,
    Wrench,
    Home,
    Droplet,
    Zap,
    PaintBucket,
    Truck,
    Calculator,
    X,
} from "lucide-react";

const ApplicationServices = () => {
    const services = [
        {
            id: 1,
            name: "House Cleaning",
            icon: Home,
            color: "bg-purple-100 text-purple-600",
            description: "Professional deep cleaning for homes and apartments.",
        },
        {
            id: 2,
            name: "Plumbing Repair",
            icon: Droplet,
            color: "bg-blue-100 text-blue-600",
            description: "Leak fixing, drain cleaning, and pipe maintenance.",
        },
        {
            id: 3,
            name: "Electrical Services",
            icon: Zap,
            color: "bg-yellow-100 text-yellow-600",
            description: "Safe wiring, installations, and electrical repairs.",
        },
        {
            id: 4,
            name: "Painting Services",
            icon: PaintBucket,
            color: "bg-red-100 text-red-600",
            description: "High-quality interior and exterior painting.",
        },
        {
            id: 5,
            name: "AC Maintenance",
            icon: Wrench,
            color: "bg-cyan-100 text-cyan-600",
            description: "Cooling system servicing and repairs.",
        },
        {
            id: 6,
            name: "Moving & Transport",
            icon: Truck,
            color: "bg-green-100 text-green-600",
            description: "Safe and reliable moving of heavy items.",
        },
        {
            id: 7,
            name: "Accounting Services",
            icon: Calculator,
            color: "bg-emerald-100 text-emerald-600",
            description: "Professional accounting and financial services.",
        },
    ];

    // ✅ Search state
    const [query, setQuery] = useState("");

    // ✅ Booking modal state
    const [selectedService, setSelectedService] = useState(null);

    // ✅ Booking form state
    const [bookingData, setBookingData] = useState({
        name: "",
        phone: "",
        address: "",
        date: "",
    });

    const filteredServices = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return services;
        return services.filter(
            (s) =>
                s.name.toLowerCase().includes(q) ||
                s.description.toLowerCase().includes(q)
        );
    }, [query, services]);

    const openBooking = (service) => {
        setSelectedService(service);
        setBookingData({ name: "", phone: "", address: "", date: "" });
    };

    const closeBooking = () => {
        setSelectedService(null);
    };

    const handleBookingChange = (e) => {
        const { name, value } = e.target;
        setBookingData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();

        if (
            !bookingData.name.trim() ||
            !bookingData.phone.trim() ||
            !bookingData.address.trim() ||
            !bookingData.date.trim()
        ) {
            alert("Please fill all fields ❗");
            return;
        }

        const payload = {
            serviceId: selectedService.id,
            serviceName: selectedService.name,
            ...bookingData,
            createdAt: new Date().toISOString(),
        };

        console.log("✅ Booking Submitted:", payload);
        alert(`Booking confirmed ✅\nService: ${selectedService.name}`);

        closeBooking();
    };

    return (
        <div className="min-h-screen bg-gray-50 px-6 lg:px-10 py-8">
            <header className="mb-12">
                <h1 className="text-3xl font-extrabold text-gray-900">
                    Browse Services
                </h1>
                <p className="mt-3 text-gray-500 max-w-2xl">
                    Discover trusted professionals ready to help you with home, business,
                    and personal services.
                </p>
            </header>

            {/* ================= SEARCH SECTION ================= */}
            <section className="mb-12">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Search Services
                </h2>

                <div className="relative max-w-xl">
                    <Search
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                    />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for a service..."
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                    />
                </div>
            </section>

            {/* ================= SERVICES SECTION ================= */}
            <section>
                <h2 className="text-lg font-semibold text-gray-800 mb-6">
                    Available Services
                </h2>

                {filteredServices.length === 0 ? (
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 text-gray-600">
                        No services found for: <span className="font-semibold">{query}</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service) => (
                            <div
                                key={service.id}
                                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
                            >
                                <div
                                    className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                                >
                                    <service.icon size={30} />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.name}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <button
                                    onClick={() => openBooking(service)}
                                    className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Book Service
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* ================= BOOKING MODAL ================= */}
            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 relative">
                        <button
                            onClick={closeBooking}
                            className="absolute right-4 top-4 p-2 rounded-lg hover:bg-gray-100"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-bold text-gray-900">
                            Book: {selectedService.name}
                        </h2>
                        <p className="text-gray-500 mt-1 text-sm">
                            Fill your details and confirm booking.
                        </p>

                        <form onSubmit={handleBookingSubmit} className="mt-6 space-y-5">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Name
                                </label>
                                <input
                                    name="name"
                                    value={bookingData.name}
                                    onChange={handleBookingChange}
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
      focus:border-blue-500 focus:ring-4 focus:ring-blue-100
      transition-all duration-200 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    name="phone"
                                    value={bookingData.phone}
                                    onChange={handleBookingChange}
                                    placeholder="+252..."
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
      focus:border-blue-500 focus:ring-4 focus:ring-blue-100
      transition-all duration-200 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Address
                                </label>
                                <input
                                    name="address"
                                    value={bookingData.address}
                                    onChange={handleBookingChange}
                                    placeholder="Your location"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
      focus:border-blue-500 focus:ring-4 focus:ring-blue-100
      transition-all duration-200 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Booking Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={bookingData.date}
                                    onChange={handleBookingChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
      focus:border-blue-500 focus:ring-4 focus:ring-blue-100
      transition-all duration-200 outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 mt-4 rounded-xl font-bold text-white
    bg-gradient-to-r from-blue-600 to-indigo-600
    hover:from-indigo-600 hover:to-blue-600
    shadow-lg hover:shadow-xl
    transform hover:-translate-y-1
    transition-all duration-300"
                            >
                                 Confirm Booking
                            </button>

                        </form>

                    </div>
                </div>
            )}
        </div>
    );
};

export default ApplicationServices;
