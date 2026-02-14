import { useData } from "../context/DataContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import BookingModal from "../components/BookingModal";

const Services = () => {
    const { providers } = useData();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState(null);

    const handleBookClick = (provider) => {
        setSelectedProvider(provider);
        setIsModalOpen(true);
    };

    const filters = ["All", "Plumbing", "Electrical", "Cleaning", "Painting"];

    const filteredProviders = providers.filter((provider) => {
        const matchesSearch =
            provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            provider.service.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            provider.service.toLowerCase().includes(selectedCategory.toLowerCase());

        return matchesSearch && matchesCategory;
    });

    return (
        <div style={{ padding: "60px 20px", background: "#f8f9fb" }}>
            {/* HEADER */}
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h1 style={{ fontSize: "40px", fontWeight: 800 }}>All Services</h1>
                <p style={{ color: "#6c757d", marginTop: "10px" }}>
                    Find trusted professionals for any service you need
                </p>

                <input
                    type="text"
                    placeholder="Search services or providers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        marginTop: "25px",
                        width: "100%",
                        maxWidth: "520px",
                        padding: "14px 20px",
                        borderRadius: "30px",
                        border: "1px solid #ddd",
                        outline: "none",
                    }}
                />
            </div>

            {/* FILTERS */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginBottom: "40px",
                }}
            >
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setSelectedCategory(filter)}
                        style={{
                            padding: "10px 22px",
                            borderRadius: "25px",
                            border: "none",
                            cursor: "pointer",
                            fontWeight: 600,
                            background:
                                selectedCategory === filter
                                    ? "linear-gradient(135deg,#2563eb,#1d4ed8)"
                                    : "#e9ecef",
                            color: selectedCategory === filter ? "#fff" : "#333",
                        }}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* PROVIDERS GRID */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
                    gap: "30px",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {filteredProviders.map((provider) => (
                    <div
                        key={provider.id}
                        style={{
                            background: "#fff",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}
                    >
                        {/* IMAGE (SMALL & FIT) */}
                        <div
                            style={{
                                width: "100%",
                                height: "150px", // 🔹 image yar
                                background: "#f1f3f5",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src={provider.image || "/default-provider.jpg"}
                                alt={provider.name}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain"
                                }}
                                onError={(e) => {
                                    e.target.src = "/default-provider.jpg";
                                }}
                            />
                        </div>

                        {/* CONTENT */}
                        <div
                            style={{
                                padding: "20px",
                                textAlign: "center",
                                flexGrow: 1,
                            }}
                        >
                            <h3 style={{ fontSize: "20px", fontWeight: 700 }}>
                                {provider.name}
                            </h3>
                            <p style={{ color: "#2563eb", fontWeight: 600 }}>
                                {provider.service}
                            </p>

                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "#6c757d",
                                    margin: "12px 0",
                                    minHeight: "45px",
                                }}
                            >
                                {provider.description}
                            </p>

                            <div
                                style={{
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    color: "#16a34a",
                                    marginBottom: "15px",
                                }}
                            >
                                ${provider.price}
                            </div>

                            <div style={{ display: "flex", gap: "10px" }}>
                                <Link
                                    to={`/provider/${provider.id}`}
                                    style={{
                                        flex: 1,
                                        padding: "10px",
                                        borderRadius: "12px",
                                        border: "2px solid #2563eb",
                                        color: "#2563eb",
                                        textDecoration: "none",
                                        fontWeight: 600,
                                    }}
                                >
                                    Profile
                                </Link>

                                <button
                                    onClick={() => handleBookClick(provider)}
                                    style={{
                                        flex: 1,
                                        padding: "10px",
                                        borderRadius: "12px",
                                        background:
                                            "linear-gradient(135deg,#2563eb,#1d4ed8)",
                                        color: "#fff",
                                        border: "none",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                    }}
                                >
                                    Book
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

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

export default Services;
