import React from "react";
import { Meteors } from "@/app/components/atom/meteors";
import { CheckCircle } from "lucide-react";

export default function MeteorsCards() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        
        {/* Light Card */}
        <div className="relative w-full group">
          {/* Same gradient backdrop for all cards */}
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
          
          <div className="relative flex flex-col items-start justify-between h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded-3xl lg:rounded-[2rem] border border-gray-200/50 dark:border-gray-800/70 bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm dark:from-gray-900/90 dark:to-gray-800/90 shadow-2xl shadow-black/5 dark:shadow-black/20 hover:shadow-3xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:-translate-y-2">
            
            <div className="p-6 sm:p-8 flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl border-2 border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 dark:text-blue-400" />
              </div>
              
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-4 pr-4 line-clamp-2">
                Meteors because they're cool
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 pr-4 line-clamp-3 max-h-20 overflow-hidden">
                I don't know what to write so I'll just paste something cool here. One more sentence because lorem ipsum is just unacceptable.
              </p>
              
              <button className="group/btn flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-gray-300/50 dark:border-gray-600/50 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10 dark:hover:bg-blue-500/20 text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-[1.02]">
                Explore
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-0">
              <Meteors number={20} />
            </div>
          </div>
        </div>

        {/* Dark Card 1 */}
        <div className="relative w-full group">
          {/* Same gradient backdrop */}
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
          
          <div className="relative flex flex-col items-start justify-between h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded-3xl lg:rounded-[2rem] border border-gray-800/70 bg-gradient-to-br from-gray-900/95 to-black/20 dark:from-gray-900/90 dark:to-gray-950/90 backdrop-blur-xl shadow-2xl shadow-black/30 hover:shadow-3xl hover:shadow-purple-500/20 transition-all duration-500 group-hover:-translate-y-2">
            
            <div className="p-6 sm:p-8 flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl border border-gray-600/50 bg-gray-800/50 backdrop-blur-sm shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                </svg>
              </div>
              
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight mb-4 pr-4 line-clamp-2">
                Meteors because they're cool
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 dark:text-gray-400 leading-relaxed mb-8 pr-4 line-clamp-3 max-h-20 overflow-hidden">
                I don't know what to write so I'll just paste something cool here. One more sentence because lorem ipsum is just unacceptable.
              </p>
              
              <button className="group/btn flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-gray-600/50 bg-gray-800/60 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/10 text-sm sm:text-base font-semibold text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-[1.02]">
                Explore
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-0">
              <Meteors number={20} />
            </div>
          </div>
        </div>

        {/* Dark Card 2 */}
        <div className="relative w-full group md:col-span-1 xl:col-span-1">
          {/* Same gradient backdrop */}
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
          
          <div className="relative flex flex-col items-start justify-between h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded-3xl lg:rounded-[2rem] border border-gray-800/70 bg-gradient-to-br from-gray-900/95 to-black/20 backdrop-blur-xl shadow-2xl shadow-black/30 hover:shadow-3xl hover:shadow-emerald-500/20 transition-all duration-500 group-hover:-translate-y-2">
            
            <div className="p-6 sm:p-8 flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl border border-gray-600/50 bg-gray-800/50 backdrop-blur-sm shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                </svg>
              </div>
              
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight mb-4 pr-4 line-clamp-2">
                Meteors because they're cool
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed mb-8 pr-4 line-clamp-3 max-h-20 overflow-hidden">
                I don't know what to write so I'll just paste something cool here. One more sentence because lorem ipsum is just unacceptable.
              </p>
              
              <button className="group/btn flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-gray-600/50 bg-gray-800/60 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-sm sm:text-base font-semibold text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:scale-[1.02]">
                Explore
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-0">
              <Meteors number={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
