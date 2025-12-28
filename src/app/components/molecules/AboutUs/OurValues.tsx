import React from "react";
import { Meteors } from "@/app/components/atom/meteors";
import { CheckCircle } from "lucide-react";

export default function MeteorsCards() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        
        {/* Card 1 */}
        <div className="relative w-full">
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
          <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-200 bg-white dark:bg-gray-900 px-4 sm:px-6 py-6 sm:py-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600 dark:text-gray-500 mb-3 sm:mb-4" />

            <h1 className="relative z-50 mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              Excellence in Action
            </h1>

            <p className="relative z-50 mb-4 sm:mb-6 text-sm sm:text-base font-normal text-gray-600 line-clamp-3 dark:text-slate-500">
              We deliver the highest quality solutions and maintain the highest standards in everything we do.
            </p>

           

            <Meteors number={20} />
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-full">
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
          <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border dark:bg-gray-900 border-gray-200 bg-white px-4 sm:px-6 py-6 sm:py-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600 mb-3 sm:mb-4 dark:text-gray-500" />

            <h1 className="relative z-50 mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              Collaboration 
            </h1>

            <p className="relative z-50 mb-4 sm:mb-6 text-sm sm:text-base font-normal text-gray-600 line-clamp-3 dark:text-slate-500">
              We work closely with our clients to understand their needs and deliver tailored solutions.
            </p>

           

            <Meteors number={20} />
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-full">
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
          <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border dark:bg-gray-900 border-gray-200 bg-white px-4 sm:px-6 py-6 sm:py-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600 mb-3 sm:mb-4 dark:text-gray-500" />

            <h1 className="relative z-50 mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              Innovation
            </h1>

            <p className="relative z-50 mb-4 sm:mb-6 text-sm sm:text-base font-normal text-gray-600 line-clamp-3 dark:text-slate-500">
              We continuously explore new technologies and approaches to stay ahead of the curve.
            </p>

            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
