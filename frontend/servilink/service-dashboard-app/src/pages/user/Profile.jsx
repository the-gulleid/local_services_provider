import React, { useState } from "react";

const UserProfile = () => {
    const [formData, setFormData] = useState({
        fullName: "Gulleid",
        phone: "+252 63 9998887",
        address: "Hargeisa, Somaliland",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Profile:", formData);
        alert("Profile updated successfully ✅");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 relative">

                {/* Profile Image */}
                <div className="flex flex-col items-center -mt-16">
                    <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
                        <img
                            src=""
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="text-xl font-bold mt-4 text-gray-800">
                        {formData.fullName}
                    </h2>
                    <p className="text-gray-500 text-sm">
                        {formData.address}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5 mt-8">

                    {/* Full Name */}
                    <div>
                        <label className="text-sm font-semibold text-gray-600">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full mt-2 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-300 outline-none transition"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="text-sm font-semibold text-gray-600">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full mt-2 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-300 outline-none transition"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="text-sm font-semibold text-gray-600">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full mt-2 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-300 outline-none transition"
                        />
                    </div>

                    {/* Beautiful Update Button */}
                    <button
                        type="submit"
                        className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-600 hover:to-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                    >
                        ✨ Update Profile
                    </button>

                </form>
            </div>
        </div>
    );
};

export default UserProfile;
