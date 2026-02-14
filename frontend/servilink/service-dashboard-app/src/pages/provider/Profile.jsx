import React from 'react';

const Profile = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="card bg-white p-8 rounded-2xl shadow-lg">

                {/* HEADER */}
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-3xl font-bold text-emerald-700">
                        G
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
                        <p className="text-gray-500 text-sm">
                            Manage your personal information
                        </p>
                    </div>
                </div>

                {/* FORM */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">
                            Full Name
                        </label>
                        <input
                            type="text"
                            defaultValue="Gulleid Mohamed"
                            className="p-3 bg-gray-50 border border-gray-200 rounded-xl
                                       focus:ring-2 focus:ring-emerald-200 outline-none"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            defaultValue="+252 63 4567890"
                            className="p-3 bg-gray-50 border border-gray-200 rounded-xl
                                       focus:ring-2 focus:ring-emerald-200 outline-none"
                        />
                    </div>

                    <div className="flex flex-col gap-2 sm:col-span-2">
                        <label className="text-sm font-medium text-gray-600">
                            Email Address
                        </label>
                        <input
                            type="email"
                            defaultValue="gulleid@example.com"
                            className="p-3 bg-gray-50 border border-gray-200 rounded-xl
                                       focus:ring-2 focus:ring-emerald-200 outline-none"
                        />
                    </div>
                </div>

                {/* ACTION */}
                <div className="flex justify-end mt-8">
                    <button
                        className="bg-emerald-600 hover:bg-emerald-700
                                   text-white font-medium
                                   py-3 px-8 rounded-xl
                                   transition-all duration-200"
                    >
                        Save Changes
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile;
