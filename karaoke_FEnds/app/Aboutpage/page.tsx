'use client'
import React from 'react';
const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section 1: Hero - เน้น Typography ที่สวยงาม */}
        <section className="text-center mb-24">
          <span className="text-emerald-500 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            เราเชื่อว่าทุกคน<br />มีเสียงเพลงในหัวใจ
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            MyWebsite คือพื้นที่สำหรับคนรักเสียงเพลง ให้คุณได้ปลดปล่อยอารมณ์ผ่านบทเพลงที่คุณรัก 
            ด้วยระบบคาราโอเกะที่ทันสมัยและใช้งานง่ายที่สุด
          </p>
        </section>

        {/* Section 2: Core Values - ใช้ Grid 3 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 text-2xl">
              🎵
            </div>
            <h3 className="text-xl font-bold text-gray-900">เพลงที่หลากหลาย</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              รวบรวมเพลงจากทุกค่าย ทุกแนวเพลง เพื่อให้คุณหาเพลงที่ใช่สำหรับทุกช่วงเวลา
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 text-2xl">
              ✨
            </div>
            <h3 className="text-xl font-bold text-gray-900">ดีไซน์มินิมอล</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              ลดความซับซ้อน เพื่อให้คุณโฟกัสกับการร้องเพลงและเนื้อหาที่อยู่ตรงหน้า
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 text-2xl">
              🚀
            </div>
            <h3 className="text-xl font-bold text-gray-900">ประสบการณ์ลื่นไหล</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              เทคโนโลยีที่ล้ำสมัย ช่วยให้คุณร้องเพลงได้ต่อเนื่องไม่มีสะดุดในทุกอุปกรณ์
            </p>
          </div>
        </div>

        {/* Section 3: Simple Stats หรือความสำเร็จ */}
        <section className="bg-gray-50 rounded-[3rem] p-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-gray-400 text-xs font-bold uppercase mt-2">Songs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">5K+</div>
              <div className="text-gray-400 text-xs font-bold uppercase mt-2">Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-400 text-xs font-bold uppercase mt-2">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-gray-400 text-xs font-bold uppercase mt-2">Free</div>
            </div>
          </div>
        </section>

        {/* Section 4: Contact CTA */}
        <section className="mt-32 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">มีคำถามเพิ่มเติมไหม?</h2>
          <button className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95">
            ติดต่อทีมงานของเรา
          </button>
        </section>

      </div>
    </main>
  );
};

export default AboutPage;