"use client";
import CardContainer from "./CardContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/Store/store";
import { useEffect } from "react";
const HomeContent = () => {
  const username = useSelector((state: RootState) => state.userCreate.username);
  useEffect(() => {
    console.log("current username"+ ` ${username}`);
  }, []);
  return (
    /* เพิ่ม pt-32 หรือ pt-40 เพื่อดันเนื้อหาลงมาจาก Header ที่เป็น absolute */

    <main className="pt-40 pb-20 bg-white flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        {/* คราวนี้ H1 จะไม่จมแล้ว */}
        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-12">
          ร้องเพลงใดก็ได้
          <br className="hidden md:block" />
          ที่ต้องการร้อง
        </h1>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto w-full mb-16">
          <input
            type="text"
            placeholder="ค้นหาชื่อเพลง, ศิลปิน หรือเนื้อเพลง..."
            className="w-full px-8 py-5 bg-white border border-gray-200 rounded-full 
                       text-gray-900 placeholder-gray-400
                       focus:outline-none focus:border-emerald-500 shadow-sm text-lg transition-all"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-emerald-500 text-white px-8 py-2.5 rounded-full font-medium hover:bg-emerald-600 transition-colors">
            ค้นหา
          </button>
        </div>

        <hr className="border-t border-gray-100 w-full max-w-3xl mx-auto" />
        <CardContainer></CardContainer>
      </div>
    </main>
  );
};

export default HomeContent;
