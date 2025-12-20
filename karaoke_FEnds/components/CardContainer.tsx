import React from 'react';
import SongCard from '@/components/Songcard';
import FilterBar from '@/components/Filterbar';

interface SongData {
  id: number;
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

const CardContainer: React.FC = () => {
  const songs: SongData[] = [
    { id: 1, title: "ยินดี", artist: "Sarah Salola", duration: "3:45", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" },
    { id: 2, title: "ซ่อนกลิ่น", artist: "Palmy", duration: "4:20", cover: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&h=400&fit=crop" },
    { id: 3, title: "คู่กัน", artist: "Scrubb", duration: "3:15", cover: "https://images.unsplash.com/photo-1459749411177-042180ce673c?w=400&h=400&fit=crop" },
    { id: 4, title: "วัดปะหล่ะ", artist: "4EVE", duration: "3:50", cover: "https://images.unsplash.com/photo-1514525253361-b83f859b71c0?w=400&h=400&fit=crop" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* ใช้ Flex-row-reverse เพื่อย้าย FilterBar ไปทางขวา */}
      <div className="flex flex-col md:flex-row-reverse gap-10">
        
        {/* Sidebar Filter (ด้านขวา) */}
        <FilterBar onFilterChange={(cat) => console.log(cat)} />

        {/* Main Content: Song Grid (ด้านซ้าย) */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {songs.map((song) => (
              <SongCard 
                key={song.id}
                {...song} // ใช้ Spread operator เพื่อส่ง props ทั้งหมด
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CardContainer;