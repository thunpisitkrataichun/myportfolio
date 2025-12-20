"use client";
import React from "react";
import Link from "next/link";
interface RegisterPageProps {
  onBackToLogin?: () => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onBackToLogin }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      {/* Card Container */}
      <div className="bg-white w-full max-w-md p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
            สร้างบัญชีใหม่
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            เข้าร่วมคอมมูนิตี้คนรักเสียงเพลงกับเรา
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* Full Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl 
                         focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 
                         focus:placeholder-transparent outline-none text-gray-700 
                         placeholder-gray-400 transition-all duration-300 font-medium"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl 
                         focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 
                         focus:placeholder-transparent outline-none text-gray-700 
                         placeholder-gray-400 transition-all duration-300 font-medium"
            />
          </div>

          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl 
                         focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 
                         focus:placeholder-transparent outline-none text-gray-700 
                         placeholder-gray-400 transition-all duration-300 font-medium"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl 
                         focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 
                         focus:placeholder-transparent outline-none text-gray-700 
                         placeholder-gray-400 transition-all duration-300 font-medium"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl 
                         focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 
                         focus:placeholder-transparent outline-none text-gray-700 
                         placeholder-gray-400 transition-all duration-300 font-medium"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold 
             rounded-2xl shadow-lg shadow-emerald-500/20 transition-all duration-300 
             active:scale-[0.98] mt-4 cursor-pointer relative z-20"
          >
            สร้างบัญชี
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm">
          <span className="text-gray-400 font-medium">มีบัญชีอยู่แล้ว? </span>

          <Link
            href="/Loginpage"
            className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors cursor-pointer relative z-10 p-1"
          >
            เข้าสู่ระบบ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
