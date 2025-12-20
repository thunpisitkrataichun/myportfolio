import React from "react";

// กำหนดโครงสร้างข้อมูลของ Props
interface SongCardProps {
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

const SongCard: React.FC<SongCardProps> = ({
  title,
  artist,
  duration,
  cover,
}) => {
  return (
    <div className="group bg-white rounded-[2rem] p-4 border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 cursor-pointer">
      {/* รูปหน้าปกเพลง */}
      <div className="relative aspect-square mb-5 overflow-hidden rounded-[1.5rem] bg-gray-100">
        <img
          src={cover}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white/90 p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-emerald-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* ข้อมูลเพลง */}
      <div className="px-2 mb-5">
        <h3 className="font-bold text-gray-900 text-lg truncate mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-400 font-medium mb-2">{artist}</p>
        <div className="flex items-center text-xs font-semibold text-emerald-500/80 bg-emerald-50 w-fit px-2 py-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {duration} นาที
        </div>
      </div>

      {/* ปุ่มกดเล่น */}
      <button className="w-full py-3 bg-gray-900 text-white rounded-2xl text-sm font-bold transition-all duration-300 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30">
        ร้องเพลงนี้
      </button>
    </div>
  );
};

export default SongCard;
