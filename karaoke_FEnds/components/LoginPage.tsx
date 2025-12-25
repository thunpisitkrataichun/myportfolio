"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUsername } from "@/lib/feature/userSlice";

interface LoginPageProps {
  onBack?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:8000/users/validate", {
        params: {
          username: form.username,
          password: form.password,
        },
      });
      if (response.data.length === 0) {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        return;
      }
      // สมมติว่า Backend ส่ง data กลับมาสำเร็จ
      console.log("Login successful:", response.data);

      // ✅ เก็บชื่อผู้ใช้ลงใน Redux
      dispatch(setUsername(form.username));
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white w-full max-w-md p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 relative">
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-8 left-8 text-gray-300 hover:text-emerald-500 transition-colors text-sm font-medium"
          >
            ← ย้อนกลับ
          </button>
        )}

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
            ยินดีต้อนรับ
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            กรุณาเข้าสู่ระบบเพื่อเริ่มร้องเพลง
          </p>
        </div>

        {/* Updated: Move handleSubmit to the form tag */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username" // Added name attribute
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl 
                         focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 
                         focus:placeholder-transparent outline-none text-gray-700 
                         placeholder-gray-400 transition-all duration-300 font-medium"
            />
          </div>

          <div>
            <input
              type="password"
              name="password" // Added name attribute
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl 
                         focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 
                         focus:placeholder-transparent outline-none text-gray-700 
                         placeholder-gray-400 transition-all duration-300 font-medium"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold 
                       rounded-2xl shadow-lg shadow-emerald-500/20 transition-all duration-300 
                       active:scale-[0.98] mt-4 cursor-pointer"
          >
            ลงชื่อเข้าใช้
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-gray-400 font-medium">ยังไม่มีบัญชี? </span>
          <Link href={"/Registerpage"}>
            <span className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors cursor-pointer">
              สมัครสมาชิก
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
