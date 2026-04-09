import React from "react";

function Toast({ show, type = "success", message, onClose }) {
    if (!show) return null;

    const bgColor =
        type === "success"
            ? "text-green-500"
            : type === "error"
                ? "text-red-500"
                : "text-blue-500";

    return (
        <div className="fixed top-5 right-5 bg-zinc-900 text-white px-5 py-4 rounded-lg shadow-lg border border-zinc-700 z-[100] w-[280px] animate-fade-in">

            <div className="flex items-start gap-3">
                <div className={`text-lg ${bgColor}`}>
                    {type === "success" ? "✔" : type === "error" ? "✖" : "ℹ"}
                </div>

                <div className="flex-1">
                    <p className="font-semibold text-sm capitalize">
                        {type}
                    </p>
                    <p className="text-gray-400 text-xs">
                        {message}
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white text-sm"
                >
                    ✕
                </button>
            </div>

            <div className="mt-3 h-[3px] w-full bg-zinc-700 rounded overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 animate-progress"></div>
            </div>

        </div>
    );
}

export default Toast;