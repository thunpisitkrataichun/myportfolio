"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/Store/store";

const Header = () => {
  // ดึงค่า username จาก Redux
  const username = useSelector((state: RootState) => state.userCreate.username);

  useEffect(() => {
    if (!username) return; // ถ้าไม่มี user ไม่ต้องยิง API

    const fetchData = async () => {
      try {
        // แนะนำให้ใช้ path ที่ถูกต้องตามที่ตั้งไว้ใน NestJS
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/findone`, {
          params: { username }
        });
        console.log("Fetched data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [username]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="absolute top-0 w-full bg-white border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href={"/"}>
          <div className="text-xl font-bold tracking-tight text-gray-900">
            My<span className="text-emerald-500">Website</span>
          </div>
        </Link>

        {/* Right: Navigation */}
        <nav className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-500 hover:text-emerald-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login Button OR Username Display */}
          <div className="flex items-center border-l pl-6 border-gray-100">
            {username ? (
              // แสดงชื่อเมื่อ Login แล้ว (Minimal Shadow Box)
              <div className="flex items-center gap-3 px-4 py-1.5 bg-white border border-gray-100 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-7 h-7 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold uppercase">
                  {username.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-gray-700">{username}</span>
              </div>
            ) : (
              // แสดงปุ่ม Log in เมื่อยังไม่ได้ Login
              <Link href={"/Loginpage"}>
                <button className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-full border border-gray-200 shadow-sm transition-all duration-200 active:scale-95">
                  Log in
                </button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;