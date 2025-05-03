import React from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6a82fb] to-[#fc5c7d] flex flex-col items-center justify-center text-white px-6 font-sans">
      <h1 className="text-6xl md:text-7xl font-extrabold mb-4 drop-shadow-2xl text-center animate-fade-in-down">
        Welcome to <span className="text-[#ffdd00]">InstaPay</span>
      </h1>

      <p className="text-xl md:text-2xl text-center max-w-3xl mb-12 leading-relaxed text-gray-200 animate-fade-in-up">
        Experience seamless money transfers, real-time updates, and absolute security — all in one place. Start your journey with PayBridge today!
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <button
          onClick={() => navigate("/signin")}
          className="px-12 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-[#ff6a00] via-[#ff416c] to-[#fc5c7d] text-white shadow-xl hover:scale-110 transition-transform duration-300"
        >
           Sign In 🚪
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="px-12 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-[#34d399] via-[#2dd4bf] to-[#3b82f6] text-white shadow-xl hover:scale-110 transition-transform duration-300"
        >
           Sign Up ✍️
        </button>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl text-center">
        <div className="bg-white bg-opacity-15 p-6 rounded-2xl shadow-xl backdrop-blur-sm hover:bg-opacity-20 transition duration-300">
          <h3 className="text-3xl font-bold text-yellow-300 mb-2">Secure Transfers 🔐 </h3>
          <p className="text-base text-gray-200">
            Experience end-to-end encrypted transactions, ensuring complete security for your money.
          </p>
        </div>

        <div className="bg-white bg-opacity-15 p-6 rounded-2xl shadow-xl backdrop-blur-sm hover:bg-opacity-20 transition duration-300">
          <h3 className="text-3xl font-bold text-blue-300 mb-2">Instant Balance ⚡ </h3>
          <p className="text-base text-gray-200">
            Check your available balance instantly after every transaction. Real-time updates, no delays.
          </p>
        </div>

        <div className="bg-white bg-opacity-15 p-6 rounded-2xl shadow-xl backdrop-blur-sm hover:bg-opacity-20 transition duration-300">
          <h3 className="text-3xl font-bold text-pink-300 mb-2">Smart Interface 🧠</h3>
          <p className="text-base text-gray-200">
            A clean and responsive design, optimized for clarity and ease of use across all devices.
          </p>
        </div>
      </div>
    </div>
  );
};
