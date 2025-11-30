"use client";
import { people } from "@/app/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen py-24 lg:py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-white/[0.1] [background-size:100px_100px]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`mx-auto max-w-4xl text-center mb-24 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-black via-gray-900 to-slate-900 bg-clip-text text-transparent mb-8 leading-tight">
             <span className="text-6xl lg:text-8xl block">Our Leadership</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
            World-class experts driving innovation
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {people.map((person, index) => {
            const delay = index * 100;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={person.name}
                className={`group relative bg-white/80 backdrop-blur-xl rounded-4xl p-10 border border-white/50 shadow-2xl overflow-hidden transition-all duration-700 ease-out ${
                  isHovered 
                    ? 'shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] translate-y-[-20px] scale-[1.05]' 
                    : `translate-y-0 scale-100 shadow-2xl ${isVisible ? 'translate-y-0 opacity-100 delay-${delay}ms' : 'translate-y-20 opacity-0'}`
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-4xl -z-10 transition-all duration-500 ${
                  isHovered ? 'from-indigo-500/10 to-purple-500/10' : ''
                }`} />
                
                {/* Profile Image */}
                <div className="relative mx-auto mb-8 w-32 h-32 lg:w-36 lg:h-36">
                  <div className={`absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-3xl blur-xl transition-all duration-700 ${
                    isHovered ? 'scale-110' : ''
                  }`} />
                  <div className={`relative w-full h-full rounded-3xl overflow-hidden ring-4 ring-white shadow-2xl transition-all duration-700 ${
                    isHovered ? 'ring-indigo-400/50 shadow-indigo-500/20 scale-110' : ''
                  }`}>
                    <Image
                      src={person.imageUrl}
                      alt={person.name}
                      fill
                      className={`object-cover transition-transform duration-700 ${
                        isHovered ? 'scale-110' : ''
                      }`}
                      sizes="160px"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-6">
                  <div>
                    <h3 className={`text-3xl lg:text-4xl font-black mb-2 bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text leading-tight transition-all duration-500 ${
                      isHovered ? 'text-indigo-600' : 'text-gray-900'
                    }`}>
                      {person.name}
                    </h3>
                    <div className={`w-24 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 ${
                      isHovered ? 'w-32' : ''
                    }`} />
                  </div>

                  <p className={`text-xl font-bold text-gray-700 px-6 py-3 bg-gradient-to-r from-indigo-100/50 to-purple-100/50 rounded-3xl border border-indigo-200/50 backdrop-blur-sm transition-all duration-500 ${
                    isHovered ? 'bg-indigo-200/70 scale-105' : ''
                  }`}>
                    {person.role}
                  </p>

                  {/* Stats Row */}
                  <div className="flex justify-center gap-8 text-sm text-gray-500">
                    <div className={`transition-colors duration-300 ${isHovered ? 'text-indigo-600 font-bold' : ''}`}>
                      5+ Years
                    </div>
                    <div className={`transition-colors duration-300 ${isHovered ? 'text-purple-600 font-bold' : ''}`}>
                      50+ Projects
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    className={`group/btn w-full max-w-xs mx-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-3xl shadow-xl border-0 transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 active:scale-95 ${
                      isHovered ? 'scale-105' : ''
                    }`}
                  >
                    View Profile
                    <span className={`ml-2 inline-block transition-transform duration-300 ${
                      isHovered ? 'translate-x-1' : ''
                    }`}>
                      →
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
