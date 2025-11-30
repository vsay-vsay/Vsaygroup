import React from "react";
import { Meteors } from "@/app/components/atom/meteors";
import { CheckCircle, Shield, Zap } from "lucide-react";

export default function MeteorsCards() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        
        {/* Light Card 1 - Blue */}
        <div className="relative w-full group">
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl" />
          
          <div className="relative flex flex-col items-start justify-between h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded-3xl lg:rounded-[2rem] border border-gray-200/50 bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:-translate-y-2">
            
            <div className="p-6 sm:p-8 flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl border-2 border-blue-200/60 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm shadow-lg mb-6 group-hover:scale-110 transition-all duration-300">
                <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 shadow-md" />
              </div>
              
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-4 pr-4 line-clamp-2">
                Lightning Fast Performance
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-8 pr-4 line-clamp-3 max-h-20 overflow-hidden">
                Blazing fast loading times with optimized code and cutting-edge performance techniques.
              </p>
              
              <button className="group/btn flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-blue-200/60 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/60 hover:bg-blue-500/10 text-sm sm:text-base font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300 hover:scale-[1.02]">
                Learn More
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <Meteors number={20} />
            </div>
          </div>
        </div>

        {/* Light Card 2 - Purple */}
        <div className="relative w-full group">
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl" />
          
          <div className="relative flex flex-col items-start justify-between h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded-3xl lg:rounded-[2rem] border border-purple-200/50 bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-purple-500/10 transition-all duration-500 group-hover:-translate-y-2">
            
            <div className="p-6 sm:p-8 flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl border-2 border-purple-200/60 bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-sm shadow-lg mb-6 group-hover:scale-110 transition-all duration-300">
                <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-purple-600 shadow-md" />
              </div>
              
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-4 pr-4 line-clamp-2">
                Enterprise Grade Security
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-8 pr-4 line-clamp-3 max-h-20 overflow-hidden">
                Military-grade encryption and protection built to keep your data safe and secure.
              </p>
              
              <button className="group/btn flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-purple-200/60 bg-gradient-to-r from-purple-50/80 to-pink-50/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/60 hover:bg-purple-500/10 text-sm sm:text-base font-semibold text-gray-800 hover:text-purple-600 transition-all duration-300 hover:scale-[1.02]">
                Learn More
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <Meteors number={20} />
            </div>
          </div>
        </div>

        {/* Light Card 3 - Green */}
        <div className="relative w-full group">
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-3xl" />
          
          <div className="relative flex flex-col items-start justify-between h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded-3xl lg:rounded-[2rem] border border-emerald-200/50 bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-emerald-500/10 transition-all duration-500 group-hover:-translate-y-2">
            
            <div className="p-6 sm:p-8 flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl border-2 border-emerald-200/60 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm shadow-lg mb-6 group-hover:scale-110 transition-all duration-300">
                <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600 shadow-md" />
              </div>
              
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-4 pr-4 line-clamp-2">
                Developer Friendly API
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-8 pr-4 line-clamp-3 max-h-20 overflow-hidden">
                Clean, intuitive APIs with comprehensive documentation and TypeScript support out of the box.
              </p>
              
              <button className="group/btn flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-emerald-200/60 bg-gradient-to-r from-emerald-50/80 to-teal-50/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 hover:border-emerald-500/60 hover:bg-emerald-500/10 text-sm sm:text-base font-semibold text-gray-800 hover:text-emerald-600 transition-all duration-300 hover:scale-[1.02]">
                Learn More
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <Meteors number={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
