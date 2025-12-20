"use client";
import React from "react";
import Link from "next/link";
interface LoginPageProps {
  onBack?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      {/* Card Container */}
      <div className="bg-white w-full max-w-md p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 relative">
        {/* ปุ่มย้อนกลับ */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-8 left-8 text-gray-300 hover:text-emerald-500 transition-colors text-sm font-medium"
          >
            ← ย้อนกลับ
          </button>
        )}

        {/* Header ส่วนของ Login */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
            ยินดีต้อนรับ
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            กรุณาเข้าสู่ระบบเพื่อเริ่มร้องเพลง
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* Username Input */}
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

          {/* Password Input */}
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold 
                       rounded-2xl shadow-lg shadow-emerald-500/20 transition-all duration-300 
                       active:scale-[0.98] mt-4 cursor-pointer"
          >
            ลงชื่อเข้าใช้
          </button>
        </form>

        {/* Footer ของ Card */}
        <div className="mt-8 text-center text-sm">
          <span className="text-gray-400 font-medium">ยังไม่มีบัญชี? </span>
          <Link href={"/Registerpage"}>
            <button className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors cursor-pointer">
              สมัครสมาชิก
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
