"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUsername } from "@/lib/feature/userSlice";
interface RegisterPageProps {
  onBackToLogin?: () => void;
}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  
  const apiUrl = "http://localhost:8000/users/createUser";
  const apiUrl2 = "http://localhost:8000/customers/createCustomer";
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    const payload2 = {
      fullName: formData.fullName,
      username: formData.username,
    };

    try {
      const response = await axios.post(apiUrl, payload);
      //
      const response2 = await axios.post(apiUrl2, payload2);
      console.log("Registration successful:", response.data);
      console.log(response2.data);
      dispatch(setUsername(formData.username));
      router.push("/");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

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
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="username"
              value={formData.username}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
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
            onClick={handleSubmit}
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
