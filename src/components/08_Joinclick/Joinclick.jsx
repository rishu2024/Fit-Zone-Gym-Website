import React, { useState } from "react";
import Toast from "../09_Toast/Toast";

function Joinclick({ isOpen, setIsOpen }) {
    const [showToast, setShowToast] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
            setIsOpen(false);
        }, 2500);
    };

    return (
        <>
            <Toast
                show={showToast}
                type="success"
                message="We will contact you soon"
                onClose={() => setShowToast(false)}
            />

            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
                <div className="bg-zinc-900 text-white rounded-2xl p-8 w-[90%] max-w-md relative shadow-2xl border border-zinc-800">

                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-3 right-4 text-xl hover:text-red-500"
                    >
                        ✕
                    </button>

                    <h2 className="text-2xl font-bold mb-2 text-center">
                        Join <span className="text-red-500">FitZone</span>
                    </h2>

                    <p className="text-gray-400 text-center mb-6">
                        Enter your details and we will contact you
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            className="px-4 py-2 rounded bg-black border border-zinc-700 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            className="px-4 py-2 rounded bg-black border border-zinc-700 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                        />

                        <input
                            type="email"
                            placeholder="Email (optional)"
                            className="px-4 py-2 rounded bg-black border border-zinc-700 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                        />

                        <button
                            type="submit"
                            className="relative overflow-hidden px-6 py-2 rounded-full font-semibold text-white transition duration-300 group mt-2"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 group-hover:scale-110 transition duration-300"></span>
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-500 blur-md transition duration-300"></span>
                            <span className="relative z-10">
                                Request Callback →
                            </span>
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Joinclick;