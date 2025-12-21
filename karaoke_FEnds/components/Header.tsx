"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];
  return (
    /* เปลี่ยนจาก fixed เป็น absolute และเอา backdrop-blur ออกเพราะไม่ได้ลอยทับใครแล้ว */
    <header className="absolute top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo / Website Name */}
        <Link href={"/"}>
          <div className="text-xl font-semibold tracking-tight text-gray-800">
            MyWebsite
          </div>
        </Link>

        {/* Right: Navigation Menu */}
        <nav className="flex items-center gap-8">
          {/* Dynamic Menu Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Log In Button */}
          <Link href={"/Loginpage"}>
            <button className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer">
              Log in
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
